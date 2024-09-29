import { ChatWindow } from "@/components/ChatWindow";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { reconstructURLs } from "@/utils/helperFunctions";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
export default async function Page({ params }: PageProps) {
  const cookie = cookies().get("sessionId")?.value;
  const reconstructedURL = reconstructURLs(params.url as string[]);
  const sessionId = (reconstructedURL + "--" + cookie).replace(/\//g, "");
  const isUrlAlreadyExists = await redis.sismember(
    "indexed-urls",
    reconstructedURL
  );

  const history = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });
  if (!isUrlAlreadyExists) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedURL,
      config: {
        chunkOverlap: 50,
        chunkSize: 200,
      },
    });
    await redis.sadd("indexed-urls", reconstructedURL);
  }
  return <ChatWindow sessionId={sessionId} history={history} />;
}

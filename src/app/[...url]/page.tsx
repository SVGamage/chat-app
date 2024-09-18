import { ChatWindow } from "@/components/ChatWindow";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { reconstructURLs } from "@/utils/helperFunctions";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
export default async function Page({ params }: PageProps) {
  const reconstructedURL = reconstructURLs(params.url as string[]);
  const isUrlAlreadyExists = await redis.sismember(
    "indexed-urls",
    reconstructedURL
  );
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
  return <ChatWindow sessionId="mock-id" />;
}

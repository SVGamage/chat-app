import { ragChat } from "@/lib/rag-chat";
import { reconstructURLs } from "@/utils/helperFunctions";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
export default async function Page({ params }: PageProps) {
  const reconstructedURL = reconstructURLs(params.url as string[]);

  await ragChat.context.add({
    type: "html",
    source: reconstructedURL,
    config: {
      chunkOverlap: 50,
      chunkSize: 200,
    },
  });
  return <div>{params.url}</div>;
}

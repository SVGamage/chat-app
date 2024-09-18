import { Message } from "@/components/Message";
import { type Message as IMessage } from "ai/react";
interface MessagesProps {
  messages: IMessage[];
}
export function Messages({ messages }: MessagesProps) {
  return (
    <>
      {messages ? (
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      ) : (
        <div>No Conversations</div>
      )}
    </>
  );
}

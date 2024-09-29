import { Message } from "@/components/Message";
import { type Message as IMessage } from "ai/react";
import { useEffect, useRef } from "react";
interface MessagesProps {
  messages: IMessage[];
}
export function Messages({ messages }: MessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <>
      {messages ? (
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      ) : (
        <div>No Conversations</div>
      )}
      <div ref={messagesEndRef} />
    </>
  );
}

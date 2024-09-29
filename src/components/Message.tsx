import { cn } from "@/lib/utils";
import { MessageAvatar } from "@/components/MessageAvatar";
import { MessageContent } from "@/components/MessageContent";
interface IMessage {
  message: {
    content: string;
    role: string;
  };
}
export function Message({ message }: IMessage) {
  return (
    <div
      className={`flex mb-4 ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={cn("flex flex-col w-full", {
          "items-end": message.role === "user",
          "items-start": message.role !== "user",
        })}
      >
        <MessageAvatar sender={message.role} />
        <MessageContent message={message} />
      </div>
    </div>
  );
}

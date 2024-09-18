import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { MessageAvatar } from "@/components/MessageAvatar";
import { MessageContent } from "@/components/MessageContent";
interface IMessage {
  message: {
    text: string;
    sender: string;
  };
}
export function Message({ message }: IMessage) {
  return (
    <div
      className={`flex mb-4 ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={cn("flex flex-col", {
          "items-end": message.sender === "user",
          "items-start": message.sender === "ai",
        })}
      >
        <MessageAvatar sender={message.sender} />
        <MessageContent message={message} />
      </div>
    </div>
  );
}

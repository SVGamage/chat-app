import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

export function MessageAvatar({ sender }: { sender: string }) {
  return (
    <div className="flex items-center space-x-2 mb-1">
      {sender === "ai" && (
        <Avatar>
          <AvatarFallback>
            <Bot size={24} />
          </AvatarFallback>
        </Avatar>
      )}
      <span className="text-sm font-medium">
        {sender === "user" ? "You" : "AI"}
      </span>
      {sender === "user" && (
        <Avatar>
          <AvatarFallback>
            <User size={24} />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

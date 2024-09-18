import { cn } from "@/lib/utils";

export function MessageContent({
  message,
}: {
  message: { text: string; sender: string };
}) {
  return (
    <div
      className={cn("p-3 rounded-lg", {
        "bg-primary text-primary-foreground": message.sender === "user",
        "bg-secondary text-secondary-foreground": message.sender === "ai",
      })}
    >
      {message.text}
    </div>
  );
}

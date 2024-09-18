import { cn } from "@/lib/utils";

export function MessageContent({
  message,
}: {
  message: { content: string; role: string };
}) {
  return (
    <div
      className={cn("p-3 rounded-lg", {
        "bg-primary text-primary-foreground": message.role === "user",
        "bg-secondary text-secondary-foreground": message.role === "ai",
      })}
    >
      {message.content}
    </div>
  );
}

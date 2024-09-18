"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Messages } from "@/components/Messages";
import { useChat } from "ai/react";
import ChatInputForm from "./ChatInputForm";

export function ChatWindow({ sessionId }: { sessionId: string }) {
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    api: "/api/chat-stream",
    body: {
      sessionId,
    },
  });

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Ask From AI</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          <Messages messages={messages} />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <ChatInputForm
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </CardFooter>
    </Card>
  );
}

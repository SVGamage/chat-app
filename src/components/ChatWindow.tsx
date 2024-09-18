"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Messages } from "@/components/Messages";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useChat } from "ai/react";

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
        <form
          onSubmit={handleSubmit}
          className="flex w-full  items-center justify-center space-x-2"
        >
          <div className="relative w-full max-w-2xl ">
            <Textarea
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              className="resize-none min-h-[55px] pr-14"
              rows={1}
            />
            <Button type="submit" className="absolute bottom-2 right-2">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}

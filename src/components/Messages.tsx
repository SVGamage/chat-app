import { useState } from "react";
import { Message } from "@/components/Message";

export function Messages() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "ai" },
    {
      text: "I'm here to help you with any questions or tasks you may have.",
      sender: "user",
    },
    {
      text: "I'm here to help you with any questions or tasks you may have.",
      sender: "user",
    },
    {
      text: "I'm here to help you with any questions or tasks you may have.",
      sender: "user",
    },
    {
      text: "I'm here to help you with any questions or tasks you may have.",
      sender: "user",
    },
    {
      text: "I'm here to help you with any questions or tasks you may have.",
      sender: "user",
    },
    {
      text: "I'm here to help you with any questions or tasks you may have.",
      sender: "user",
    },
    { text: "Hello! How can I assist you today?", sender: "ai" },
  ]);
  return (
    <>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </>
  );
}

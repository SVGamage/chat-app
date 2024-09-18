import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
interface InputFormProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function ChatInputForm({
  input,
  handleInputChange,
  handleSubmit,
}: InputFormProps) {
  return (
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
  );
}

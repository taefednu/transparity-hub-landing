import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  time: string;
  hasCheckmark?: boolean;
  isPurple?: boolean;
  read?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  if (message.isBot) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex justify-start mb-1"
      >
        <div className="max-w-[80%]">
          <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2.5">
            <p className="whitespace-pre-line text-[15px] leading-relaxed text-gray-800">{message.text}</p>
          </div>
          <div className="flex items-center gap-1.5 mt-1 ml-1 text-xs text-gray-400">
            <span>{message.time}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-end mb-1"
    >
      <div className="max-w-[80%] flex flex-col items-end">
        <div className="bg-gradient-to-br from-[#009F6B] to-[#00c78a] text-white rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm">
          <p className="text-[15px] leading-relaxed">{message.text}</p>
        </div>
        <div className="flex items-center gap-1.5 mt-1 mr-1 text-xs text-gray-400">
          <span>{message.time}</span>
          <Check size={12} className="text-[#009F6B]" strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
}


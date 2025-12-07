import { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2.5">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Напишите сообщение..."
        className="flex-1 h-11 bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-[#009F6B] focus:bg-white transition-all text-[15px] placeholder:text-gray-400"
        style={{ 
          paddingTop: '12px', 
          paddingBottom: '12px',
          paddingLeft: '24px',
          paddingRight: '20px'
        }}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="w-12 h-12 bg-[#009F6B] hover:bg-[#00c78a] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
      >
        <Send size={20} />
      </button>
    </form>
  );
}


import { Minus } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#009F6B] to-[#00c78a] px-5 py-4 text-white rounded-t-2xl relative">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h3 className="font-semibold text-lg">Transparity AI</h3>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <span className="text-sm text-green-100">Online</span>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        aria-label="Close chat"
      >
        <Minus size={20} />
      </button>
    </div>
  );
}


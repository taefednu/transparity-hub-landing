import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { api } from "../lib/api";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  time: string;
  hasCheckmark?: boolean;
  isPurple?: boolean;
  read?: boolean;
}

const QUICK_QUESTIONS = [
  { emoji: "🤔", text: "Что делает ваш проект?" },
  { emoji: "👥", text: "Для кого предназначен продукт?" },
  { emoji: "⚙️", text: "Какие технологии используются?" },
  { emoji: "🚀", text: "Как работает платформа?" },
  { emoji: "🔗", text: "Какие интеграции доступны?" },
  { emoji: "📈", text: "Каковы следующие шаги?" },
];

export function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted on client side and check screen size
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize with welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        text: 'Привет! Я AI-ассистент Transparity Hub. Задайте вопрос о платформе, технологиях или функционале.',
        isBot: true,
        time: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Reset messages and used questions when chat is closed
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setUsedQuestions(new Set());
    }
  }, [isOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (isOpen && chatScrollRef.current) {
      const scrollToBottom = () => {
        const container = chatScrollRef.current;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      };

      // Use multiple attempts to ensure scroll happens
      requestAnimationFrame(() => {
        scrollToBottom();
        setTimeout(scrollToBottom, 50);
        setTimeout(scrollToBottom, 150);
      });
    }
  }, [messages, isOpen]);

  // Handle wheel events to prevent page scrolling when scrolling inside chat
  useEffect(() => {
    if (!isOpen) return;

    const chatContainer = chatScrollRef.current;
    const chatWidget = chatContainerRef.current;
    if (!chatContainer || !chatWidget) return;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      
      // Only handle events inside the chat widget
      if (!chatWidget.contains(target)) return;

      // Only handle events in the scrollable message area
      const isInScrollArea = chatContainer.contains(target) || target === chatContainer;
      if (!isInScrollArea) return;

      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      const canScroll = scrollHeight > clientHeight;
      
      // If content doesn't need scrolling, don't block
      if (!canScroll) return;

      const threshold = 10;
      const isAtTop = scrollTop <= threshold;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - threshold;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // Allow page scroll when at boundaries
      if ((scrollingDown && isAtBottom) || (scrollingUp && isAtTop)) {
        return;
      }

      // Block page scroll, but allow native container scroll
      // НЕ используем preventDefault() - это блокирует нативный скролл контейнера
      // Используем только stopPropagation() чтобы событие не всплывало на страницу
      e.stopPropagation();
    };

    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });

    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true } as EventListenerOptions);
    };
  }, [isOpen]);

  const saveMessage = (isBot: boolean, text: string, isPurple = false, read = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      time: new Date().toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      hasCheckmark: !isBot || isPurple,
      isPurple,
      read,
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    saveMessage(false, text);
    setIsLoading(true);

    try {
      const response = await api.sendChatMessage(text);
      
      if (response.error) {
        saveMessage(
          true,
          "Извините, произошла ошибка. Попробуйте еще раз или задайте другой вопрос о платформе Transparity Hub.",
          false,
          true
        );
      } else if (response.data) {
        saveMessage(true, response.data.answer, false, true);
      } else {
        saveMessage(
          true,
          "Получен неожиданный формат ответа. Попробуйте еще раз.",
          false,
          true
        );
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      saveMessage(
        true,
        "Не удалось отправить сообщение. Проверьте подключение к интернету.",
        false,
        true
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (text: string) => {
    // Mark question as used
    setUsedQuestions(prev => new Set(prev).add(text));
    sendMessage(text);
  };

  const handleSend = (text: string) => {
    sendMessage(text);
  };

  if (!mounted || typeof document === 'undefined' || !document.body) {
    return null;
  }

  const widgetContent = (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? '16px' : '96px',
              right: isMobile ? '16px' : '24px',
              width: isMobile ? 'calc(100vw - 32px)' : '400px',
              maxWidth: isMobile ? '400px' : 'none',
              height: isMobile ? 'calc(100vh - 120px)' : '600px',
              zIndex: 99999,
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 20px 60px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header - fixed at top */}
            <div style={{ flexShrink: 0 }}>
              <ChatHeader onClose={() => {
                setIsOpen(false);
                setMessages([]);
              }} />
            </div>
            
            {/* Messages area - scrollable */}
            <div 
              ref={chatScrollRef}
              className="chat-scrollbar"
              style={{
                flex: '1 1 0%',
                minHeight: 0,
                height: 0,
                overflowY: 'auto',
                overflowX: 'hidden',
                padding: '16px',
                backgroundColor: 'white',
                position: 'relative',
                overscrollBehavior: 'contain',
                touchAction: 'pan-y',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'auto',
                scrollbarColor: '#9E9E9E #f3f4f6',
              }}
            >
              <style>{`
                .chat-scrollbar::-webkit-scrollbar {
                  width: 12px;
                }
                .chat-scrollbar::-webkit-scrollbar-track {
                  background: #f3f4f6;
                  border-radius: 6px;
                  margin: 4px 0;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb {
                  background-color: #9E9E9E;
                  border-radius: 6px;
                  border: 2px solid #f3f4f6;
                  min-height: 30px;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb:hover {
                  background-color: #757575;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb:active {
                  background-color: #616161;
                }
              `}</style>
              <div style={{ paddingBottom: '8px' }}>
                {messages.map((message, index) => {
                  // Show quick questions after each bot message, excluding already used questions
                  const showQuickQuestions = message.isBot && 
                                           !isLoading && 
                                           index === messages.length - 1; // Only after the last message
                  
                  const availableQuestions = QUICK_QUESTIONS.filter(
                    question => !usedQuestions.has(question.text)
                  );

                  return (
                    <div key={message.id}>
                      <ChatMessage message={message} />
                      {/* Show quick questions after each bot response, excluding used ones */}
                      {showQuickQuestions && availableQuestions.length > 0 && (
                        <div className="flex flex-col gap-2 mt-3 mb-2">
                          {availableQuestions.map((question, qIndex) => (
                            <button
                              key={qIndex}
                              onClick={() => handleQuickAction(question.text)}
                              disabled={isLoading}
                              className="flex items-center gap-1.5 w-full px-3.5 py-2 bg-gray-100 hover:bg-[#009F6B] text-gray-700 hover:text-white rounded-full text-sm transition-colors whitespace-nowrap disabled:opacity-50 text-left"
                            >
                              <span>{question.emoji}</span>
                              <span>{question.text}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start mb-1"
                  >
                    <div className="max-w-[80%]">
                      <div className="bg-gray-200 rounded-xl rounded-tl-sm px-4 py-2.5">
                        <div className="flex gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-[#009F6B] animate-bounce"></div>
                          <div
                            className="h-2 w-2 rounded-full bg-[#009F6B] animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-[#009F6B] animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} style={{ height: '1px' }} />
              </div>
            </div>

            {/* Input area - fixed at bottom */}
            <div 
              style={{
                flexShrink: 0,
                padding: '12px 16px',
                backgroundColor: 'white',
                borderTop: '1px solid #e5e7eb',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
            >
              <ChatInput onSend={handleSend} disabled={isLoading} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '64px',
          height: '64px',
          zIndex: 99999,
          background: 'linear-gradient(to bottom right, #009F6B, #00c78a)',
          color: 'white',
          borderRadius: '50%',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(to bottom right, #00c78a, #009F6B)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(to bottom right, #009F6B, #00c78a)';
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="chevron"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );

  return createPortal(widgetContent, document.body);
}

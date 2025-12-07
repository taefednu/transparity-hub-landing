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

  // Reset messages when chat is closed
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
    }
  }, [isOpen]);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    if (isOpen && chatScrollRef.current) {
      // Используем setTimeout чтобы убедиться, что DOM обновился
      setTimeout(() => {
        if (chatScrollRef.current) {
          chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages, isOpen]);

  // Handle scroll events to prevent page scrolling when scrolling inside chat
  useEffect(() => {
    if (!isOpen) return;

    const chatContainer = chatScrollRef.current;
    const chatWidget = chatContainerRef.current;
    if (!chatContainer || !chatWidget) return;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the event target is inside the chat widget
      if (!chatWidget.contains(target)) return;

      // Check if the event is specifically on the scrollable container or its children
      const isInScrollArea = chatContainer.contains(target) || target === chatContainer;
      if (!isInScrollArea) return;

      // Проверяем, что контейнер действительно может скроллиться
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      const canScroll = scrollHeight > clientHeight;
      
      if (!canScroll) {
        // Если контент не требует скролла, не блокируем событие
        return;
      }

      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5; // небольшой запас
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // If scrolling down and at bottom, allow page scroll
      if (scrollingDown && isAtBottom) {
        return;
      }
      
      // If scrolling up and at top, allow page scroll
      if (scrollingUp && isAtTop) {
        return;
      }

      // Otherwise, prevent page scroll
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      // Manually scroll the container
      chatContainer.scrollTop += e.deltaY;
    };

    // Также добавляем обработчик прямо на контейнер
    const handleContainerWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      const canScroll = scrollHeight > clientHeight;
      
      if (!canScroll) {
        return;
      }

      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if ((scrollingDown && isAtBottom) || (scrollingUp && isAtTop)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
    };

    // Use capture phase to catch events early
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    chatContainer.addEventListener('wheel', handleContainerWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true } as EventListenerOptions);
      document.removeEventListener('wheel', handleWheel, { capture: true } as EventListenerOptions);
      chatContainer.removeEventListener('wheel', handleContainerWheel);
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
    sendMessage(text);
  };

  const handleSend = (text: string) => {
    sendMessage(text);
  };

  // Render through portal to document.body to ensure it's always on top
  // and positioned relative to the viewport, not parent containers
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
              overscrollBehavior: 'contain',
            }}
            className="flex flex-col overflow-hidden"
          >
            <div className="flex-shrink-0">
              <ChatHeader onClose={() => {
                setIsOpen(false);
                setMessages([]);
              }} />
            </div>
            
            <div 
              ref={chatScrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 bg-[#E5E5E5] chat-scrollbar"
              style={{
                scrollbarWidth: 'auto',
                scrollbarColor: '#9E9E9E #E5E5E5',
                overscrollBehavior: 'contain',
                minHeight: 0,
                flex: '1 1 0%',
                height: 0, // Это важно для flex-1
                touchAction: 'pan-y',
                WebkitOverflowScrolling: 'touch',
                position: 'relative',
                isolation: 'isolate',
              }}
            >
              <style>{`
                .chat-scrollbar {
                  scrollbar-width: auto;
                  scrollbar-color: #9E9E9E #E5E5E5;
                }
                .chat-scrollbar::-webkit-scrollbar {
                  width: 12px;
                  display: block;
                }
                .chat-scrollbar::-webkit-scrollbar-track {
                  background: #E5E5E5;
                  border-radius: 6px;
                  margin: 4px 0;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb {
                  background-color: #9E9E9E;
                  border-radius: 6px;
                  border: 2px solid #E5E5E5;
                  min-height: 30px;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb:hover {
                  background-color: #757575;
                }
                .chat-scrollbar::-webkit-scrollbar-thumb:active {
                  background-color: #616161;
                }
              `}</style>
              <div className="space-y-1 min-h-full">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                
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

            <div className="px-4 py-3 bg-white border-t border-gray-200 rounded-b-2xl flex-shrink-0">
              <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide" style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}>
                {QUICK_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(question.text)}
                    disabled={isLoading}
                    className="flex items-center gap-1.5 flex-shrink-0 px-3.5 py-2 bg-gray-100 hover:bg-[#009F6B] text-gray-700 hover:text-white rounded-full text-sm transition-colors whitespace-nowrap disabled:opacity-50"
                  >
                    <span>{question.emoji}</span>
                    <span>{question.text}</span>
                  </button>
                ))}
              </div>
              
              <ChatInput onSend={handleSend} disabled={isLoading} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

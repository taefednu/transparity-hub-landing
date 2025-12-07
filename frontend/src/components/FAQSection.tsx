import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Конфликтуем ли мы с кредитным бюро?",
    answer: "Нет, дополняем: бюро = прошлые кредиты, хаб = текущий и будущий cashflow. Мы работаем поверх кредитного бюро, добавляя операционные данные для более полной картины бизнеса."
  },
  {
    question: "Откуда данные, если 80% оборота в кэше?",
    answer: "Мы честно это признаём. Хаб работает с тем, что уже в цифре, и через прозрачные правила «чем больше цифры — тем лучше условия» создаёт стимул вытаскивать оборот из кэша. Чем больше бизнес оцифровывает оборот, тем лучше его кредитные условия."
  },
  {
    question: "Как соблюдается закон о банковской тайне и персональных данных?",
    answer: "Только по согласию МСБ, договоры с банками/платёжками, шифрование, ролевая модель доступа, логирование. Все данные передаются только с явного согласия предпринимателя, используются современные методы шифрования и соответствие требованиям защиты персональных данных."
  },
  {
    question: "Как измерим успех пилота?",
    answer: "2–3 метрики: доля «оцифрованного» оборота, количество МСБ, прошедших через паспорт, качество скоринга (NPL/просмотр решений в пилоте). Отслеживаем рост прозрачности оборота, количество подключённых МСБ и точность прогнозирования рисков."
  },
  {
    question: "Какая бизнес-модель?",
    answer: "Возможная модель монетизации — B2B-подписка за доступ к хабу и модели скоринга для банков и финтехов; детали будут прорабатываться на этапе MVP вместе с партнёрами. Фокус на создании ценности для всех участников экосистемы."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#009F6B]/10 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-[#009F6B]" />
            <span className="text-[#009F6B]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              FAQ для банка / инвестора
            </span>
          </div>
          <h2 className="mb-4" style={{ fontSize: '2.25rem', fontWeight: 600, color: '#0B1F3B' }}>
            Ответы на потенциальные вопросы
          </h2>
          <p className="text-[#4B5563]" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
            Ответы на ключевые вопросы о Transparity Hub
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F9FC] rounded-xl border-2 border-[#E5E7EB] overflow-hidden transition-all hover:border-[#009F6B]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-[#E8F5F0] transition-colors"
              >
                <h3 className="flex-1 pr-4" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#009F6B] transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


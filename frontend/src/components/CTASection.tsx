import { Rocket } from "lucide-react";

export function CTASection() {

  return (
    <section className="section-padding bg-gradient-to-br from-[#009F6B] via-[#00b47a] to-[#00c78a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0B1F3B]/20 rounded-full blur-3xl floating" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Icon Badge */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/30 shadow-2xl">
            <Rocket className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h2 className="mb-8 text-center text-white" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: '1.2' }}>
          Что дальше
        </h2>
        
        <div className="space-y-6 mb-12 text-white text-center" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
          <p className="max-w-3xl mx-auto">
            Мы видим <strong className="text-white">Transparity Hub</strong> как стандарт "Кредитного Паспорта МСБ" в Узбекистане — инструмент, который делает финансирование малого бизнеса более прозрачным, честным и управляемым.
          </p>
          
          <p className="max-w-3xl mx-auto">
            Мы готовы пилотироваться с банками и платёжными системами уже сейчас. Наша цель — создать экосистему, где каждый участник выигрывает: МСБ получает доступ к капиталу, банки — управляемые риски, а экономика — прозрачность.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              $11.8B
            </p>
            <p style={{ fontSize: '1.125rem', opacity: 0.95 }}>
              Вместе мы можем закрыть разрыв в финансировании и дать миллионам предпринимателей инструмент для роста
            </p>
          </div>
        </div>
        
        
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-3xl mx-auto">
          <p className="text-center text-white" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
            <strong>Возможная модель монетизации</strong> — B2B-подписка за доступ к хабу и модели скоринга для банков и финтехов; детали будут прорабатываться на этапе MVP вместе с партнёрами.
          </p>
        </div>
      </div>
    </section>
  );
}
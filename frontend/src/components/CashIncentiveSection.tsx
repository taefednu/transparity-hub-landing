import { Banknote, TrendingUp, Target, Award } from "lucide-react";

export function CashIncentiveSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-center" style={{ fontSize: '2.25rem', fontWeight: 600, color: '#0B1F3B' }}>
          Что с наличкой и как мы мотивируем МСБ выходить в цифру
        </h2>
        
        <p className="text-center max-w-3xl mx-auto mb-12" style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#4B5563' }}>
          Мы честно признаём реальность и создаём экономические стимулы вместо иллюзий.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Reality */}
          <div className="bg-[#F7F9FC] p-8 rounded-lg border border-[#E5E7EB]">
            <div className="flex items-center gap-3 mb-4">
              <Banknote className="w-8 h-8 text-[#4B5563]" />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#4B5563' }}>Реальность</h3>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
              В реальности у МСБ большая часть оборота идёт через наличку. Мы не можем "магически" сделать кэш прозрачным.
            </p>
          </div>
          
          {/* Our Approach */}
          <div className="bg-gradient-to-br from-[#E8F5F0] to-[#F7F9FC] p-8 rounded-lg border border-[#009F6B]">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-[#009F6B]" />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#009F6B' }}>Наш подход</h3>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
              Максимально используем то, что уже в цифре, и создаём экономический стимул для предпринимателя увеличивать долю цифрового оборота.
            </p>
          </div>
        </div>
        
        {/* Incentive Mechanism */}
        <div className="bg-gradient-to-br from-[#009F6B] to-[#008557] p-10 rounded-lg text-white">
          <h3 className="mb-8 text-center" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
            Механизм стимулирования
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Метрика прозрачности
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                В "Кредитном Паспорте" есть метрика "Доля оборота в цифре"
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Лучшие условия
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                Чем больше доля безнала, тем выше лимит, лучше ставка, проще решение
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Прозрачные правила
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                Банк публично фиксирует правила: тебе выгодно тащить деньги из кэша в цифру
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-[#F7F9FC] rounded-lg border-l-4 border-[#009F6B]">
          <p className="text-center" style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#111827' }}>
            <strong style={{ color: '#009F6B' }}>Итог:</strong> Мы создаём win-win: предприниматель получает доступ к капиталу, банк снижает риски, а экономика становится более прозрачной.
          </p>
        </div>
      </div>
    </section>
  );
}

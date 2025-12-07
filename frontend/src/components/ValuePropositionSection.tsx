import { Store, Building, CreditCard, ArrowRight } from "lucide-react";

export function ValuePropositionSection() {
  return (
    <section className="section-padding mesh-gradient relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0B1F3B' }}>
            Ценность для участников экосистемы
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
            Win-win модель для всех сторон
          </p>
        </div>
        
        <div className="space-y-20">
          {/* For MSB */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-2xl flex items-center justify-center shadow-xl">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#009F6B' }}>
                Для малого бизнеса
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Быстрый доступ к кредиту", desc: "Без бумажного ада: банк видит паспорт, а не требует 10 разных выписок." },
                { title: "Прозрачные правила игры", desc: "Понятно, от чего зависит лимит и ставка: доля цифры, стабильность, дисциплина." },
                { title: "Обратная связь", desc: "Предприниматель видит, что ему мешает: \"слишком много кэша\", \"неравномерный cashflow\" и т.д." },
                { title: "Один паспорт — много дверей", desc: "Один раз подключил данные — дальше может показывать паспорт разным банкам и инвесторам." }
              ].map((item, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl border-2 border-[#E5E7EB] hover:border-[#009F6B] card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#009F6B]/5 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="number-badge" style={{ width: '2rem', height: '2rem', fontSize: '0.875rem' }}>
                        {index + 1}
                      </div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', flex: 1 }}>
                        {item.title}
                      </h4>
                    </div>
                    <p className="ml-11" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* For Banks */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3B] to-[#1a3a5c] rounded-2xl flex items-center justify-center shadow-xl">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0B1F3B' }}>
                Для банков и инвесторов
              </h3>
            </div>
            
            <div className="bg-gradient-to-r from-[#009F6B]/10 to-[#0B1F3B]/10 p-6 rounded-xl border-l-4 border-[#009F6B] mb-8">
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#4B5563' }}>
                <strong className="text-[#009F6B]">Для Агробанка это особенно логично:</strong> фокус на агро и региональных МСБ, высокая доля кэша, госпрограммы под МСБ. Transparity Hub помогает точнее выбирать, кому давать льготные кредиты, и показывать международным партнёрам (IFC, EBRD и др.), что капитал работает на "живой" сектор, а не просто в отчёте.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Cashflow-профиль вместо гадания", desc: "Не только кредитная история, но и живая картинка бизнеса." },
                { title: "Масштабируемость МСБ-кредитования", desc: "Меньше ручной работы — больше автоматизированных, обоснованных решений." },
                { title: "Управление портфелем МСБ", desc: "Рекомендации: кому можно дать больше, где риск растёт, где early warning." },
                { title: "Новые кредитуемые клиенты", desc: "МСБ без богатой кредитной истории, но с прозрачным cashflow." }
              ].map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-[#0B1F3B] to-[#1a3a5c] p-8 rounded-2xl text-white card-hover relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{index + 1}</span>
                      </div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 600, flex: 1 }}>
                        {item.title}
                      </h4>
                    </div>
                    <p className="ml-11" style={{ fontSize: '1rem', lineHeight: '1.75', opacity: 0.9 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* For Payment Systems */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-2xl flex items-center justify-center shadow-xl">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#009F6B' }}>
                Для платёжных систем
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📈", title: "Рост оборотов", desc: "Кредит завязан на оборот через конкретного провайдера → мерчанту выгодно проводить платежи через него." },
                { icon: "🔒", title: "Удержание мерчантов", desc: "Платёжка становится источником роста, а не только \"кассой\"." },
                { icon: "💰", title: "Новая выручка", desc: "Модель revenue share от финансирования, прошедшего через их обороты." }
              ].map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-[#E8F5F0] to-white p-8 rounded-2xl border-2 border-[#009F6B]/30 hover:border-[#009F6B] card-hover">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
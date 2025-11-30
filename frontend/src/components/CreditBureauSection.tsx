import { Building2, TrendingUp, Sparkles } from "lucide-react";

export function CreditBureauSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#F7F9FC] to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#009F6B]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#009F6B]/10 to-[#00c78a]/10 border border-[#009F6B]/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#009F6B]" />
            <span className="text-[#009F6B]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              Ключевое отличие
            </span>
          </div>
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0B1F3B' }}>
            Почему недостаточно только кредитного бюро
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Credit Bureau */}
          <div className="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-gray-300 card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-gray-600" />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#4B5563' }}>Кредитное бюро</h3>
              </div>
              
              <ul className="space-y-4" style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#4B5563' }}>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>📊</span>
                  </div>
                  <span>Собирает и хранит данные о кредитах и просрочках</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>⏮️</span>
                  </div>
                  <span>Отвечает на вопрос: "Как этот заёмщик платил по прошлым кредитам?"</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>✓</span>
                  </div>
                  <span>Хорошо работает для тех, у кого уже была кредитная история</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>❌</span>
                  </div>
                  <span>Почти не видит операционный бизнес: выручку, cashflow, сезонность</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Transparity Hub */}
          <div className="group bg-gradient-to-br from-[#009F6B] via-[#00b47a] to-[#00c78a] p-8 rounded-3xl text-white card-hover relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Transparity Hub</h3>
              </div>
              
              <ul className="space-y-4" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span style={{ fontSize: '0.75rem' }}>💹</span>
                  </div>
                  <span>Собирает <strong>операционные данные</strong> о бизнесе (банковские транзакции, платёжки, учётка)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span style={{ fontSize: '0.75rem' }}>⏯️</span>
                  </div>
                  <span>Отвечает на вопрос: "Как живёт бизнес сейчас и что с его денежным потоком?"</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span style={{ fontSize: '0.75rem' }}>🎯</span>
                  </div>
                  <span>Особенно полезен для <strong>thin-file / no-file МСБ</strong>, где кредитной истории мало</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span style={{ fontSize: '0.75rem' }}>✨</span>
                  </div>
                  <span>Даёт банку и инвестору новый тип информации — "портрет бизнеса"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-white to-[#E8F5F0] p-10 rounded-3xl border-2 border-[#009F6B] shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-center mb-4" style={{ fontSize: '1.375rem', lineHeight: '1.8', color: '#111827' }}>
            <strong style={{ color: '#009F6B' }}>Вывод:</strong> Мы не конкурируем с кредитным бюро, а дополняем его: бюро отвечает за прошлые кредиты, хаб — за текущий и будущий cashflow бизнеса.
          </p>
          <p className="text-center font-semibold" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#009F6B' }}>
            Transparity Hub = "живая кредитная история бизнеса": не только прошлые кредиты, а реальный cashflow и доля цифры.
          </p>
        </div>
      </div>
    </section>
  );
}
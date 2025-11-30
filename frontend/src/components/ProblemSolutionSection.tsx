import { AlertCircle, CheckCircle, ArrowRight, DollarSign } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="bg-white relative overflow-hidden pb-12 md:pb-28 px-4 md:px-8 pt-[180px] md:pt-[200px]">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#009F6B]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Problem Block */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0B1F3B' }}>Проблема</h2>
              <p className="text-[#4B5563] italic" style={{ fontSize: '0.875rem' }}>Problem</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#4B5563' }}>
              <p>
                Микро-, малые и средние предприятия (МСБ) дают более половины ВВП Узбекистана и до <strong className="text-[#0B1F3B]">75–78% рабочих мест</strong>. Это основа экономики страны.
              </p>
              
              <p>
                Однако по данным IFC и MSME Finance Gap Database, разрыв в финансировании МСБ в Узбекистане оценивается примерно в <strong className="text-[#0B1F3B]">$11,8 млрд</strong>.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-10 h-10 text-red-600" />
                <div>
                  <div className="stat-number" style={{ color: '#dc2626' }}>$11.8B</div>
                  <p className="text-red-700" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    Разрыв финансирования
                  </p>
                </div>
              </div>
              <p className="text-red-800" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                ~17–18% ВВП Узбекистана
              </p>
              <p className="text-red-600/70 mt-3" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                Источник: MSME Finance Gap Database (IFC) и пресс-релизы IFC по Узбекистану, 2019–2022 гг.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-[#0B1F3B] p-8 rounded-r-2xl mb-6">
            <p style={{ fontWeight: 600, color: '#111827', marginBottom: '1rem', fontSize: '1.125rem' }}>
              Банки и инвесторы видят в основном:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0B1F3B] rounded-full" />
                <span className="text-[#4B5563]">Кредитную историю</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0B1F3B] rounded-full" />
                <span className="text-[#4B5563]">Залоги</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0B1F3B] rounded-full" />
                <span className="text-[#4B5563]">Фрагменты оборота</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#4B5563' }}>
            <p>
              Они почти <strong style={{ color: '#0B1F3B' }}>не видят живой бизнес</strong>: структуру выручки, долю цифры, cashflow, сезонность, устойчивость.
            </p>
            
            <p>
              У МСБ <strong style={{ color: '#0B1F3B' }}>нет экономического стимула</strong> вытаскивать оборот из кэша в белую цифру — проще жить на наличке и случайных договорённостях.
            </p>
          </div>
        </div>
        
        {/* Arrow Divider */}
        <div className="flex justify-center mb-20">
          <div className="w-16 h-16 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-full flex items-center justify-center shadow-xl animate-pulse">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Solution Block */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-2xl flex items-center justify-center shadow-xl">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#009F6B' }}>Наше решение</h2>
              <p className="text-[#4B5563] italic" style={{ fontSize: '0.875rem' }}>Solution</p>
            </div>
          </div>
          
          <div className="space-y-8" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#4B5563' }}>
            <p className="text-center max-w-3xl mx-auto">
              <strong style={{ color: '#009F6B', fontSize: '1.5rem' }}>Transparity Hub</strong> — это слой над кредитным бюро, который по согласию МСБ агрегирует операционные данные из разных источников.
            </p>
            
            <div className="bg-gradient-to-br from-[#E8F5F0] via-white to-[#F7F9FC] p-10 rounded-3xl border-2 border-[#009F6B] shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="number-badge">1</div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>Собираем данные из:</h4>
                  </div>
                  <ul className="space-y-3 ml-14">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#009F6B] mt-1 flex-shrink-0" />
                      <span>Банковских счетов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#009F6B] mt-1 flex-shrink-0" />
                      <span>Платёжных сервисов (Payme, Click, Uzum и др.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#009F6B] mt-1 flex-shrink-0" />
                      <span>Онлайн-учёток / e-invoice / POS</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="number-badge">2</div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>Создаём паспорт:</h4>
                  </div>
                  <ul className="space-y-3 ml-14">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#009F6B] mt-1 flex-shrink-0" />
                      <span>Cashflow-профиль</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#009F6B] mt-1 flex-shrink-0" />
                      <span>Доля цифрового оборота</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#009F6B] mt-1 flex-shrink-0" />
                      <span>Стабильность и сезонность</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#009F6B] mt-1 flex-shrink-0" />
                      <span>Скоринги и прогноз</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-center max-w-3xl mx-auto">
              Паспорт видят банки, инвесторы и сам предприниматель. Бизнес получает <strong style={{ color: '#009F6B' }}>доступ к деньгам</strong>, а банк — <strong style={{ color: '#009F6B' }}>управляемый риск</strong>, не только через кредитную историю, но и через реальную картину бизнеса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
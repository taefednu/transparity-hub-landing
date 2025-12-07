import { Brain, TrendingUp, FileText, BarChart3, Cpu } from "lucide-react";

export function AILayerSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00c78a] rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#009F6B] rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-[#00c78a]" />
            <span className="text-[#00c78a]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              Powered by AI
            </span>
          </div>
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            AI-слой Transparity Hub
          </h2>
          <p className="italic text-white/70" style={{ fontSize: '0.875rem' }}>AI Layer</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: Brain, title: "Cashflow-скоринг", desc: "AI-модели анализируют транзакции, строят профиль выручки/расходов, сезонность, долю цифры, оценку устойчивости.", color: "from-purple-500 to-pink-500" },
            { icon: TrendingUp, title: "Прогноз денежных потоков", desc: "Модели временных рядов прогнозируют cashflow на 3–6 месяцев вперёд, помогая банку и бизнесу планировать.", color: "from-blue-500 to-cyan-500" },
            { icon: FileText, title: "Объяснимость скоринга", desc: "Для каждого скоринга/решения показываются человеческие объяснения: какие факторы повлияли и как.", color: "from-green-500 to-emerald-500" },
            { icon: BarChart3, title: "Портфельный \"автопилот\"", desc: "AI-система предлагает банку: кому безопасно поднять лимит, по кому горит early warning, какие сегменты МСБ недофинансированы.", color: "from-orange-500 to-red-500" }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 p-8 rounded-3xl card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="flex-1 pt-2" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/80" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
          <h3 className="mb-8 text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Технологический стек AI
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Machine Learning", desc: "Градиентный бустинг, деревья решений для скоринга", icon: "🤖" },
              { title: "Time Series", desc: "ARIMA, Prophet для прогноза cashflow", icon: "📊" },
              { title: "LLM Integration", desc: "AI-помощник для диалога с МСБ и банком", icon: "💬" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {item.title}
                </h4>
                <p className="text-white/80" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
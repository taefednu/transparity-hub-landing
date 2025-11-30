import { CheckCircle, Circle, Play, Rocket } from "lucide-react";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#009F6B]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0B1F3B' }}>
            Дорожная карта
          </h2>
          <p className="italic text-[#4B5563]" style={{ fontSize: '0.875rem' }}>Roadmap: Idea / Prototype / MVP / Launched</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-[#009F6B] via-[#009F6B] via-50% to-[#E5E7EB] rounded-full" />
          
          <div className="space-y-12">
            {/* Idea - Completed */}
            <div className="relative pl-16 md:pl-24">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-2xl flex items-center justify-center text-white shadow-2xl border-4 border-white">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div className="bg-gradient-to-br from-[#E8F5F0] to-[#F7F9FC] p-8 md:p-10 rounded-3xl border-2 border-[#009F6B] shadow-lg card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#009F6B' }}>
                    Idea
                  </h3>
                  <span className="px-4 py-1.5 bg-[#009F6B] text-white rounded-full shadow-md" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    ✓ Выполнено
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#4B5563' }}>
                  Проблема сформулирована, гипотеза проверена с несколькими представителями банков/финтеха, структура паспорта описана.
                </p>
              </div>
            </div>
            
            {/* Prototype - In Progress */}
            <div className="relative pl-16 md:pl-24">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-2xl flex items-center justify-center text-white shadow-2xl border-4 border-white animate-pulse">
                <Play className="w-6 h-6 md:w-8 md:h-8 fill-white" />
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-[#009F6B] shadow-lg card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#009F6B' }}>
                    Prototype
                  </h3>
                  <span className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-md" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    ⏳ В процессе
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#4B5563' }}>
                  Разработка прототипа дашборда и скорингового модуля на тестовых данных. Создание базовой архитектуры системы.
                </p>
              </div>
            </div>
            
            {/* MVP - Planned */}
            <div className="relative pl-16 md:pl-24">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-500 shadow-lg border-4 border-white">
                <Rocket className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 hover:border-gray-300 shadow-md card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#4B5563' }}>
                    MVP
                  </h3>
                  <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    План
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#4B5563' }}>
                  Пилот с 1–2 банками и 1 платёжной системой, работа с реальными МСБ. Полноценный скоринг и портфельная панель.
                </p>
              </div>
            </div>
            
            {/* Launched - Vision */}
            <div className="relative pl-16 md:pl-24">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center text-gray-400 shadow border-4 border-white">
                <Circle className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 hover:border-gray-300 shadow-md card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#4B5563' }}>
                    Launched
                  </h3>
                  <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    Видение
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#4B5563' }}>
                  Хаб как стандарт для "Кредитного Паспорта МСБ" на рынке, подключены несколько банков и платёжных провайдеров.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#009F6B] to-[#00c78a] p-10 rounded-3xl text-white text-center shadow-2xl">
            <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
              Текущий статус
            </h3>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
              Idea завершена ✓ | Начало разработки MVP (первые прототипы и архитектура)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
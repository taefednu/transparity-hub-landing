import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { ExternalLink, Code, Rocket, ArrowLeft } from "lucide-react";

export function DemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-end pb-6">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="border-2 border-[#009F6B] text-[#009F6B] hover:bg-[#009F6B] hover:text-white transition-all shadow-sm hover:shadow-md px-8 py-3 text-base font-semibold rounded-xl mt-[36px]"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Вернуться на главную
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 mb-6">
            AI500 Hackathon • Этап 2
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Демонстрация
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Работающий MVP платформы для кредитного профилирования МСБ
          </p>
        </div>

        {/* Video Section */}
        <section className="mb-24">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{ minHeight: '600px' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/5ItLLN_iDa4?rel=0&modestbranding=1"
                title="Демонстрация Transparity Hub"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Длительность: ~5 минут
          </p>
        </section>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* What's Shown */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-[#009F6B] to-[#00c78a] rounded-full"></div>
              <h2 className="text-2xl font-light text-gray-900">Что показано в демо</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Демо представляет работающий MVP Transparity Hub — AI-driven кредитную инфраструктурную платформу, 
                  решающую ключевую структурную проблему развивающихся рынков: отсутствие реальных операционных данных 
                  для оценки кредитоспособности МСБ.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#009F6B] rounded-full"></div>
                      Банковский дашборд
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>Портфельный интеллект в реальном времени</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>AI-инсайты и ранние предупреждения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>Карта рисков и автоматическая сегментация</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>AI-рекомендации по лимитам и ценообразованию</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>Стресс-тестирование сценариев</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#009F6B] rounded-full"></div>
                      МСБ дашборд
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>Цифровой Кредитный Паспорт</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>Аналитика cashflow с прогнозированием</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>AI-инсайты для улучшения кредитоспособности</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>What-If симулятор</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#009F6B] mt-1">•</span>
                        <span>AI-ассистент на естественном языке</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem & Solution */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-[#009F6B] to-[#00c78a] rounded-full"></div>
              <h2 className="text-2xl font-light text-gray-900">Проблема и решение</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Структурная проблема</h3>
                <p className="text-gray-600 leading-relaxed">
                  Сектор МСБ Узбекистана составляет почти половину ВВП, но <strong className="text-gray-900">недофинансирован более чем на $11.8 млрд</strong>. 
                  Корневая причина — отсутствие доверенных данных. МСБ работают через фрагментированные цифровые каналы, 
                  банки получают частичные данные и считают МСБ высокорискованными по умолчанию.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-4">
                <p className="text-sm text-gray-700">
                  Результат: высокие проценты отказов, завышенные ставки, длительные сроки одобрения, ограниченный доступ к капиталу.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Наше решение</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Transparity Hub создаёт единый источник финансовой правды для МСБ, консолидируя операционные 
                  данные и используя AI для производства:
                </p>
                <div className="bg-gradient-to-br from-[#009F6B]/10 to-[#00c78a]/10 rounded-xl p-6 border border-[#009F6B]/20">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#009F6B] mt-1 font-bold">•</span>
                      <span>Единого кредитного паспорта</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#009F6B] mt-1 font-bold">•</span>
                      <span>Объяснимой оценки рисков (XAI с SHAP)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#009F6B] mt-1 font-bold">•</span>
                      <span>Прогнозирующих прогнозов cashflow (3-6 месяцев)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#009F6B] mt-1 font-bold">•</span>
                      <span>Прозрачных драйверов кредитоспособности</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#009F6B] mt-1 font-bold">•</span>
                      <span>Автоматических рекомендаций</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-[#009F6B] to-[#00c78a] rounded-full"></div>
              <h2 className="text-2xl font-light text-gray-900">Технологии</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Frontend & Backend</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Next.js, React 18, TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Node.js / Express, Python FastAPI
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      PostgreSQL, Docker микросервисы
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Vercel, облачная инфраструктура
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">AI & Data Science</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Cashflow Risk Scoring (Gradient boosted)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Time-Series Forecasting (Prophet/ARIMA/LSTM)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Explainable AI (SHAP-based)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      AI Recommendation Engine
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      LLM Assistant
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Интеграции</h3>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">
                    Payme, Click, Uzum, банковские API, системы учёта, кредитное бюро
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Status */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-[#009F6B] to-[#00c78a] rounded-full"></div>
              <h2 className="text-2xl font-light text-gray-900">Статус</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#009F6B] to-[#00c78a] text-white rounded-full text-xs font-medium mb-4 shadow-sm">
                  <Rocket className="w-3 h-3" />
                  MVP
                </div>
                <p className="text-gray-600 mb-6">
                  Функциональный MVP с банковским и МСБ дашбордами, AI-моделями, интеграциями.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Реализовано</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Банковский дашборд (13 страниц)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      МСБ дашборд (6 страниц)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Cashflow скоринг
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Прогнозирование
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      AI-инсайты и XAI
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      What-If симулятор
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Базовые интеграции
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Следующие шаги</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Интеграция живых потоков транзакций
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Обучение моделей на реальных данных
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Калибровка для регуляторных требований
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Пилот с Agrobank
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009F6B] rounded-full"></div>
                      Расширение на регион
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Working App */}
          <section>
            <div className="bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-2xl p-8 text-center text-white shadow-lg">
              <h2 className="text-2xl font-light mb-4">Работающее приложение</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                Попробуйте наш прототип в действии. Приложение не требует авторизации и доступно для тестирования.
              </p>
              <Button
                className="bg-white text-[#009F6B] hover:bg-gray-50 shadow-md"
                onClick={() => window.open('https://transparity-hub.vercel.app/sme/dashboard', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть приложение
              </Button>
              <p className="text-xs text-white/70 mt-4">
                https://transparity-hub.vercel.app/sme/dashboard
              </p>
            </div>
          </section>

          {/* API */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-[#009F6B] to-[#00c78a] rounded-full"></div>
              <h2 className="text-2xl font-light text-gray-900">API</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4 text-[#009F6B]" />
                  <span className="text-sm font-mono text-gray-500">POST</span>
                  <span className="text-sm font-mono text-gray-900">/api/analyze</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">AI classification для анализа финансовых данных</p>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-xs font-mono text-gray-700 overflow-x-auto">
                  {`{ "credit_score": 85, "risk_level": "low", ... }`}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#009F6B]/5 to-[#00c78a]/5 rounded-xl p-6 border border-[#009F6B]/10">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4 text-[#009F6B]" />
                  <span className="text-sm font-mono text-gray-500">GET</span>
                  <span className="text-sm font-mono text-gray-900">/api/health</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Health check эндпоинт</p>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-xs font-mono text-gray-700 overflow-x-auto">
                  {`{ "status": "ok", "message": "..." }`}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-100 mt-24 py-12">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm text-gray-500">
            AI500 Hackathon (Agrobank) • 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

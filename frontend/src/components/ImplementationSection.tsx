import { Lightbulb, Wrench, Rocket, Globe } from "lucide-react";

export function ImplementationSection() {
  return (
    <section id="implementation" className="section-padding bg-[#F7F9FC]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ fontSize: '2.25rem', fontWeight: 600, color: '#0B1F3B' }}>
            Как мы будем это реализовывать
          </h2>
          <p className="italic text-[#4B5563]" style={{ fontSize: '0.875rem' }}>Implementation & Tech Stack</p>
        </div>
        
        {/* Implementation Stages */}
        <div className="mb-16">
          <h3 className="mb-8 text-center" style={{ fontSize: '1.75rem', fontWeight: 600, color: '#009F6B' }}>
            Этапы реализации
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#4B5563] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#4B5563] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                    Этап 1 — Idea & Research
                  </h4>
                  <ul className="space-y-1 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                    <li>• Подтверждение проблемы с банками и МСБ</li>
                    <li>• Анализ рынка и регуляторной среды</li>
                    <li>• Определение формата "Кредитного Паспорта МСБ"</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#009F6B] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#009F6B] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                    Этап 2 — Prototype
                  </h4>
                  <ul className="space-y-1 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                    <li>• Эмуляция данных одного банка и одной платёжной системы</li>
                    <li>• Базовый ETL: загрузка, нормализация, категоризация транзакций</li>
                    <li>• Простая версия дашборда "паспорт" и базовый cashflow-скоринг</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#009F6B] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#009F6B] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                    Этап 3 — MVP
                  </h4>
                  <ul className="space-y-1 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                    <li>• Подключение пилотных партнёров (банк + платёжка + онлайн-учётка)</li>
                    <li>• Полноценный скоринг, прогноз, объяснения</li>
                    <li>• Портфельная панель для банка</li>
                    <li>• Ограниченный пул реальных МСБ-клиентов</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#0B1F3B] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#0B1F3B] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                    Этап 4 — Launched / Scale
                  </h4>
                  <ul className="space-y-1 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                    <li>• Масштабирование на несколько банков и платёжных систем</li>
                    <li>• Доработка модели стимулов (лимиты/ставки за прозрачность)</li>
                    <li>• Подготовка к внешним аудитам/регуляторному одобрению</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div>
          <h3 className="mb-8 text-center" style={{ fontSize: '1.75rem', fontWeight: 600, color: '#0B1F3B' }}>
            Технологии и стек
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB]">
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#009F6B' }}>
                Backend
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                Python, FastAPI (или Django), PostgreSQL
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB]">
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#009F6B' }}>
                Data & AI
              </h4>
              <ul className="space-y-1 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                <li>• Обработка транзакций и feature engineering</li>
                <li>• ML-модели для скоринга (XGBoost, LightGBM, CatBoost)</li>
                <li>• Модели временных рядов для прогноза cashflow (Prophet, ARIMA, LSTM)</li>
                <li>• LLM для диалогового интерфейса (OpenAI GPT, Claude, или локальные модели)</li>
                <li>• Explainable AI (SHAP, LIME) для объяснения решений</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB]">
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#009F6B' }}>
                Frontend
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                React / Next.js, современный компонентный UI, адаптивная вёрстка
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB]">
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#009F6B' }}>
                Интеграции
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                API банков, платёжных провайдеров, онлайн-бухгалтерий (на этапе прототипа — эмуляция)
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#009F6B] to-[#008557] p-8 rounded-lg text-white">
            <h4 className="mb-4 text-center" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Инфраструктура
            </h4>
            <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Контейнеризация (Docker), развёртывание в облаке (AWS / GCP / локальный провайдер в Узбекистане)
            </p>
          </div>
          
          {/* AI Tools & Solutions */}
          <div className="mt-12">
            <h3 className="mb-8 text-center" style={{ fontSize: '1.75rem', fontWeight: 600, color: '#0B1F3B' }}>
              ИИ инструменты и решения
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
                <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#7c3aed' }}>
                  🤖 Machine Learning
                </h4>
                <ul className="space-y-2 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                  <li>• <strong>XGBoost / LightGBM</strong> — для кредитного скоринга</li>
                  <li>• <strong>Scikit-learn</strong> — для классификации и регрессии</li>
                  <li>• <strong>Pandas / NumPy</strong> — обработка данных</li>
                  <li>• <strong>SHAP / LIME</strong> — объяснимость моделей</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#2563eb' }}>
                  📊 Time Series & Forecasting
                </h4>
                <ul className="space-y-2 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                  <li>• <strong>Prophet (Facebook)</strong> — прогноз cashflow</li>
                  <li>• <strong>ARIMA / SARIMA</strong> — анализ временных рядов</li>
                  <li>• <strong>LSTM / GRU</strong> — глубокое обучение для прогнозов</li>
                  <li>• <strong>Statsmodels</strong> — статистический анализ</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
                <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#059669' }}>
                  💬 Large Language Models
                </h4>
                <ul className="space-y-2 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                  <li>• <strong>OpenAI GPT-4 / GPT-3.5</strong> — диалоговый интерфейс</li>
                  <li>• <strong>Anthropic Claude</strong> — альтернатива для анализа</li>
                  <li>• <strong>LangChain</strong> — оркестрация LLM</li>
                  <li>• <strong>Локальные модели</strong> — для приватности данных</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200">
                <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ea580c' }}>
                  🔧 AI Infrastructure
                </h4>
                <ul className="space-y-2 ml-4" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
                  <li>• <strong>MLflow</strong> — управление ML-моделями</li>
                  <li>• <strong>TensorFlow / PyTorch</strong> — глубокое обучение</li>
                  <li>• <strong>Apache Airflow</strong> — оркестрация ML-пайплайнов</li>
                  <li>• <strong>Docker / Kubernetes</strong> — контейнеризация</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#009F6B] to-[#008557] p-8 rounded-lg text-white">
              <h4 className="mb-4 text-center" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Применение ИИ в решении
              </h4>
              <div className="grid md:grid-cols-2 gap-4" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
                <div>
                  <p className="mb-2"><strong>1. Автоматический скоринг:</strong></p>
                  <p className="text-white/90">ML-модели анализируют транзакции и выдают кредитный рейтинг в реальном времени</p>
                </div>
                <div>
                  <p className="mb-2"><strong>2. Прогнозирование:</strong></p>
                  <p className="text-white/90">Time series модели предсказывают cashflow на 3-6 месяцев вперёд</p>
                </div>
                <div>
                  <p className="mb-2"><strong>3. Объяснимость:</strong></p>
                  <p className="text-white/90">SHAP/LIME показывают, какие факторы влияют на решение</p>
                </div>
                <div>
                  <p className="mb-2"><strong>4. AI-ассистент:</strong></p>
                  <p className="text-white/90">LLM помогает МСБ и банкам понимать данные через диалог</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { Shield, Lock, FileCheck, Eye } from "lucide-react";

export function LegalSection() {
  return (
    <section className="section-padding bg-[#F7F9FC]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ fontSize: '2.25rem', fontWeight: 600, color: '#0B1F3B' }}>
            Право, данные и безопасность
          </h2>
          <p className="italic text-[#4B5563]" style={{ fontSize: '0.875rem' }}>Legal & Compliance</p>
        </div>
        
        <div className="mb-12">
          <p className="max-w-4xl mx-auto text-center mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#4B5563' }}>
            Мы работаем в рамках законодательства Узбекистана с полным соблюдением требований по защите данных и финансовой информации.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-[#009F6B]" />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
                Законодательство
              </h3>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
              Работа в рамках законодательства Узбекистана о банковской тайне, персональных данных и обмене кредитной информацией.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-10 h-10 text-[#009F6B]" />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
                Согласие МСБ
              </h3>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4B5563' }}>
              Хаб работает только по явному согласию МСБ. Предприниматель сам разрешает подключить свои банки, платёжки и учётку.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#0B1F3B] to-[#1a3a5c] p-10 rounded-lg text-white mb-8">
          <h3 className="mb-6 text-center" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
            Модель безопасности
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Шифрование
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.75', opacity: 0.9 }}>
                Данные шифруются при хранении и передаче
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h4 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Контроль доступа
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.75', opacity: 0.9 }}>
                Разграничение доступа по ролям
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8" />
              </div>
              <h4 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Аудит
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.75', opacity: 0.9 }}>
                Полное логирование всех действий
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg border-l-4 border-[#009F6B]">
          <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#4B5563' }}>
            <strong style={{ color: '#009F6B' }}>Аналогия:</strong> Модель похожа на кредитные бюро и open banking / open finance-платформы в других странах. Мы следуем международным best practices, адаптируя их под узбекский рынок.
          </p>
        </div>
      </div>
    </section>
  );
}

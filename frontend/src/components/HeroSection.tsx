import { Button } from "./ui/button";
import { TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#009F6B] rounded-full opacity-10 blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00c78a] rounded-full opacity-10 blur-3xl floating" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10 px-4">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <Zap className="w-4 h-4 text-[#00c78a]" />
            <span className="text-white/90" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              AI500 Hackathon × Agrobank
            </span>
          </div>
          
          <h1 className="mb-4 tracking-tight text-white" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: '1.1' }}>
            Transparity Hub
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00c78a] to-transparent mx-auto mb-6" />
          
          <h2 className="mb-8 text-[#00c78a]" style={{ fontSize: '2rem', fontWeight: 600, lineHeight: '1.3' }}>
            Кредитный Паспорт МСБ
          </h2>
          
          <p className="max-w-3xl mx-auto mb-12 text-white/90" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Мы собираем операционные данные малого бизнеса из банковских счетов, платёжных сервисов и учётки и превращаем их в стандартный "Кредитный Паспорт МСБ" — поверх кредитного бюро.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <TrendingUp className="w-8 h-8 text-[#00c78a] mx-auto mb-3" />
              <p className="text-white" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                Живой cashflow для банков
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <Shield className="w-8 h-8 text-[#00c78a] mx-auto mb-3" />
              <p className="text-white" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                Управляемый риск
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <Zap className="w-8 h-8 text-[#00c78a] mx-auto mb-3" />
              <p className="text-white" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                Быстрый доступ к деньгам
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-shrink-0 mb-16 md:mb-24">
            <Button 
              className="bg-[#00c78a] hover:bg-[#00b47a] text-white border-0 shadow-xl hover:shadow-2xl transition-all px-6 py-2.5 whitespace-nowrap flex-shrink-0"
              onClick={() => document.getElementById('problem-solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Problem → Solution
            </Button>
            <Button 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all px-6 py-2.5 whitespace-nowrap flex-shrink-0"
              onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Roadmap & Implementation
            </Button>
            <Link to="/demo">
              <Button 
                className="bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 transition-all px-6 py-2.5 whitespace-nowrap flex-shrink-0"
              >
                🎬 Демо
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
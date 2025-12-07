import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { ProblemSolutionSection } from "./components/ProblemSolutionSection";
import { CreditBureauSection } from "./components/CreditBureauSection";
import { CashIncentiveSection } from "./components/CashIncentiveSection";
import { ValuePropositionSection } from "./components/ValuePropositionSection";
import { AILayerSection } from "./components/AILayerSection";
import { ImplementationSection } from "./components/ImplementationSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { LegalSection } from "./components/LegalSection";
import { TeamSection } from "./components/TeamSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { CTASection } from "./components/CTASection";
import { FAQSection } from "./components/FAQSection";
import { Sparkles } from "lucide-react";
import { DemoPage } from "./pages/DemoPage";
import { Link } from "react-router-dom";
import { ChatBotWidget } from "./components/ChatBotWidget";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem → Solution */}
      <ProblemSolutionSection />
      
      {/* Why Credit Bureau is Not Enough */}
      <CreditBureauSection />
      
      {/* Cash Incentive Mechanism */}
      <CashIncentiveSection />
      
      {/* Value Proposition for All Stakeholders */}
      <ValuePropositionSection />
      
      {/* AI Layer */}
      <AILayerSection />
      
      {/* Implementation & Tech Stack */}
      <ImplementationSection />
      
      {/* Roadmap */}
      <RoadmapSection />
      
      {/* Legal & Compliance */}
      <LegalSection />
      
      {/* Team */}
      <TeamSection />
      
      {/* Why Us */}
      <WhyUsSection />
      
      {/* CTA / Contact */}
      <CTASection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0B1F3B] to-[#1a3a5c] text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#009F6B]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#009F6B] to-[#00c78a] rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                Transparity Hub
              </h3>
            </div>
            
            {/* Tagline */}
            <p className="max-w-2xl text-white/80" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
              Кредитный Паспорт МСБ для банков и финтеха Узбекистана
            </p>
            
            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Info */}
            <div className="space-y-2">
              <p className="text-white/90" style={{ fontSize: '1rem' }}>
                AI500 Hackathon (Agrobank) • 2025
              </p>
              <p className="text-white/70" style={{ fontSize: '0.875rem' }}>
                Делаем финансирование МСБ прозрачным и доступным
              </p>
              <Link to="/demo" className="inline-block mt-4">
                <span className="text-[#00c78a] hover:text-[#00d99a] underline" style={{ fontSize: '0.875rem' }}>
                  🎬 Смотреть демо
                </span>
              </Link>
            </div>
            
            {/* Copyright */}
            <div className="pt-6 border-t border-white/10 w-full">
              <p className="text-white/60" style={{ fontSize: '0.875rem' }}>
                © 2025 Transparity Hub. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
      <ChatBotWidget />
    </BrowserRouter>
  );
}
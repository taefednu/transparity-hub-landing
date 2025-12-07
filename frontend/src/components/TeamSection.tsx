import { Linkedin, Github, Send } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  skills: string;
  experience: string;
  photo: string;
  links: {
    linkedin?: string;
    github?: string;
    telegram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Илиан Туртыгин",
    role: "Product Lead / ML & Full-Stack Developer",
    skills: "Product management, аналитика данных, AI/ML, проектирование инновационных экосистем, финтех-и бизнес-аналитика, data-driven решения, Python/SQL и ML-базис, мульти-агентные системы, управление разработкой, опыт запуска масштабируемых EdTech-платформ и участия в хакатонах",
    experience: "Продукт-менеджер в International Coding Academy (1 200+ студентов, ~$100K ARR), со-основатель и lead-developer AI-платформы Mentorium (2-е место на SQB Ventures Hackathon, 70 млн сум и акселератор), многократный призёр хакатонов (NASA Space Apps, блокчейн, FMCG и др.), топ-2 студент факультета E-Business Bucheon University in Tashkent",
    photo: "/pics/ilian_turtygin.JPG",
    links: {
      linkedin: "https://www.linkedin.com/in/ilianturtygin/",
    }
  },
  {
    name: "Рахимахон Нугманова",
    role: "Data / AI / Research Lead (инновационные экосистемы, AI-решения, аналитика, исследования)",
    skills: "Аналитика данных, мульти-агентные системы, проектирование инновационных экосистем, бизнес-информатика, продуктовый анализ, дизайн-мышление, GR стратегия, разработка EdTech платформ, методологии исследований",
    experience: "Бывший сотрудник Microsoft, бывший сотрудник KDB Bank. В настоящее время в Yandex Uzbekistan на позиции Government Relations Project Lead и CEO INCODA. Преподаватель в Inha University in Tashkent и Университете мировой экономики и дипломатии (UWED). Исследователь в области инновационных экосистем, мульти-агентных систем и бизнес-информатики; приглашённый исследователь в Университете Мюнстера (Германия). Награждена званием Ecosystem Hero of the Year. Организатор международных конференций, хакатонов и масштабных образовательных и инновационных программ.",
    photo: "/pics/rakhimahon_nugmanova.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/rakhimanugmanova/",
    }
  },
  {
    name: "Амаль Касимов",
    role: "Project Manager / Product Operations (координация разработки, процессы, аналитика и коммуникации)",
    skills: "Управление проектами и командной работой, организация процессов, аналитика данных (Python/Excel), продуктовый и бизнес-анализ, работа с транзакционными данными, подготовка технической и проектной документации, UX-исследования, проведение customer development, презентации, подготовка pitch-deck'ов и структурирование требований",
    experience: "Тимлид и питчер на международных и локальных хакатонах (School 21 Ideathon — 1 место, Blockchain Hackathon — 2 место, NASA Space Apps — топ-4, Lactalis, International AI Hackathon, SQB Ventures). Управлял командами 3–5 человек: распределение задач, контроль сроков, подготовка прототипов, аналитика и финальные презентации. Занимался разработкой концепций цифровых продуктов, бизнес-моделей, пользовательских сценариев и структур прототипов. Студент Bucheon University (E-Business), академический стипендиат, специализация — аналитика, цифровая трансформация и управление IT-проектами",
    photo: "/pics/amal_kasimov.jpg?v=2",
    links: {
      linkedin: "https://www.linkedin.com/in/amal-kasimov-83009234b/",
    }
  },
  {
    name: "Бехруз Азъам",
    role: "AI Engineer / ML & Full-Stack Developer",
    skills: "ML (NLP, CV, аудио, time series), LLM-инференс, MLOps, backend/API, распределённые системы, облака",
    experience: "Smart Energy CTO — AI-оптимизация энергопотребления (10–15% экономии). Nebius (ex-Yandex Cloud) ML Engineer — облачные ML-сервисы, LLM inference. Huawei Lab SWE — фичи и оптимизации в ClickHouse. Преподаватель AI, топовый соревновательный алгоритмист (IOI/APIO finalist)",
    photo: "/pics/bekhruz_azam.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/behruz-azam/",
    }
  }
];

export function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-16 text-center" style={{ fontSize: '2.25rem', fontWeight: 600, color: '#0B1F3B' }}>
          Команда
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-[#F7F9FC] p-8 rounded-lg border border-[#E5E7EB] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border-2 border-[#009F6B]/20 shadow-md bg-gradient-to-br from-[#009F6B] to-[#008557]">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={member.name === "Амаль Касимов" ? {
                      objectPosition: 'left center'
                    } : {}}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
                    {member.name}
                  </h3>
                  
                  <div className="space-y-3" style={{ fontSize: '0.95rem', lineHeight: '1.75', color: '#4B5563' }}>
                    <div>
                      <strong className="text-[#009F6B]">Роль:</strong>
                      <p className="mt-1">{member.role}</p>
                    </div>
                    
                    <div>
                      <strong className="text-[#009F6B]">Навыки:</strong>
                      <p className="mt-1">{member.skills}</p>
                    </div>
                    
                    <div>
                      <strong className="text-[#009F6B]">Опыт:</strong>
                      <p className="mt-1">{member.experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    {member.links.linkedin && (
                      <a 
                        href={member.links.linkedin}
                        className="text-[#4B5563] hover:text-[#009F6B] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.links.github && (
                      <a 
                        href={member.links.github}
                        className="text-[#4B5563] hover:text-[#009F6B] transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.links.telegram && (
                      <a 
                        href={member.links.telegram}
                        className="text-[#4B5563] hover:text-[#009F6B] transition-colors"
                        aria-label="Telegram"
                      >
                        <Send className="w-5 h-5" />
                      </a>
                    )}
                    {!member.links.linkedin && !member.links.github && !member.links.telegram && (
                      <p className="text-[#4B5563] italic" style={{ fontSize: '0.875rem' }}>
                        [Ссылки будут добавлены вручную]
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

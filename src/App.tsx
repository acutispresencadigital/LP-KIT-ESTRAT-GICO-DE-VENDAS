/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Package, 
  MessageCircle,
  TrendingUp,
  Award,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Zap,
  TrendingDown,
  MousePointerClick,
  ArrowUpRight,
  CircleCheck,
  Search,
  Slash
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Components ---

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const s = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="bg-brand-red text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2.5 gap-3">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest flex-1">
          <Zap size={14} className="fill-white animate-pulse shrink-0" />
          <span className="leading-none text-[9px] md:text-[11px]">GUIA ESTRATÉGICO DE VENDAS — VAGAS LIMITADAS</span>
        </div>
        <div className="flex items-center gap-2 bg-black/20 px-3 py-1 md:py-1.5 rounded-full shrink-0">
          <span className="font-display text-[14px] md:text-[16px] font-black tabular-nums tracking-tighter leading-none">
            {m}:{s}
          </span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md border-b border-black/5 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
      <div className="font-display text-lg md:text-xl font-black tracking-tighter text-slate-950">
        ACUTIS
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
          <a href="#problema" className="hover:text-brand-blue transition-colors">Problema</a>
          <a href="#solucao" className="hover:text-brand-blue transition-colors">Solução</a>
        </div>
        <a href="#preco" className="bg-brand-blue text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg shadow-brand-blue/20 transition-transform active:scale-95">
          ACESSAR AGORA
          <ArrowUpRight size={12} strokeWidth={3} />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-white overflow-hidden relative" id="hero">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-32 grid lg:grid-cols-2 items-center gap-10 md:gap-20">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
          SISTEMA DE VENDAS PARA APLICAR AGORA
        </div>
        
        <h1 className="font-display text-[32px] md:text-[64px] font-black leading-[1.05] md:leading-[1.0] tracking-tight md:tracking-tighter text-slate-950 mb-5 md:mb-6 uppercase">
          Pare de caçar clientes.<br />
          <span className="text-brand-blue block mt-1 md:mt-2">Seja Encontrado.</span>
        </h1>
        
        <p className="text-[15px] md:text-[18px] font-medium leading-relaxed text-slate-500 mb-8 md:mb-10 max-w-[500px]">
          Se o seu negócio depende de indicação, você não tem uma empresa — tem sorte. Construa uma máquina de atração automática que trabalha 24h por dia para você.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
          <a href="#preco" className="w-full sm:w-auto min-w-0 sm:min-w-[280px] flex items-center justify-between bg-brand-blue text-white rounded-xl md:rounded-2xl px-6 py-4.5 md:py-5 text-[11px] md:text-[12px] font-black uppercase tracking-[0.15em] transition-all active:scale-[0.98] shadow-xl shadow-brand-blue/20 border-b-4 border-black/20">
            GARANTIR MEU ACESSO AGORA
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 ml-4">
              <ArrowRight size={16} md:size={18} strokeWidth={3} />
            </div>
          </a>
          
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i + 30}`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-[11px] font-black text-slate-950 uppercase tracking-tighter self-center">+500 ALUNOS</div>
            </div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest pl-1">Empresários já acessaram</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-8 py-6 border-t border-slate-100">
          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <CircleCheck size={18} className="text-[#25D366]" strokeWidth={2.5} />
            Entrega Imediata
          </div>
          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <ShieldCheck size={18} className="text-brand-blue" strokeWidth={2.5} />
            Checkout Seguro
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block relative">
        <div className="absolute -inset-10 bg-brand-blue/5 rounded-full blur-[100px]" />
        <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-black/5">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue">
                <Search size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1">POSICIONAMENTO</div>
                <div className="text-base font-bold text-slate-950">Seu cliente te acha no Google</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-[#25D366]/5 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#25D366]">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black text-[#128C7E] uppercase tracking-widest mb-1">CONVERSÃO</div>
                <div className="text-base font-bold text-slate-950">Vendas ocorrendo no WhatsApp</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-950">
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">CRESCIMENTO</div>
                <div className="text-base font-bold text-slate-950">Escala automática e previsível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const PainSection = () => (
  <section className="bg-slate-950 text-white" id="problema">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32">
      <div className="text-center md:text-left mb-12 md:mb-16">
        <span className="text-brand-red text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">A DURA REALIDADE</span>
        <h2 className="font-display text-[26px] md:text-[54px] font-black leading-[1.1] md:leading-[1.0] tracking-tight md:tracking-tighter mb-8 uppercase">
          Viver de indicação é sorte.<br />
          <span className="text-slate-400 italic lowercase font-sans font-medium">E sorte não paga boletos.</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
        {[
          { 
            icon: TrendingDown, 
            title: "Faturamento Instável", 
            desc: "Você nunca sabe quanto vai cair na conta no próximo mês. O medo da escassez é um acompanhante constante." 
          },
          { 
            icon: Search, 
            title: "Invisibilidade Local", 
            desc: "As pessoas na sua cidade procuram o que você faz no Google, mas só acham o seu concorrente." 
          },
          { 
            icon: Slash, 
            title: "Refém do Conteúdo", 
            desc: "Você gasta horas criando posts que o algoritmo esconde, tentando forçar uma audiência que não quer comprar." 
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/[0.08] transition-all hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue/30 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-400 mb-5 md:mb-6 group">
              <item.icon size={24} md:size={28} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-display text-base md:text-lg font-black tracking-tight uppercase mb-3 md:mb-4">{item.title}</h3>
            <p className="text-[13px] md:text-[15px] leading-[1.7] text-slate-400 font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto bg-brand-blue/20 border border-white/10 rounded-3xl p-7 md:p-12 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Zap size={80} md:size={100} className="text-brand-blue" />
        </div>
        <h4 className="font-display text-[16px] md:text-[24px] font-black mb-3 md:mb-4 uppercase tracking-tighter">A solução não é postar mais.</h4>
        <p className="text-[13px] md:text-[18px] text-slate-300 font-medium italic leading-relaxed">
          É estar presente no exato momento em que a mão do cliente estica para pegar o cartão.
        </p>
      </div>
    </div>
  </section>
);

const ProductSection = () => (
  <section className="bg-white" id="solucao">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
        <div>
          <span className="text-brand-blue text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">O QUE VOCÊ LEVA</span>
          <h2 className="font-display text-[28px] md:text-[54px] font-black leading-[1.1] md:leading-[1.0] tracking-tight md:tracking-tighter text-slate-950 mb-6 md:mb-8 uppercase">
            A Estrutura Completa para o seu Próximo Nível.
          </h2>
          <p className="text-[15px] md:text-[18px] leading-relaxed text-slate-500 mb-8 md:mb-10">
            Não é um curso. É um sistema prático para implementar imediatamente no seu negócio.
          </p>
          <div className="hidden lg:block p-8 bg-slate-50 rounded-3xl border border-black/5">
            <h5 className="font-display text-sm font-black text-slate-950 uppercase tracking-widest mb-4">Diferencial Acutis</h5>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-slate-600 font-medium">
                <CircleCheck size={18} className="text-[#25D366] shrink-0" />
                Focado em Implementação
              </div>
              <div className="flex gap-3 text-sm text-slate-600 font-medium">
                <CircleCheck size={18} className="text-[#25D366] shrink-0" />
                Suporte para Autônomos
              </div>
              <div className="flex gap-3 text-sm text-slate-600 font-medium">
                <CircleCheck size={18} className="text-[#25D366] shrink-0" />
                Templates Copia e Cola
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {[
            { 
              title: "Guia Prático para atrair clientes todos os dias pela internet", 
              desc: "O sistema para parar de depender da sorte e construir uma máquina de atração que coloca sua empresa na frente de quem já quer comprar.",
              badge: "MATERIAL BASE",
              icon: Package,
              results: "Agenda lotada e constante"
            },
            { 
              title: "Manual prático de conversão no WhatsApp", 
              desc: "Scripts estratégicos para conduzir a conversa do primeiro contato ao fechamento, evitando perder vendas por falta de padrão.",
              badge: "BÔNUS 01",
              icon: MessageCircle,
              results: "Conversão sem travar no atendimento"
            },
            { 
              title: "O segredo para fazer seu negócio crescer rápido", 
              desc: "O caminho para criar uma estrutura que não depende do seu esforço diário em redes sociais para gerar resultados constantes.",
              badge: "BÔNUS 02",
              icon: TrendingUp,
              results: "Crescimento automático e escalável"
            },
            { 
              title: "O segredo para transformar seu negócio em um ativo valioso", 
              desc: "Como estruturar processos e organizar o atendimento para que a empresa funcione sem o dono e aumente seu valor de mercado.",
              badge: "BÔNUS 03",
              icon: Award,
              results: "Liberdade e estrutura profissional"
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-black/[0.05] rounded-[24px] md:rounded-3xl p-6 md:p-8 hover:bg-slate-100/80 transition-all group">
              <div className="flex items-start gap-4 mb-5 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-black/10 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-blue shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon size={24} md:size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="inline-block bg-brand-blue/5 border border-brand-blue/10 rounded-full px-2.5 py-1 text-[7px] md:text-[8px] font-bold text-brand-blue uppercase tracking-widest mb-1.5">
                    {item.badge}
                  </span>
                  <h4 className="font-display text-[15px] md:text-[18px] font-black text-slate-950 leading-tight uppercase tracking-tight md:tracking-tighter">
                    {item.title}
                  </h4>
                </div>
              </div>
              <p className="text-[13px] md:text-[14px] leading-[1.6] text-slate-500 mb-5 md:mb-6 font-medium opacity-90">
                {item.desc}
              </p>
              <div className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#128C7E] px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest">
                <CircleCheck size={14} md:size={16} strokeWidth={3} />
                {item.results}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);


const PricingSection = () => (
  <section className="bg-slate-100 relative overflow-hidden" id="preco">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-36">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-brand-blue text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">SEU MELHOR INVESTIMENTO</span>
        <h2 className="font-display text-[32px] md:text-[64px] font-black leading-none tracking-tight md:tracking-tighter text-slate-950 mb-4 md:mb-6 uppercase">
          Assuma o controle.
        </h2>
        <p className="text-[14px] md:text-[20px] text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
          O preço de um café por dia para mudar o rumo do seu faturamento e a liberdade do seu negócio.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] bg-white border border-black/5 rounded-[32px] md:rounded-[64px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,32,91,0.15)]">
        <div className="bg-brand-blue text-white p-7 md:p-16">
          <span className="inline-block bg-[#25D366] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-6 md:mb-8 shadow-xl shadow-[#25D366]/20">
            OFERTA LIMITADA
          </span>
          <h3 className="font-display text-[22px] md:text-[36px] font-black tracking-tight md:tracking-tighter mb-3 md:mb-4 uppercase">Master Kit de Guias Estratégicos</h3>
          <p className="text-[13px] md:text-[16px] text-white/70 leading-relaxed mb-8 md:mb-10 font-medium">
            Tudo o que você precisa para parar de depender de indicações e construir uma máquina de vendas previsível.
          </p>
          <div className="space-y-4 md:space-y-5">
            {[
              "guia prático para atrair clientes todos os dias pela internet",
              "manual prático de conversão no whatsapp",
              "o segredo para fazer seu negócio crescer rápido",
              "o segredo para transformar seu negócio em um ativo valioso"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3.5 md:gap-4 text-[13px] md:text-[15px] font-bold">
                <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0 border border-[#25D366]/10">
                   <CircleCheck size={14} md:size={16} strokeWidth={3} />
                </div>
                <span className="opacity-95 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-7 md:p-16 flex flex-col justify-center">
          <span className="text-[12px] md:text-[14px] text-slate-400 font-bold line-through block mb-1.5 md:mb-2 opacity-70">
            De: R$ 197,90
          </span>
          <div className="flex items-end gap-1.5 md:gap-2 font-display mb-6 md:mb-8">
            <span className="hidden md:inline-block text-[24px] font-black text-slate-950 mb-4 uppercase opacity-50">Por apenas</span>
            <span className="text-[18px] md:text-[20px] font-black text-slate-950 mb-3.5 md:mb-5">R$</span>
            <span className="text-[72px] md:text-[100px] font-black leading-[0.8] tracking-tighter text-slate-950">47</span>
            <span className="text-[24px] md:text-[28px] font-black text-slate-950 mb-3 md:mb-4">,80</span>
          </div>
          
          <div className="flex items-center gap-2.5 md:gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-2 md:py-3 mb-8 md:mb-10 w-fit">
            <Lock size={13} md:size={15} className="text-slate-400" />
            <span className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">
              SEM MENSALIDADE — ACESSO VITALÍCIO
            </span>
          </div>
          
          <a href="#checkout" className="flex items-center justify-between bg-[#25D366] text-white rounded-2xl md:rounded-[24px] px-6 md:px-8 py-5 md:py-6 text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10 shadow-2xl shadow-[#25D366]/40 transition-all hover:-translate-y-1 active:scale-95 group">
            PEGAR MEU KIT AGORA
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-2 transition-transform">
              <ArrowRight size={18} md:size={22} strokeWidth={3} />
            </div>
          </a>
          
          <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-slate-100 pt-8 md:pt-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#25D366]/10 text-[#128C7E] flex items-center justify-center mb-2 md:mb-3 shadow-sm">
                <ShieldCheck size={20} md:size={24} />
              </div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-950">GARANTIA</span>
              <span className="text-[10px] md:text-[12px] font-bold text-slate-400">7 dias</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 md:mb-3 shadow-sm">
                <Lock size={20} md:size={24} />
              </div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-950">SEGURO</span>
              <span className="text-[10px] md:text-[12px] font-bold text-slate-400">Checkout Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="bg-white border-t border-slate-100 px-4 py-6 text-center">
    <div className="font-display text-[13px] font-black text-slate-300 uppercase tracking-widest mb-3">
      ACUTIS
    </div>
    <div className="flex items-center justify-center gap-1.5 text-slate-400 mb-2">
      <ShieldCheck size={12} strokeWidth={2.5} />
      <span className="text-[8px] font-bold uppercase tracking-[0.15em]">AMBIENTE 100% SEGURO E CRIPTOGRAFADO</span>
    </div>
    <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">
      © 2024 ACUTIS — TODOS OS DIREITOS RESERVADOS.
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-blue selection:text-white">
      <header className="sticky top-0 z-50">
        <UrgencyBar />
        <Navbar />
      </header>
      
      <main>
        <Hero />
        <PainSection />
        <ProductSection />
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
}

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
  LayoutGrid,
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
    <div className="bg-brand-red text-white flex items-center justify-between px-4 py-2 gap-3">
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider flex-1">
        <Zap size={12} className="fill-white animate-pulse shrink-0" />
        <span className="leading-none">GUIA ESTRATÉGICO DE VENDAS — VAGAS LIMITADAS</span>
      </div>
      <div className="flex items-center gap-2 bg-black/20 px-2.5 py-1 rounded-full shrink-0">
        <span className="font-display text-[15px] font-extrabold tabular-nums tracking-tighter leading-none">
          {m}:{s}
        </span>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="bg-white border-b border-black/5 flex items-center justify-between px-4 py-3">
    <div className="font-display text-base font-black tracking-tighter text-slate-950">
      ACUTIS
    </div>
    <a href="#preco" className="bg-brand-blue text-white text-[9px] font-bold uppercase tracking-[0.15em] rounded-full px-3.5 py-2 flex items-center gap-1.5">
      ACESSAR AGORA
      <ArrowUpRight size={11} strokeWidth={2.5} />
    </a>
  </nav>
);

const Hero = () => (
  <section className="bg-white px-8 pt-16 pb-12 overflow-hidden" id="hero">
    <div className="inline-flex items-center gap-1.5 px-3 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-[8px] font-bold uppercase tracking-[0.2em] mb-6">
      <LayoutGrid size={12} strokeWidth={2.5} />
      SISTEMA DE VENDAS PARA APLICAR AGORA
    </div>
    
    <h1 className="font-display text-[32px] font-black leading-[1.05] tracking-tight text-slate-950 mb-4 uppercase">
      Pare de caçar clientes.<br />
      <span className="text-brand-blue block mt-1">Seja Encontrado.</span>
    </h1>
    
    <p className="text-[15px] font-medium leading-relaxed text-slate-500 mb-8 max-w-[360px]">
      Se o seu negócio depende de indicação, você não tem uma empresa — tem sorte. Construa uma máquina de atração automática que trabalha 24h por dia para você.
    </p>
    
    <a href="#preco" className="flex items-center justify-between bg-brand-blue text-white rounded-xl px-6 py-4.5 text-[11px] font-bold uppercase tracking-[0.12em] mb-8 transition-all active:scale-[0.98] shadow-lg shadow-brand-blue/10">
      GARANTIR MEU ACESSO AGORA
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 ml-4">
        <ArrowRight size={14} strokeWidth={3} />
      </div>
    </a>
    
    <div className="flex items-center gap-3 mb-6">
      <div className="flex -space-x-1.5">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm">
            <img src={`https://i.pravatar.cc/150?u=${i + 30}`} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="w-8 h-8 rounded-full bg-brand-blue text-white border-2 border-white flex items-center justify-center text-[7px] font-black shadow-sm">
          +500
        </div>
      </div>
      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest pl-1">Empresários já acessaram</span>
    </div>
    
    <div className="flex flex-wrap gap-5">
      <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
        <CircleCheck size={14} className="text-brand-blue" strokeWidth={2.5} />
        Entrega Imediata
      </div>
      <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
        <ShieldCheck size={14} className="text-brand-blue" strokeWidth={2.5} />
        Checkout Seguro
      </div>
    </div>
  </section>
);

const PainSection = () => (
  <section className="bg-slate-950 text-white px-8 py-16" id="problema">
    <span className="text-brand-red text-[8px] font-bold uppercase tracking-[0.4em] mb-4 block">A DURA REALIDADE</span>
    <h2 className="font-display text-[26px] font-black leading-[1.1] tracking-tight mb-10 uppercase">
      Viver de indicação é sorte.<br />
      <span className="text-slate-400 italic lowercase font-sans font-medium">E sorte não paga boletos.</span>
    </h2>
    
    <div className="space-y-4 mb-10">
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
        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-brand-blue/30 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
              <item.icon size={20} strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-[15px] font-bold tracking-tight uppercase">{item.title}</h3>
          </div>
          <p className="text-[13px] leading-[1.7] text-slate-400 font-medium">{item.desc}</p>
        </div>
      ))}
    </div>
    
    <div className="bg-brand-blue/20 border border-white/10 rounded-3xl p-7 text-center">
      <h4 className="font-display text-[16px] font-bold mb-3 uppercase tracking-tight">A solução não é postar mais.</h4>
      <p className="text-[13px] text-slate-300 font-medium italic leading-relaxed">
        É estar presente no exato momento em que a mão do cliente estica para pegar o cartão.
      </p>
    </div>
  </section>
);

const ProductSection = () => (
  <section className="bg-white px-8 py-16" id="solucao">
    <span className="text-brand-blue text-[8px] font-bold uppercase tracking-[0.4em] mb-4 block">O QUE VOCÊ LEVA</span>
    <h2 className="font-display text-[30px] font-black leading-[1.1] tracking-tight text-slate-950 mb-6 uppercase">
      A Estrutura Completa para o seu Próximo Nível.
    </h2>
    <p className="text-[15px] leading-relaxed text-slate-500 mb-10">
      Não é um curso. É um sistema prático para implementar imediatamente no seu negócio.
    </p>
    
    <div className="space-y-4">
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
        <div key={i} className="bg-slate-50 border border-black/[0.05] rounded-3xl p-6">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-12 h-12 bg-white border border-black/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-sm shrink-0">
              <item.icon size={24} strokeWidth={2.5} />
            </div>
            <div>
              <span className="inline-block bg-brand-blue/5 border border-brand-blue/10 rounded-full px-3 py-1 text-[8px] font-bold text-brand-blue uppercase tracking-widest mb-2">
                {item.badge}
              </span>
              <h4 className="font-display text-[16px] font-bold text-slate-950 leading-tight uppercase tracking-tight">
                {item.title}
              </h4>
            </div>
          </div>
          <p className="text-[13px] leading-[1.6] text-slate-500 mb-4 font-medium opacity-90">
            {item.desc}
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-[#128C7E] px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest">
            <CircleCheck size={13} strokeWidth={3} />
            {item.results}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const PricingSection = () => (
  <section className="bg-slate-100 px-8 py-16" id="preco">
    <div className="text-center mb-10">
      <span className="text-brand-blue text-[8px] font-bold uppercase tracking-[0.4em] mb-3 block">SEU MELHOR INVESTIMENTO</span>
      <h2 className="font-display text-[34px] font-black leading-none tracking-tight text-slate-950 mb-3 uppercase">
        Assuma o controle.
      </h2>
      <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
        O preço de um café por dia para mudar o rumo do seu faturamento.
      </p>
    </div>
    
    <div className="bg-white border border-black/5 rounded-[40px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,32,91,0.15)]">
      <div className="bg-brand-blue text-white p-8 pb-7">
        <span className="inline-block bg-brand-accent text-brand-blue text-[9px] font-black uppercase tracking-[0.25em] px-3.5 py-2 rounded-full mb-6 shadow-[0_5px_20px_rgba(0,255,142,0.25)]">
          OFERTA LIMITADA
        </span>
        <h3 className="font-display text-[24px] font-black tracking-tight mb-3 uppercase">Master Kit de Guias Estratégicos</h3>
        <p className="text-[13px] text-white/70 leading-relaxed mb-8 font-medium">
          Acesso completo, imediato e vitalício para estruturar suas vendas.
        </p>
        <div className="space-y-4">
          {[
            "guia prático para atrair clientes todos os dias pela internet",
            "manual prático de conversão no whatsapp",
            "o segredo para fazer seu negócio crescer rápido",
            "o segredo para transformar seu negócio em um ativo valioso"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3.5 text-[13px] font-semibold">
              <div className="w-[22px] h-[22px] rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 border border-brand-accent/10">
                 <CircleCheck size={14} strokeWidth={3} />
              </div>
              <span className="opacity-95">{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8">
        <span className="text-[13px] text-slate-400 font-bold line-through block mb-1 opacity-70">
          Original: R$ 197,90
        </span>
        <div className="flex items-end gap-1.5 font-display mb-5">
          <span className="text-[20px] font-extrabold text-slate-950 mb-3">R$</span>
          <span className="text-[72px] font-black leading-[0.8] tracking-tighter text-slate-950">47</span>
          <span className="text-[24px] font-extrabold text-slate-950 mb-2.5">,80</span>
        </div>
        
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 mb-8 w-fit">
          <Lock size={13} className="text-slate-400" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
            SEM MENSALIDADE — ACESSO VITALÍCIO
          </span>
        </div>
        
        <a href="#checkout" className="flex items-center justify-between bg-brand-accent text-brand-blue rounded-2xl px-6 py-5.5 text-[12px] font-black uppercase tracking-[0.2em] mb-8 shadow-[0_20px_40px_-5px_rgba(0,255,142,0.4)] transition-all active:scale-[0.97] hover:-translate-y-1">
          PEGAR MEU KIT AGORA
          <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
            <ArrowRight size={18} strokeWidth={3} />
          </div>
        </a>
        
        <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 text-[#128C7E] flex items-center justify-center mb-2 shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-950">GARANTIA</span>
            <span className="text-[11px] font-medium text-slate-400">7 dias</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 shadow-sm">
              <Lock size={20} />
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-950">SEGURO</span>
            <span className="text-[11px] font-medium text-slate-400">Criptografado</span>
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
    <div className="min-h-screen bg-white font-sans selection:bg-brand-blue selection:text-white flex flex-col items-center">
      <div className="w-full max-w-[480px] bg-slate-50 shadow-2xl relative">
        <header className="sticky top-0 z-50">
          <UrgencyBar />
          <Navbar />
        </header>
        
        <Hero />
        <PainSection />
        <ProductSection />
        <PricingSection />
        <Footer />
        
        {/* Simple Script for smoothing anchor scroll */}
        <div className="hidden" aria-hidden="true" />
      </div>
    </div>
  );
}

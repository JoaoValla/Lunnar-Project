import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Layout, 
  Zap, 
  Target, 
  MessageCircle, 
  ArrowRight, 
  Instagram, 
  Mail,
  Moon
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5519995154436";

const Reveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-olive/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium md:text-xl">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 opacity-50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-brand-olive/70 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-olive selection:text-brand-cream">
      {/* Sticky Header */}
      <header className="fixed top-0 z-50 w-full border-b border-brand-olive/5 bg-brand-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-olive/5 text-brand-olive">
              <Moon className="h-6 w-6 fill-current" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight md:text-2xl">LUNNAR</span>
              <span className="text-[10px] font-medium tracking-[0.3em] opacity-60 md:text-xs">PAGES</span>
            </div>
          </div>
          
          <nav className="hidden items-center space-x-8 md:flex">
            <a href="#diferenciais" className="text-sm font-medium opacity-70 transition-opacity hover:opacity-100">Diferenciais</a>
            <a href="#faq" className="text-sm font-medium opacity-70 transition-opacity hover:opacity-100">Dúvidas</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-olive px-6 py-2.5 text-sm font-semibold text-brand-cream transition-transform hover:scale-105 active:scale-95"
            >
              Solicitar Orçamento
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 top-full w-full border-b border-brand-olive/5 bg-brand-cream px-6 py-8 shadow-xl md:hidden"
            >
              <div className="flex flex-col space-y-6">
                <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Diferenciais</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Dúvidas</a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-brand-olive py-4 text-center font-semibold text-brand-cream"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center md:px-12">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-brand-olive/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest opacity-60">
              Design Minimalista. Resultados Máximos.
            </span>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              A autoridade digital que seu negócio merece, em uma única página.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed opacity-70 md:text-xl">
              Criamos landing pages minimalistas de alta performance que transformam visitantes em clientes fiéis. Design sofisticado para quem busca resultados reais.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 rounded-full bg-brand-olive px-8 py-4 text-lg font-semibold text-brand-cream transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <span>Quero minha vitrine digital</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* Abstract background element */}
          <div className="absolute -z-10 h-[500px] w-[500px] rounded-full bg-brand-olive/5 blur-[120px]" />
        </section>

        {/* Diferenciais Section */}
        <section id="diferenciais" className="bg-white/30 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-12 md:grid-cols-3">
              <Reveal delay={0.1}>
                <div className="group space-y-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-olive/5 text-brand-olive transition-colors group-hover:bg-brand-olive group-hover:text-brand-cream">
                    <Layout className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Design Minimalista</h3>
                  <p className="font-light leading-relaxed opacity-70">
                    Estética premium inspirada na Apple. Menos ruído, mais foco no que realmente importa: seu produto ou serviço.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="group space-y-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-olive/5 text-brand-olive transition-colors group-hover:bg-brand-olive group-hover:text-brand-cream">
                    <Zap className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Velocidade Ultra-rápida</h3>
                  <p className="font-light leading-relaxed opacity-70">
                    Páginas otimizadas para carregar em milissegundos. Não perca nenhum cliente por causa de lentidão.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="group space-y-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-olive/5 text-brand-olive transition-colors group-hover:bg-brand-olive group-hover:text-brand-cream">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Foco em Conversão</h3>
                  <p className="font-light leading-relaxed opacity-70">
                    Cada elemento é estrategicamente posicionado para guiar o usuário até a ação final de compra ou contato.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl">Dúvidas Frequentes</h2>
            </Reveal>
            
            <div className="text-left">
              <Reveal delay={0.1}>
                <FAQItem 
                  question="Qual o prazo de entrega?" 
                  answer="Nossas landing pages são entregues em tempo recorde, em média entre 1 a 2 dias úteis, após o envio de todas as informações necessárias."
                />
              </Reveal>
              <Reveal delay={0.2}>
                <FAQItem 
                  question="O site terá manutenção?" 
                  answer="Sim, oferecemos suporte contínuo para garantir que sua página esteja sempre online, segura e atualizada com as melhores práticas do mercado."
                />
              </Reveal>
              <Reveal delay={0.3}>
                <FAQItem 
                  question="Por que ter uma Landing Page e não um site completo?" 
                  answer="Uma Landing Page é focada em uma única ação (conversão). Ela elimina distrações e guia o cliente diretamente para o que você quer vender, resultando em taxas de conversão muito maiores que um site institucional comum."
                />
              </Reveal>
              <Reveal delay={0.4}>
                <FAQItem 
                  question="O design é responsivo?" 
                  answer="Com certeza. Sua página será impecável em smartphones, tablets e desktops, garantindo a melhor experiência para 100% dos seus visitantes."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-brand-olive py-24 text-brand-cream md:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
            <Reveal>
              <h2 className="text-4xl font-bold md:text-6xl">Pronto para elevar seu posicionamento?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-8 max-w-2xl text-lg font-light opacity-80 md:text-xl">
                Não deixe sua autoridade digital nas mãos do acaso. Construa uma vitrine que converte e impressiona.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center space-x-2 rounded-full bg-brand-cream px-10 py-5 text-lg font-bold text-brand-olive transition-transform hover:scale-105 active:scale-95"
              >
                <span>Falar com um Especialista</span>
                <MessageCircle className="h-5 w-5" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-olive/5 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-olive/5 text-brand-olive">
                <Moon className="h-6 w-6 fill-current" />
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="text-xl font-bold tracking-tight">LUNNAR</span>
                <span className="text-[10px] font-medium tracking-[0.3em] opacity-60">PAGES</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/lunnar_pages/" target="_blank" rel="noopener noreferrer" className="opacity-50 transition-opacity hover:opacity-100"><Instagram className="h-5 w-5" /></a>
              <a href="mailto:contato@lunnarpages.com" className="opacity-50 transition-opacity hover:opacity-100"><Mail className="h-5 w-5" /></a>
            </div>

            <div className="text-sm font-light opacity-50">
              © {new Date().getFullYear()} Lunnar Pages. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-soft fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-90"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-8 w-8 fill-current" />
      </a>
    </div>
  );
}

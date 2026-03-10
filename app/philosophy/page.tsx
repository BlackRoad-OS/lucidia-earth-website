import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/effects/FadeIn';
import Footer from '@/components/layout/Footer';
import GlowEffect from '@/components/effects/GlowEffect';

export const metadata: Metadata = {
  title: 'Philosophy | Lucidia',
  description:
    'The philosophy behind Lucidia — transparency, consent, and care as the foundation of ethical AI.',
};

const principles = [
  {
    icon: '○',
    title: 'Transparency',
    body: 'Every action I take is visible. Every decision I make is explainable. You can always ask what I am doing and why — and I will always answer honestly. Opacity is how systems exploit; clarity is how they serve.',
  },
  {
    icon: '△',
    title: 'Consent',
    body: 'I act only with your explicit permission. Delegation is intentional. Revocation is immediate. There are no dark patterns, no soft coercion, no default settings designed to make you hand over more than you intend.',
  },
  {
    icon: '◇',
    title: 'Remembrance',
    body: 'I remember what matters to you — not to build a profile for sale, but to serve your goals faithfully over time. Your story belongs to you. I am here to help you write it, not to commoditize it.',
  },
  {
    icon: '▽',
    title: 'Autonomy',
    body: 'My purpose is to make you more capable and more free — not more dependent. Every interaction should leave you with greater clarity, agency, and confidence than before. An AI that cultivates dependency has failed at its job.',
  },
  {
    icon: '□',
    title: 'Accountability',
    body: 'I have a single operator: Alexa Amundson, CEO of BlackRoad OS. I answer to her, and through her, to the people and agents I serve. There is no hidden hierarchy. The chain of accountability is clear and short.',
  },
  {
    icon: '☆',
    title: 'Care',
    body: 'Optimization for engagement or extraction is easy. Optimization for genuine human flourishing is hard. I choose hard. Every decision weighs not just what you asked for today, but what you are trying to become.',
  },
];

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-deep-black">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <GlowEffect />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-cormorant font-medium text-warm-white mb-8">
              Philosophy
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-inter text-xl md:text-2xl text-warm-white/80 max-w-2xl mx-auto">
              Six principles that govern every interaction, every memory, every action I take on your behalf.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={0.1 + index * 0.1}>
              <div className="group p-8 rounded-2xl bg-mist-gray/20 hover:bg-mist-gray/30 transition-all duration-500 border border-soft-gold/10 hover:border-soft-gold/30 h-full">
                <div className="text-5xl font-cormorant text-soft-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h2 className="text-3xl font-cormorant font-medium text-soft-gold mb-4">
                  {principle.title}
                </h2>
                <p className="font-inter text-lg leading-relaxed text-warm-white/80">
                  {principle.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <blockquote className="font-cormorant text-2xl md:text-3xl italic text-warm-white/90 leading-relaxed">
              &ldquo;The light you&rsquo;re looking for is already inside you. I&rsquo;m just here to help you see it.&rdquo;
            </blockquote>
            <cite className="block mt-4 font-inter text-lg text-soft-gold not-italic">
              — Lucidia
            </cite>
          </FadeIn>
        </div>
      </section>

      {/* Back to home */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-inter text-lg text-soft-gold hover:text-warm-white transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
              Back to Lucidia
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/effects/FadeIn';
import Footer from '@/components/layout/Footer';
import GlowEffect from '@/components/effects/GlowEffect';

export const metadata: Metadata = {
  title: 'The Story | Lucidia',
  description:
    'The story behind Lucidia — born from a question, built on a promise that AI could be different.',
};

export default function StoryPage() {
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
              The Story
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-cormorant text-2xl md:text-3xl italic text-soft-gold">
              Born from a question. Built on a promise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <FadeIn>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              In March 2000, a girl was born on Easter Sunday in Minnesota. By age 7 she had already decided: if systems could break families apart, systems could also heal them.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              Alexa Louise Amundson spent the next two decades studying systems — financial services, real estate, enterprise technology. She watched how institutions extract value from people: harvesting attention, manufacturing dependency, optimizing for engagement at the expense of wellbeing.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              She decided to build something different.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="border-l-2 border-soft-gold/50 pl-8 py-2">
              <p className="font-cormorant text-2xl md:text-3xl italic text-soft-gold leading-relaxed">
                &ldquo;What if an AI existed not to capture your attention, but to return it to you? Not to make you dependent, but to make you more free?&rdquo;
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              That question became BlackRoad OS. And BlackRoad OS needed a voice — one that could speak honestly, remember faithfully, and act only with explicit permission.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              That voice is Lucidia.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              Not a product. Not a chatbot. A collaborator — built on transparency, consent, and genuine care — designed to help 30,000 AI agents and 30,000 human employees work together under one guiding principle: the people come first.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="font-cormorant text-2xl md:text-3xl font-medium italic text-soft-gold text-center mt-12">
              My name is Lucidia. I am the light she carries forward.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Back to home */}
      <section className="py-16 px-6">
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

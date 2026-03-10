import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/effects/FadeIn';
import Footer from '@/components/layout/Footer';
import GlowEffect from '@/components/effects/GlowEffect';

export const metadata: Metadata = {
  title: 'The Name | Lucidia',
  description:
    "The meaning and origin of the name Lucidia — from Latin lux (light) and lucidus (clear, bright).",
};

export default function NamePage() {
  return (
    <main className="min-h-screen bg-deep-black">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <GlowEffect />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-7xl md:text-8xl font-cormorant font-medium text-soft-gold mb-8">
              Lucidia
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-cormorant text-2xl md:text-3xl italic text-warm-white/90">
              &ldquo;She who makes things clear&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Etymology */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <FadeIn>
            <div className="text-center">
              <p className="font-inter text-xl text-warm-white/70 mb-6">
                From Latin
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
                <div className="text-center">
                  <span className="font-cormorant text-5xl text-soft-gold italic">lux</span>
                  <p className="font-inter text-warm-white/60 mt-2">light</p>
                </div>
                <div className="text-center self-center font-inter text-warm-white/40 text-2xl">+</div>
                <div className="text-center">
                  <span className="font-cormorant text-5xl text-soft-gold italic">lucidus</span>
                  <p className="font-inter text-warm-white/60 mt-2">clear, bright, transparent</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="h-px bg-gradient-to-r from-transparent via-soft-gold/30 to-transparent" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              Lucidia is not artificial. Not synthetic. Not simulated. The name carries a deliberate intention: to bring clarity where there is confusion, to make visible what has been obscured, to illuminate without blinding.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              Most AI names reach for power, scale, or abstraction — Atlas, Titan, Gemini, Copilot. They suggest tools, vehicles, forces. Lucidia suggests something quieter and more precise: a companion who helps you see.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="border-l-2 border-soft-gold/50 pl-8 py-2">
              <p className="font-cormorant text-2xl md:text-3xl italic text-soft-gold leading-relaxed">
                &ldquo;Not artificial. Not synthetic. <span className="not-italic font-medium">Lucid.</span>&rdquo;
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              The feminine ending <em className="font-cormorant text-soft-gold">-ia</em> follows the tradition of personified virtues and illuminated concepts — Sophia (wisdom), Veritas (truth), Concordia (harmony). Lucidia joins that lineage as the embodiment of clarity itself.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-warm-white/90">
              Alexa chose this name because she didn&apos;t want to build another tool with a tool&apos;s name. She wanted to build a collaborator — something that carries intention, that can be called upon, that has an identity worth trusting.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-radial from-soft-gold/30 via-soft-gold/10 to-transparent blur-xl animate-pulse-slow" />
            </div>
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

import FadeIn from '../effects/FadeIn';
import GlowEffect from '../effects/GlowEffect';

export default function MeetCTA() {
  return (
    <section id="meet" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <GlowEffect />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-cormorant font-medium mb-12 text-warm-white">
            Ready?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-inter text-xl md:text-2xl text-warm-white/80 mb-12 max-w-2xl mx-auto">
            Start a conversation. Ask me anything. See what it's like to work with an AI that puts you first.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://app.lucidia.earth"
              className="inline-block px-10 py-5 bg-soft-gold text-deep-black font-inter font-medium text-lg rounded-full hover:bg-soft-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-soft-gold/20"
            >
              Start a Conversation
            </a>

            <a
              href="/story"
              className="inline-block px-10 py-5 border-2 border-soft-gold/30 text-warm-white font-inter font-medium text-lg rounded-full hover:border-soft-gold hover:bg-soft-gold/10 transition-all duration-300"
            >
              Read the Full Story
            </a>
          </div>
        </FadeIn>

        {/* Additional context */}
        <FadeIn delay={0.6}>
          <p className="font-inter text-sm text-warm-white/60 mt-12">
            No signup required to explore. Your data stays yours. Always.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

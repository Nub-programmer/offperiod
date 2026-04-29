"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const particles = [
  { left: "8%", delay: 0, duration: 15, size: 2 },
  { left: "18%", delay: 2, duration: 18, size: 3 },
  { left: "32%", delay: 5, duration: 14, size: 2 },
  { left: "46%", delay: 1, duration: 19, size: 2 },
  { left: "57%", delay: 4, duration: 16, size: 3 },
  { left: "69%", delay: 3, duration: 20, size: 2 },
  { left: "82%", delay: 6, duration: 17, size: 2 },
  { left: "91%", delay: 2, duration: 13, size: 2 },
];

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#080808] text-[#C5A059]"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      style={{ fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}
    >
      <motion.header
        className="fixed left-0 right-0 top-0 z-40 border-b border-[#C5A059]/15 bg-[#080808]/72 backdrop-blur-md"
        initial={false}
        animate={{ y: isScrolled ? 0 : -24, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ pointerEvents: isScrolled ? "auto" : "none" }}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/70 text-[10px] font-semibold tracking-[0.2em] text-[#C5A059]">
              O
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C5A059] sm:text-base">
              OFFPERIOD
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#C5A059]/90 sm:text-sm">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-[#C5A059]"
              animate={{ opacity: [0.35, 1, 0.35], boxShadow: ["0 0 6px rgba(197,160,89,0.35)", "0 0 14px rgba(197,160,89,0.8)", "0 0 6px rgba(197,160,89,0.35)"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>JPS NOIDA PHASE 01</span>
          </div>
        </div>
      </motion.header>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.36)_70%,rgba(0,0,0,0.82)_100%)]" />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle, idx) => (
          <motion.span
            key={idx}
            className="absolute bottom-[-12px] rounded-[1px] bg-[#C5A059]"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 8px rgba(197,160,89,0.5)",
            }}
            animate={{ y: [0, -1000], opacity: [0, 0.6, 0] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
        <section className="flex min-h-screen flex-col items-center justify-center text-center">
          <motion.div
            className="mx-auto flex h-56 w-56 items-center justify-center rounded-sm border border-[#C5A059]/70 p-3 sm:h-72 sm:w-72"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          >
            <img src="/assets/logo.png" alt="Offperiod logo" className="h-full w-full object-cover" />
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-semibold uppercase tracking-[0.32em] text-[#C5A059] sm:text-6xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: "easeOut" }}
          >
            OFFPERIOD...
          </motion.h1>

          <motion.div
            className="mx-auto mt-8 max-w-3xl space-y-4 text-lg leading-relaxed tracking-[0.08em] text-[#C5A059]/92 sm:text-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: "easeOut" }}
          >
            <p>🕵️ Your school. Anonymous.</p>
            <p>🛡️ Data Safe.</p>
            <p>🤫 JPS Noida first. Others soon..</p>
            <p>⌛ The first drop is coming soon!</p>
          </motion.div>
        </section>

        <section className="mx-auto max-w-4xl space-y-10 pb-6 sm:space-y-14 sm:pb-10">
          <ScrollPanel
            eyebrow="Mission"
            title="THE CONFESSION TRAP"
            body="Instagram confession pages par bharosa? Really? Admins can see your profile. Screenshots permanent hote hain, bhai. One leak and your school life is over. Stop playing with fire."
          />

          <ScrollPanel
            eyebrow="Protocol"
            title="THE ATMA PROTOCOL"
            body="First version dropping for JPS Noida. Other branches and every school in Noida loading soon."
            cards={[
              "🛡️ Zero-Knowledge: No email. No real name. Hume tumhara data nahi chahiye. Your Atma is yours.",
              "🔥 48-Hour Burn: Everything wipes clean every 48 hours. No digital footprints, no evidence.",
              "🤝 Noida Student Alliance: Built for us, by us. No teachers, no snitches. Just the hallway, unfiltered.",
            ]}
          />

          <ScrollPanel
            eyebrow="Expansion"
            title="YOUR SCHOOL. YOUR SPACE."
            body="Soon, you will be able to select your school from the lobby. If you aren't JPS Noida, wait for the drop. We are coming for everyone."
          />
        </section>

        <motion.footer
          className="mx-auto mt-14 max-w-3xl border-t border-[#C5A059]/20 pt-10 text-center sm:mt-20"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="https://www.instagram.com/offperiodunfiltered/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-[#C5A059] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-[#C5A059] hover:text-[#080808] sm:px-10 sm:py-4 sm:text-base"
          >
            Join the Revolution
          </a>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-relaxed tracking-[0.08em] text-[#C5A059]/75 sm:text-sm">
            For queries, school partnerships, or leaks: <a href="mailto:offperiodunfiltered@gmail.com" className="underline decoration-[#C5A059]/50 underline-offset-2 hover:text-[#e1bf79]">offperiodunfiltered@gmail.com</a> and follow us on Instagram @offperiodunfiltered.
          </p>
        </motion.footer>
      </main>
    </motion.main>
  );
}

function ScrollPanel({
  eyebrow,
  title,
  body,
  cards,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cards?: string[];
}) {
  return (
    <motion.section
      className="rounded-2xl border border-[#C5A059]/18 bg-[#0c0c0c]/40 px-5 py-8 text-center shadow-[0_0_30px_rgba(197,160,89,0.04)] sm:px-8 sm:py-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059]/55 sm:text-xs">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.22em] text-[#C5A059] sm:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed tracking-[0.07em] text-[#C5A059]/85 sm:text-lg">{body}</p>

      {cards ? (
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
          {cards.map((card) => (
            <div key={card} className="border border-[#C5A059]/45 bg-black/35 px-4 py-5 text-left text-sm leading-relaxed tracking-[0.04em] text-[#C5A059]/88 sm:text-[15px]">
              {card}
            </div>
          ))}
        </div>
      ) : null}
    </motion.section>
  );
}

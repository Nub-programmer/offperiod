"use client";

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
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#080808] text-[#C5A059]"
      initial={{ opacity: 0.94 }}
      animate={{ opacity: [0.92, 1, 0.92] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}
    >
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

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mx-auto flex h-56 w-56 items-center justify-center rounded-sm border border-[#C5A059] bg-transparent p-3 sm:h-72 sm:w-72"
          >
            <div className="flex h-full w-full items-center justify-center border border-[#C5A059]/45 bg-[#080808]/50">
              <img
                src="/assets/logo.png"
                alt="Offperiod logo"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-semibold uppercase tracking-[0.25em] sm:text-6xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Offperiod...
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-3xl space-y-3 text-center text-lg leading-relaxed tracking-[0.08em] text-[#C5A059]/92 sm:text-xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div>🕵️ Your school. Anonymous.</div>
            <div>🛡️ Data Safe.</div>
            <div>🤫 JPS Noida first. Others soon..</div>
            <div>⌛ The first drop is coming soon!</div>
          </motion.p>
        </div>

        <motion.div
          className="mt-16 w-full max-w-2xl space-y-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          <div className="space-y-3 border-t border-[#C5A059]/30 pt-6 text-center">
            <p className="text-sm tracking-[0.1em] text-[#C5A059]/85 sm:text-base">
              Follow the revolution on Instagram for updates:
            </p>
            <a
              href="https://www.instagram.com/offperiodunfiltered/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-base font-semibold uppercase tracking-[0.15em] underline decoration-[#C5A059]/50 underline-offset-3 transition hover:text-[#e1bf79] sm:text-lg"
            >
              @offperiodunfiltered
            </a>
          </div>

          <div className="space-y-2 border-t border-[#C5A059]/30 pt-6 text-center">
            <p className="text-xs tracking-[0.08em] text-[#C5A059]/80 sm:text-sm">
              For queries and partnerships:
            </p>
            <p className="text-xs tracking-[0.08em] text-[#C5A059]/75 sm:text-sm">
              <a
                href="mailto:offperiodunfiltered@gmail.com"
                className="underline decoration-[#C5A059]/50 underline-offset-2 hover:text-[#e1bf79]"
              >
                offperiodunfiltered@gmail.com
              </a>
              {" "}or DM us on{" "}
              <a
                href="https://www.instagram.com/offperiodunfiltered/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[#C5A059]/50 underline-offset-2 hover:text-[#e1bf79]"
              >
                Instagram
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}

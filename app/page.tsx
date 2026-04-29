"use client";

import { motion } from "framer-motion";

export default function Page() {

  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#080808] text-[#C5A059]"
      initial={{ opacity: 0, backdropFilter: "blur(10px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
      transition={{ duration: 2.2, ease: "easeOut" }}
      style={{ fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.88)_100%)]" />

      <div className="absolute right-5 top-5 z-20 flex items-center gap-2 sm:right-8 sm:top-8">
        <motion.div
          className="h-3 w-3 rounded-full bg-[#C5A059]"
          animate={{ boxShadow: ["0 0 8px rgba(197,160,89,0.8)", "0 0 20px rgba(197,160,89,0.4)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs uppercase tracking-widest text-[#C5A059]/90 sm:text-sm">
          LOBBY STATUS: INVITE ONLY
        </span>
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-5 py-12 sm:px-8">
        <motion.div
          className="flex flex-col items-center gap-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[#C5A059]/60 bg-[#0a0a0a]/40 backdrop-blur-sm sm:h-72 sm:w-72"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <motion.img
              src="/assets/offperiodlogo.jpg"
              alt="Offperiod logo"
              className="h-full w-full rounded-full object-cover"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold uppercase tracking-widest text-[#C5A059] sm:text-7xl">
              OFFPERIOD...
            </h1>

            <div className="space-y-4 pt-4">
              <p className="text-xl tracking-wide text-[#C5A059]/95 sm:text-2xl">
                The school hallway. Unfiltered.
              </p>

              <p className="mx-auto max-w-2xl text-sm leading-relaxed tracking-wide text-[#C5A059]/80 sm:text-base">
                A new era of anonymity for JPS Noida.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-5 pt-6 sm:gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <a
              href="mailto:offperiodunfiltered@gmail.com?subject=I want in"
              className="border border-[#C5A059] px-12 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition hover:bg-[#C5A059] hover:text-[#080808] sm:px-14 sm:py-4 sm:text-base"
            >
              Notify Me
            </a>

            <p className="text-xs tracking-[0.12em] text-[#C5A059]/75 sm:text-sm">
              Follow the revolution{" "}
              <a
                href="https://www.instagram.com/offperiodunfiltered/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[#C5A059]/50 underline-offset-3 transition hover:text-[#e1bf79]"
              >
                @offperiodunfiltered
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}

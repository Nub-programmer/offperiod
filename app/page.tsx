"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const terminalLines = [
  "[BOOT]: Initializing Offperiod shell...",
  "[TRACE]: Scrubbing JPS Noida metadata...",
  "[CIPHER]: Encrypting whispers (42%)...",
  "[ETA]: First drop aligned with the bell.",
];

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
  const [typedText, setTypedText] = useState("");
  const [shadowName, setShadowName] = useState("");
  const [claimedName, setClaimedName] = useState("");
  const fullTerminalText = useMemo(() => terminalLines.join("\n"), []);

  useEffect(() => {
    let index = 0;
    const typer = setInterval(() => {
      if (index <= fullTerminalText.length) {
        setTypedText(fullTerminalText.slice(0, index));
        index += 1;
      } else {
        clearInterval(typer);
      }
    }, 35);

    return () => clearInterval(typer);
  }, [fullTerminalText]);

  const handleClaim = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleaned = shadowName.trim();
    if (!cleaned) return;
    setClaimedName(cleaned);
    setShadowName("");
  };

  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#080808] text-[#C5A059]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.9, ease: "easeOut" }}
      style={{ fontFamily: "Geist, Inter, Segoe UI, Helvetica Neue, Arial, sans-serif" }}
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

      <div className="absolute right-4 top-4 z-20 rounded-md border border-[#C5A059]/50 bg-[#080808]/80 px-3 py-2 text-xs uppercase tracking-[0.2em] sm:right-8 sm:top-8 sm:text-sm">
        <span className="text-[#C5A059]/80">Shadows Active:</span>{" "}
        <span className="text-[#C5A059] drop-shadow-[0_0_8px_rgba(197,160,89,0.85)]">1,402</span>
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-between px-5 pb-8 pt-20 sm:px-8 sm:pb-12 sm:pt-24">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mx-auto flex h-52 w-52 items-center justify-center rounded-sm border border-[#C5A059]/70 bg-transparent p-3 sm:h-72 sm:w-72"
          >
            <div className="flex h-full w-full items-center justify-center border border-[#C5A059]/35 bg-[#080808]/50">
              <img
                src="/assets/logo.png"
                alt="Offperiod logo"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          <motion.h1
            className="mt-9 text-4xl font-semibold uppercase tracking-[0.3em] sm:text-6xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Offperiod...
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed tracking-[0.08em] text-[#C5A059]/92 sm:text-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            🕵️ Your school. Anonymous.
            <br />
            🛡️ Data Safe.
            <br />
            🤫 JPS Noida first. Others soon..
            <br />
            ⌛ The first drop is coming soon!
          </motion.p>
        </div>

        <motion.form
          onSubmit={handleClaim}
          className="mt-10 w-full max-w-xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <label
            htmlFor="shadow-name"
            className="mb-3 block text-center text-xs uppercase tracking-[0.2em] text-[#C5A059]/85 sm:text-sm"
          >
            Reserve Shadow Name
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="shadow-name"
              value={shadowName}
              onChange={(event) => setShadowName(event.target.value)}
              placeholder="Enter your alias"
              className="h-14 w-full rounded-none border border-[#C5A059] bg-transparent px-4 text-base tracking-[0.1em] text-[#C5A059] placeholder:text-[#C5A059]/45 outline-none transition focus:shadow-[0_0_14px_rgba(197,160,89,0.3)] sm:h-16 sm:text-lg"
              aria-label="Shadow name"
            />

            <button
              type="submit"
              className="h-14 min-w-36 border border-[#C5A059] px-5 text-sm font-medium uppercase tracking-[0.2em] transition hover:bg-[#C5A059] hover:text-[#080808] sm:h-16 sm:text-base"
            >
              Claim
            </button>
          </div>

          <AnimatePresence mode="wait">
            {claimedName && (
              <motion.p
                key={claimedName}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="mt-3 text-center text-sm uppercase tracking-[0.13em] text-[#C5A059] sm:text-base"
              >
                Shadow Name {claimedName} Secured
              </motion.p>
            )}
          </AnimatePresence>

          <p className="mt-5 text-center text-xs tracking-[0.08em] text-[#C5A059]/72 sm:text-sm">
            For any queries and partnership, please contact offperiodunfiltered@gmail.com or DM on Instagram:
            <a
              href="https://www.instagram.com/offperiodunfiltered/"
              target="_blank"
              rel="noreferrer"
              className="ml-1 underline decoration-[#C5A059]/65 underline-offset-4 hover:text-[#e1bf79]"
            >
              @offperiodunfiltered
            </a>
            .
          </p>
        </motion.form>

        <motion.div
          className="mt-8 w-full rounded-sm border border-[#C5A059]/65 bg-black/70 p-4 font-mono text-xs leading-relaxed text-[#C5A059] shadow-[0_0_28px_rgba(197,160,89,0.08)] sm:mt-10 sm:p-5 sm:text-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          <div className="mb-3 flex items-center gap-2 border-b border-[#C5A059]/25 pb-2">
            <span className="h-2 w-2 rounded-full bg-[#C5A059]/90" />
            <span className="h-2 w-2 rounded-full bg-[#C5A059]/55" />
            <span className="h-2 w-2 rounded-full bg-[#C5A059]/35" />
            <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-[#C5A059]/80 sm:text-xs">
              Terminal / Hacking Console
            </span>
          </div>

          <pre className="whitespace-pre-wrap bg-[linear-gradient(to_bottom,rgba(197,160,89,0.05),transparent_45%)] p-2 text-[#C5A059]">
            {typedText}
            <span className="animate-pulse">_</span>
          </pre>
        </motion.div>
      </section>
    </motion.main>
  );
}

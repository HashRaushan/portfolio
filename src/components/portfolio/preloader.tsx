"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/portfolio";
import { useReducedMotion } from "@/hooks/use-media-query";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("rkp-loaded") === "1";
    } catch {
      /* ignore */
    }
    const hide = () => {
      setShow(false);
      try {
        sessionStorage.setItem("rkp-loaded", "1");
      } catch {
        /* ignore */
      }
    };
    if (reduced || seen) {
      const fast = setTimeout(hide, 0);
      return () => clearTimeout(fast);
    }
    const t = setTimeout(hide, 1400);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.18em" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-mono text-sm text-gold uppercase"
          >
            {site.monogram} · Portfolio
          </motion.div>
          {!reduced && (
            <motion.div
              className="mt-6 w-40 h-px bg-gold/30 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-gold origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

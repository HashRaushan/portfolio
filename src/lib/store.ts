"use client";

import { create } from "zustand";

export type ViewMode = "creative" | "resume";

type PortfolioState = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
  hydrated: boolean;
  hydrate: () => void;
};

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  mode: "creative",
  setMode: (mode) => {
    try {
      window.localStorage.setItem("rkp-view-mode", mode);
    } catch {
      /* storage unavailable */
    }
    set({ mode });
  },
  toggleMode: () => get().setMode(get().mode === "creative" ? "resume" : "creative"),
  hydrated: false,
  hydrate: () => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem("rkp-view-mode");
    } catch {
      /* storage unavailable */
    }
    if (saved === "resume" || saved === "creative") set({ mode: saved, hydrated: true });
    else set({ hydrated: true });
  },
}));

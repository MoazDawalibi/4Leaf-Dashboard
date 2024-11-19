import { create } from "zustand";

interface ModalPageCycle {
  PageCycle: boolean;
  setPageCycle: (Key: boolean) => void;
}

export const PageCycleState = create<ModalPageCycle>((set) => ({
  PageCycle: false,
  setPageCycle: (Key) => set((PageCycle) => ({ PageCycle: Key })),
}));

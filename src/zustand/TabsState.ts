import { create } from "zustand";

interface ModalState {
  ActiveTab: string;
  setActiveTab: (Key: string) => void;
}

export const useTabsState = create<ModalState>((set) => ({
  ActiveTab: "1",
  setActiveTab: (Key) => set((state) => ({ ActiveTab: Key })),
}));

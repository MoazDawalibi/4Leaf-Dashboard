import { create } from "zustand";

interface ModalState {
  ActiveTab: number;
  setActiveTab: (Key: number) => void;
}

export const useModalTabsState = create<ModalState>((set) => ({
  ActiveTab: 0,
  setActiveTab: (Key) => set((state) => ({ ActiveTab: Key })),
}));

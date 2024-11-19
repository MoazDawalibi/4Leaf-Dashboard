import { create } from "zustand";

interface ModalState {
  Filter: any;
  setFilter: (data: any) => void;
}

export const useFilterStateState = create<ModalState>((set) => ({
  Filter: [],
  setFilter: (data) => set((state) => ({ Filter: data })),
}));

import { create } from "zustand";

interface DataTableState {
  DataTableLength: number;
  setDataTableLength: (Key: number) => void;
}

export const useDataTableState = create<DataTableState>((set) => ({
  DataTableLength: 0,
  setDataTableLength: (Key) => set((state) => ({ DataTableLength: Key })),
}));

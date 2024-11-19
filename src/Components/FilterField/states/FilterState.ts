import { create } from "zustand";

interface FilterState {
  filterState: any[];
  setFilterState: (data: any) => void;
  clearFilterState: () => void;
  setWithOldValue: (data: any) => void;
  setInitialValue: (data: any) => void;
}

export const useFilterState = create<FilterState>((set, get) => ({
  filterState: [],
  setFilterState: (data) => set(() => ({ filterState: data })),
  clearFilterState: () => set(() => ({ filterState: [] })),
  setWithOldValue: (data) =>
    set((state) => ({ filterState: [...state.filterState, data] })),
  setInitialValue: (data) => {
    if (get().filterState.length < 1) {
      set(() => ({ filterState: data }));
    }
  },
}));

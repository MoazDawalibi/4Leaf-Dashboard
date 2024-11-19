import { create } from "zustand";

interface FilterState {
  filterState: any;
  setFilterState: (data: any) => void;
  clearFilterState: () => void;
  setWithOldValue: (data: any) => void;
}

export const useFilterState = create<FilterState>((set, get) => ({
  filterState: {},
  setFilterState: (data) => set(() => ({ filterState: data })),
  clearFilterState: () => set(() => ({ filterState: [] })),
  setWithOldValue: (data) =>
    set((state) => ({ filterState: [...state.filterState, data] })),
}));

// import { create } from "zustand";

// interface FilterState {
//   filterState: any[];
//   setFilterState: (data: any) => void;
//   clearFilterState: () => void;
//   setWithOldValue: (data: any) => void;
//   setInitialValue: (data: any) => void;
//   setFilterStateWithFormat:(data:any)=>void
// }

// export const useFilterState = create<FilterState>((set, get) => ({
//   filterState: [],
//   setFilterState: (data) => set(() => ({ filterState: data })),
//   clearFilterState: () => set(() => ({ filterState: [] })),
//   setWithOldValue: (data) =>
//     set((state) => ({ filterState: [...state.filterState, data] })),
//   setInitialValue: (data) => {
//     if (get().filterState.length < 1) {
//       set(() => ({ filterState: data }));
//     }
//   },
//   // Inside your useFilterState store
//   setFilterStateWithFormat: (data:any) => {
//     const formatDate = (date:any) => {
//       if (!date) return null;
//       const d = new Date(date);
//       const year = d.getFullYear();
//       const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//       const day = String(d.getDate()).padStart(2, '0');
//       return `${year}-${month}-${day}`;
//     };

//     const formattedData = {
//       ...data,
//       starting_date: formatDate(data.starting_date),
//     };

//     set(() => ({ filterState: formattedData }));
//   },
// }));

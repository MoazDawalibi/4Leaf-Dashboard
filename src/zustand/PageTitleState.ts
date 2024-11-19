import { create } from "zustand";

interface PageTitleState {
  PageTitle: string;
  setPageTitle: (value: string) => void;
  title: string | null;
  set_title: (value: string) => void;
}

export const usePageTitleState = create<PageTitleState>((set) => ({
  PageTitle: "",
  setPageTitle: (value: string) => set(() => ({ PageTitle: value })),
  title: null,
  set_title: (value: string) => set(() => ({ title: value })),
}));

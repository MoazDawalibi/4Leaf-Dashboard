import { create } from "zustand";

interface ModalState {
  isOpenSideBar: boolean;
  setIsOpenSideBar: () => void;
}

export const usePageState = create<ModalState>((set) => ({
  isOpenSideBar: true,
  setIsOpenSideBar: () =>
    set((state) => ({ isOpenSideBar: !state.isOpenSideBar })),
}));

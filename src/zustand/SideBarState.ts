import { create } from "zustand";

interface ModalState {
  openSideBar: boolean;
  setOpenSideBar: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

export const useSideBarState = create<ModalState>((set) => ({
  openSideBar: true,
  setOpenSideBar: (value) =>
    set((state) => ({
      openSideBar:
        typeof value === "function" ? value(state.openSideBar) : value,
    })),
}));

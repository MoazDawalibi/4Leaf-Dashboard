import { create } from "zustand";
import { ModalEnum } from "../enums/Model";

interface LocationsState {
  PreLocation: string;
  setPreLocation: (value: string) => void;
}

export const useLocationsState = create<LocationsState>((set) => ({
  PreLocation: "",
  setPreLocation: (value: string) => set((state) => ({ PreLocation: value })),
}));

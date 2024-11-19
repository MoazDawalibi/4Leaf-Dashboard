import { create } from "zustand";

interface ValidationParamState {
  [key: string]: any;
}

interface ModalState {
  ValidationParamState: ValidationParamState;
  setValidationParamState: (validationParamState: ValidationParamState) => void;
  pushValidationParamState: (
    validationParamState: ValidationParamState,
  ) => void;
  clearValidationParamState: () => void;
}

export const useValidationValidationParamState = create<ModalState>((set) => ({
  ValidationParamState: {},

  setValidationParamState: (validationParamState) =>
    set(() => ({
      ValidationParamState: validationParamState,
    })),

  pushValidationParamState: (validationParamState) =>
    set((state) => ({
      ValidationParamState: {
        ...state.ValidationParamState,
        ...validationParamState,
      },
    })),

  clearValidationParamState: () =>
    set({
      ValidationParamState: {},
    }),
}));

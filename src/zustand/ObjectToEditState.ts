import { create } from "zustand";
import { LocalStorageEnum } from "../enums/LocalStorageEnum";

interface ModelState {
  objectToEdit: any;
  setObjectToEdit: (data: any) => void;
  OldObjectToEdit: any;
  setOldObjectToEdit: (data: any) => void;
  paramToSend: any;
  setParamToSend: (data: any) => void;
  TagsSearch: any;
  setTagsSearch: (data: any) => void;
  TagsQuery: any;
  setTagsQuery: (data: any) => void;
  currentTag: any;
  setCurrentTag: (data: any) => void;
  currentParentIndex: any;
  setCurrentParentIndex: (data: any) => void;
  isBseQuestion: boolean;
  setIsBseQuestion: (data: any) => void;
  Success: boolean;
  setSuccess: (data: any) => void;
  DeletedQuestions: any;
  setDeletedQuestions: (data: any) => void;

  SavedQuestionData: any;
  setSavedQuestionData: (data: any) => void;

  ShowHint: any;
  setShowHint: (data: any) => void;

  ShowLatexOption: any;
  setShowLatexOption: (data: any) => void;
}

export const useObjectToEdit = create<ModelState>((set) => ({
  objectToEdit: null,
  setObjectToEdit: (data) => set(() => ({ objectToEdit: data })),
  OldObjectToEdit: null,
  setOldObjectToEdit: (data) => set(() => ({ OldObjectToEdit: data })),
  paramToSend: {},
  setParamToSend: (data) => set(() => ({ paramToSend: data })),
  TagsSearch: null,
  setTagsSearch: (data) => set(() => ({ TagsSearch: data })),
  TagsQuery: null,
  setTagsQuery: (data) => set(() => ({ TagsQuery: data })),
  currentTag: null,
  setCurrentTag: (data) => set(() => ({ currentTag: data })),
  currentParentIndex: null,
  setCurrentParentIndex: (data) => set(() => ({ currentParentIndex: data })),
  isBseQuestion: false,
  setIsBseQuestion: (data) => set(() => ({ isBseQuestion: data })),
  Success: false,
  setSuccess: (data) => set(() => ({ Success: data })),
  DeletedQuestions: [],
  setDeletedQuestions: (data) => set(() => ({ DeletedQuestions: data })),
  SavedQuestionData: [],
  setSavedQuestionData: (data) => set(() => ({ SavedQuestionData: data })),
  ShowHint: localStorage?.getItem(LocalStorageEnum.HINT_INPUT) === "true",
  setShowHint: (data) => set(() => ({ ShowHint: data })),
  ShowLatexOption:
    localStorage?.getItem(LocalStorageEnum.LATEX_OPTION_INPUT) === "true",
  setShowLatexOption: (data) => set(() => ({ ShowLatexOption: data })),
}));

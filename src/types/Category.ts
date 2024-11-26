

import { Nullable } from "./App";

// Define the Category interface

export interface Category {
  id: number; 
  name: string; 
}

export interface InitialValues {
  id: number; 
  name: string; 
}

export type CategoryInitialValues = Partial<Nullable<InitialValues>>;


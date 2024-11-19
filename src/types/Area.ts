import { Nullable } from "./App";

// Define the Teacher interface

export interface Area {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
}

export interface InitialValues {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
}

export type AreaInitialValues = Partial<Nullable<InitialValues>>;

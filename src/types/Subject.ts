import { Nullable } from "./App";

// Define the Teacher interface

export interface Subject {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  icon: string; // URL of the user's icon
  grade_id: number;
}

export interface InitialValues {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  icon: string; // URL of the user's icon
  grade_id: number;
}

export type SubjectInitialValues = Partial<Nullable<InitialValues>>;

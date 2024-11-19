import { TermEnum } from "../enums/Term";
import { Nullable } from "./App";

// Define the type for the object
export interface Unit {
  curriculum_id: number;
  id: number; // Represents the student ID
  name: string; // Represents the student's name
  order: number; // Represents the order (could be for sorting)
  term: TermEnum; // Represents the term using the Term enum
}

export interface InitialValues {
  curriculum_id: number;
  id: number; // Represents the student ID
  name: string; // Represents the student's name
  order: number; // Represents the order (could be for sorting)
  term: TermEnum;
}

export type UnitInitialValues = Partial<Nullable<InitialValues>>;

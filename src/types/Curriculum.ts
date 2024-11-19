import { Nullable } from "./App";

// Define the Teacher interface

export interface InitialValues {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  icon: string; // URL of the user's icon
}
export type Curriculum = {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  icon: string; // URL of the user's icon
};
export type CurriculumInitialValues = Partial<Nullable<InitialValues>>;

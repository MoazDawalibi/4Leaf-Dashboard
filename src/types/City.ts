import { Nullable } from "./App";

// Define the Teacher interface

export interface City {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
}

export interface InitialValues {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
}

export type CityInitialValues = Partial<Nullable<InitialValues>>;

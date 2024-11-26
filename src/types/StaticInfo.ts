

import { Nullable } from "./App";

// Define the StaticInfo interface

export interface StaticInfo {
  id: number; 
  key: string; 
  value: string;
}

export interface InitialValues {
  id: number; 
  key: string; 
  value: string;
}

export type StaticInfoInitialValues = Partial<Nullable<InitialValues>>;


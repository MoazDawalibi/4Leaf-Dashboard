

import { Nullable } from "./App";

// Define the Users interface

export interface Users {
  id: number; 
  email: string;
  password: string;
  role_type:string;

}

export interface InitialValues {
  id: number; 
  email: string;
  password: string;
  role_type:string;
}

export type UsersInitialValues = Partial<Nullable<InitialValues>>;


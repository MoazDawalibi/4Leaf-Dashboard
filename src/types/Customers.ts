

import { Nullable } from "./App";

// Define the Customers interface

export interface Customers {
  id: number; 
  name: string;
  account_name:string;
  phone_number:number;
  note:string;
}

export interface InitialValues {
  id: number; 
  name: string; 
  account_name:string;
  phone_number:number;
  note:string;
}

export type CustomersInitialValues = Partial<Nullable<InitialValues>>;


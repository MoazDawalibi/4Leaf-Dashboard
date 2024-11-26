

import { Nullable } from "./App";

// Define the ShippingFees interface

export interface ShippingFees {
  id: number; 
  name: string; 
  price:number;
  image: string;
}

export interface InitialValues {
  id: number; 
  name: string;
  price:number;
  image: string;
}

export type ShippingFeesInitialValues = Partial<Nullable<InitialValues>>;


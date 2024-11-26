

import { Nullable } from "./App";

// Define the Shipment interface

export interface Shipment {
  id: number; 
  name: string; 
  start_date: any; 
  end_date: any; 
  status: string; 
  order_count: number; 
  product_count: number; 
  currency_price: number; 
  customer_currency_price: number; 
  shipping_fees_total_profit: number; 
  currency_profit: number; 
  total_profit: number; 
  total_price: number;
}

export interface InitialValues {
  id: number; 
  name: string;  
  start_date: any; 
  end_date: any; 
  status: string; 
  order_count: number; 
  product_count: number; 
  currency_price: number; 
  customer_currency_price: number; 
  shipping_fees_total_profit: number; 
  currency_profit: number; 
  total_profit: number; 
  total_price: number;
}

export type ShipmentInitialValues = Partial<Nullable<InitialValues>>;


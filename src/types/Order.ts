

import { Nullable } from "./App";

// Define the Order interface

export interface Order {
  shipments: any;
  customers: any;
  id: number; 
  status: string;
  customer_id:number;
  shipment_id:number | any;
  product_count: number; 
  shipping_fees_total_profit: number; 
  currency_profit: number; 
  total_profit: number; 
  total_price: number;
}

export interface InitialValues {
  id: number; 
  status: string;
  customer_id:number;
  shipment_id:number;
  product_count: number; 
  shipping_fees_total_profit: number; 
  currency_profit: number; 
  total_profit: number; 
  total_price: number;
}

export type OrderInitialValues = Partial<Nullable<InitialValues>>;


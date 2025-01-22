

import { Nullable } from "./App";

// Define the Product interface

export interface Product {
  shipping_fee: any;
  orders: any;
  id: number; 
  name: string; 
  order_id: number | any;
  shipping_fees: number;
  discount: number;
  product_quantity: number;
  price: number;
  product_options: any;
  price_with_currency?: number;
  price_with_quantity?: number;
  shipping_fee_id?:any

}

export interface InitialValues {
  id: number; 
  name: string; 
  order_id: number;
  shipping_fees: number;
  discount: number;
  product_quantity: number;
  price: number;
  product_options: any;
  price_with_currency?: number;
  price_with_quantity?: number;
  shipping_fee_id?:any
}

export type ProductInitialValues = Partial<Nullable<InitialValues>>;


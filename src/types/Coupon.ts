import { Nullable } from "./App";

// Define the Teacher interface

export interface InitialValues {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  amount: string; // URL of the user's amount
  due_to: any; // URL of the user's amount
  code: string; // URL of the user's amount
  grade_id: any; // URL of the user's amount
}
export type Coupon = {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  amount: string; // URL of the user's amount
  due_to: string; // URL of the user's amount
  code: string; // URL of the user's amount
  grade: string; // URL of the user's amount
  status: string;
};
export type CouponInitialValues = Partial<Nullable<InitialValues>>;

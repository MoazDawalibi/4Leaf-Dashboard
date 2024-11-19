import { Nullable } from "./App";

// Define the Teacher interface

interface ReSellerUser {
  id: number;
  username: string;
  phone_number: string | null;
  type: "reseller" | "other"; // Specify other types if needed
}

interface ReSellerLocation {
  lat: string;
  lng: string;
}

interface ContactInfo {
  contact_number1: string;
  contact_number2: string;
  card_number: string | null;
}

export interface ReSeller {
  id: number;
  user: ReSellerUser;
  first_name: string;
  last_name: string;
  location: ReSellerLocation;
  contact_info: ContactInfo;
  contact_number1: string | number;
  contact_number2: string | number;
}

export interface InitialValues {
  id: number;
  user: ReSellerUser;
  first_name: string;
  last_name: string;
  location: ReSellerLocation;
  lat: string | Number;
  lng: string | Number;
  contact_info: ContactInfo;
  contact_number1: string | number;
  contact_number2: string | number;
  username: string;
}

export type ReSellerInitialValues = Partial<Nullable<InitialValues>>;

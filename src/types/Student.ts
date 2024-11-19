import { DateType, Nullable } from "./App";

// Define the Teacher interface

export interface Student {
  first_name: string; // The first name of the user
  last_name: string; // The last name of the user
  city: string | null; // The city of the user, can be null
  sex: string; // The sex of the user, using a union type for possible values
  image: string | null; // The URL of the user's image, can be null
  address: string | null; // The address of the user, can be null
  card: string | null; // The card information, can be null
  birthday: DateType; // The birthday of the user, can be null
  grade_id: number | string; // The ID of the user's grade
  user_id: number; // The unique ID of the user
}

export interface InitialValues {
  id: number;
  first_name: string; // The first name of the user
  last_name: string; // The last name of the user
  city: string | null; // The city of the user, can be null
  sex: string; // The sex of the user, using a union type for possible values
  image: string | null; // The URL of the user's image, can be null
  address: string | null; // The address of the user, can be null
  card: string | null; // The card information, can be null
  birthday: DateType; // The birthday of the user, can be null
  grade_id: number | string; // The ID of the user's grade
  user_id: number; // The unique ID of the user
}

export type StudentInitialValues = Partial<Nullable<InitialValues>>;

import { Nullable } from "./App";

// Define the Teacher interface

export interface Notification {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  title: string;
  body: string;
  seen: string;
  notifiable_type: string;
  created_at: string;
}

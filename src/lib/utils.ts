import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Location {
  id: string;
  street_address: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  landmark: string;
  created_at: string; // ISO date string
}

// Rating type (assuming this is what 'ratings' would contain when not null)
interface Rating {
  id: string;
  user_id: string;
  vendor_id: string;
  overall_rating: number;
  hygiene_rating: number;
  value_rating: number;
  taste_rating: number;
  service_rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
}

// Main Vendor type definition
export interface Vendor {
  id: string;
  name: string;
  location_id: string;
  location: Location;
  description: string;
  operating_hours: string;
  image_url: string;
  phone_number: string;
  is_verified: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  average_rating: number;
  average_hygiene_rating: number;
  average_value_rating: number;
  average_taste_rating: number;
  average_service_rating: number;
  ratings: Rating[] | null;
}

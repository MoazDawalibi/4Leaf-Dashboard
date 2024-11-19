import * as Yup from "yup";
import { objectToKeyValueArray } from "../../../../../utils/objectToKeyValueArray";

interface Location {
  lat: number;
  lng: number;
}
interface User {
  username: string;
  phone_number?: number;
  type?: string;
}

interface PersonalDetailsForm {
  id: number;
  first_name: string | null;
  last_name: string | null;
  location: Location[];
  contact_number1: string | null;
  contact_number2: string | null;
  card_number: string | null;
  username: string | null;
  password: string | null;
  area_id: number | null;
  lat: number;
  lng: number;
}

interface PersonalDetailsEditForm {
  id: number;
  first_name: string | null;
  last_name: string | null;
  location: Location[];
  contact_number1: string | null;
  contact_number2: string | null;
  card_number: string | null;
  user: User;
  area_id: any | null;
  lat: number;
  lng: number;
}

export const getInitialValues = (
  objectToEdit: Partial<PersonalDetailsForm>,
) => {
  const location = objectToEdit?.location?.[0] || {
    lat: 33.5138,
    lng: 36.2765,
  };

  return {
    id: objectToEdit?.id ?? 0,
    first_name: objectToEdit?.first_name ?? null,
    last_name: objectToEdit?.last_name ?? null,
    location_lat: location.lat,
    location_lng: location.lng,
    contact_number1: objectToEdit?.contact_number1 ?? null,
    contact_number2: objectToEdit?.contact_number2 ?? null,
    card_number: objectToEdit?.card_number ?? null,
    username: objectToEdit?.username ?? null,
    password: objectToEdit?.password ?? null,
    area_id: objectToEdit?.area_id ?? null,
    lat: location.lat ?? 33.5138,
    lng: location.lng ?? 36.2765,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    id: Yup.number().required(),
    first_name: Yup.string().required("first_name is required"),
    last_name: Yup.string().required("last_name is required"),
    location_lat: Yup.string().required("lat is required"),
    location_lng: Yup.string().required("lng is required"),
    contact_number1: Yup.string().required("contact_number1 is required"),
    contact_number2: Yup.string().required("contact_number2 is required"),
    username: Yup.string().required("username is required"),
    area_id: Yup.mixed().required("area_id is required"),
  });
};

export const getInitialValuesEdit = (
  objectToEdit: Partial<PersonalDetailsEditForm>,
) => {
  const location = objectToEdit?.location || { lat: 0, lng: 0 };

  return {
    id: objectToEdit?.id ?? 0,
    first_name: objectToEdit?.first_name ?? null,
    last_name: objectToEdit?.last_name ?? null,
    location_lat: location.lat,
    location_lng: location.lng,
    contact_number1: objectToEdit?.contact_number1 ?? null,
    contact_number2: objectToEdit?.contact_number2 ?? null,
    card_number: objectToEdit?.card_number ?? null,
    username: objectToEdit?.user?.username ?? null,
    area_id: objectToEdit?.area_id ?? null,
  };
};

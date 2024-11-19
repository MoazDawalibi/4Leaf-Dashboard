import { ReactElement, LazyExoticComponent, ReactNode } from "react";
import { Mark_State, Payment_type, term_type } from "./Item";
import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from "../enums/abilities";
import dayjs from "dayjs";
import { UserTypeEnum } from "../enums/UserType";

export type ChildrenType = {
  children: ReactNode;
};

type TMenuItemBase = {
  icon: JSX.Element;
  text: string;
  header?: string;
  title?: string;
  withOutLayout?: boolean;
  abilities: ABILITIES_ENUM;
  abilities_value: ABILITIES_VALUES_ENUM;
  type?: UserTypeEnum;
  prevPath: number;
};

type TMenuItemWithDropdown = TMenuItemBase & {
  path: string;
  element?: ReactElement | LazyExoticComponent<any>;
  children: TMenuItem[];
};

type TMenuItemWithoutDropdown = TMenuItemBase & {
  path: string;
  element: ReactElement | LazyExoticComponent<any>;
  children?: TMenuItem[];
};

export type TMenuItem = TMenuItemWithDropdown | TMenuItemWithoutDropdown;

export type TCrudRoute = {
  header?: string;
  path: string;
  element: ReactElement | LazyExoticComponent<any>;
  abilities: ABILITIES_ENUM;
  abilities_value: ABILITIES_VALUES_ENUM;
  type?: UserTypeEnum;
  prevPath: number;
};

export interface CardData {
  title: string;
  value: string;
  subTitle: string;
  percentage: number;
  Good?: boolean;
}
export const nationalities: { id: string; name: string }[] = [
  { name: "select.nationalities.Afghan", id: "Afghan" },
  { name: "select.nationalities.Albanian", id: "Albanian" },
  { name: "select.nationalities.Algerian", id: "Algerian" },
  { name: "select.nationalities.American", id: "American" },
  { name: "select.nationalities.Andorran", id: "Andorran" },
  { name: "select.nationalities.Angolan", id: "Angolan" },
  { name: "select.nationalities.Antiguans", id: "Antiguans" },
  { name: "select.nationalities.Argentinean", id: "Argentinean" },
  { name: "select.nationalities.Armenian", id: "Armenian" },
  { name: "select.nationalities.Australian", id: "Australian" },
  { name: "select.nationalities.Austrian", id: "Austrian" },
  { name: "select.nationalities.Azerbaijani", id: "Azerbaijani" },
  { name: "select.nationalities.Bahamian", id: "Bahamian" },
  { name: "select.nationalities.Bahraini", id: "Bahraini" },
  { name: "select.nationalities.Bangladeshi", id: "Bangladeshi" },
  { name: "select.nationalities.Barbadian", id: "Barbadian" },
  { name: "select.nationalities.Barbudans", id: "Barbudans" },
  { name: "select.nationalities.Batswana", id: "Batswana" },
  { name: "select.nationalities.Belarusian", id: "Belarusian" },
  { name: "select.nationalities.Belgian", id: "Belgian" },
  { name: "select.nationalities.Belizean", id: "Belizean" },
  { name: "select.nationalities.Beninese", id: "Beninese" },
  { name: "select.nationalities.Bhutanese", id: "Bhutanese" },
  { name: "select.nationalities.Bolivian", id: "Bolivian" },
  { name: "select.nationalities.Bosnian", id: "Bosnian" },
  { name: "select.nationalities.Brazilian", id: "Brazilian" },
  { name: "select.nationalities.British", id: "British" },
  { name: "select.nationalities.Bruneian", id: "Bruneian" },
  { name: "select.nationalities.Bulgarian", id: "Bulgarian" },
  { name: "select.nationalities.Burkinabe", id: "Burkinabe" },
  { name: "select.nationalities.Burmese", id: "Burmese" },
  { name: "select.nationalities.Burundian", id: "Burundian" },
  { name: "select.nationalities.Cambodian", id: "Cambodian" },
  { name: "select.nationalities.Cameroonian", id: "Cameroonian" },
  { name: "select.nationalities.Canadian", id: "Canadian" },
  { name: "select.nationalities.Cape Verdean", id: "Cape Verdean" },
  { name: "select.nationalities.Central African", id: "Central African" },
  { name: "select.nationalities.Chadian", id: "Chadian" },
  { name: "select.nationalities.Chilean", id: "Chilean" },
  { name: "select.nationalities.Chinese", id: "Chinese" },
  { name: "select.nationalities.Colombian", id: "Colombian" },
  { name: "select.nationalities.Comoran", id: "Comoran" },
  { name: "select.nationalities.Congolese", id: "Congolese" },
  { name: "select.nationalities.Costa Rican", id: "Costa Rican" },
  { name: "select.nationalities.Croatian", id: "Croatian" },
  { name: "select.nationalities.Cuban", id: "Cuban" },
  { name: "select.nationalities.Cypriot", id: "Cypriot" },
  { name: "select.nationalities.Czech", id: "Czech" },
  { name: "select.nationalities.Danish", id: "Danish" },
  { name: "select.nationalities.Djibouti", id: "Djibouti" },
  { name: "select.nationalities.Dominican", id: "Dominican" },
  { name: "select.nationalities.Dutch", id: "Dutch" },
  { name: "select.nationalities.East Timorese", id: "East Timorese" },
  { name: "select.nationalities.Ecuadorean", id: "Ecuadorean" },
  { name: "select.nationalities.Egyptian", id: "Egyptian" },
  { name: "select.nationalities.Emirian", id: "Emirian" },
  {
    name: "select.nationalities.Equatorial Guinean",
    id: "Equatorial Guinean",
  },
  { name: "select.nationalities.Eritrean", id: "Eritrean" },
  { name: "select.nationalities.Estonian", id: "Estonian" },
  { name: "select.nationalities.Ethiopian", id: "Ethiopian" },
  { name: "select.nationalities.Fijian", id: "Fijian" },
  { name: "select.nationalities.Filipino", id: "Filipino" },
  { name: "select.nationalities.Finnish", id: "Finnish" },
  { name: "select.nationalities.French", id: "French" },
  { name: "select.nationalities.Gabonese", id: "Gabonese" },
  { name: "select.nationalities.Gambian", id: "Gambian" },
  { name: "select.nationalities.Georgian", id: "Georgian" },
  { name: "select.nationalities.German", id: "German" },
  { name: "select.nationalities.Ghanaian", id: "Ghanaian" },
  { name: "select.nationalities.Greek", id: "Greek" },
  { name: "select.nationalities.Grenadian", id: "Grenadian" },
  { name: "select.nationalities.Guatemalan", id: "Guatemalan" },
  { name: "select.nationalities.Guinea-Bissauan", id: "Guinea-Bissauan" },
  { name: "select.nationalities.Guinean", id: "Guinean" },
  { name: "select.nationalities.Guyanese", id: "Guyanese" },
  { name: "select.nationalities.Haitian", id: "Haitian" },
  { name: "select.nationalities.Herzegovinian", id: "Herzegovinian" },
  { name: "select.nationalities.Honduran", id: "Honduran" },
  { name: "select.nationalities.Hungarian", id: "Hungarian" },
  { name: "select.nationalities.I-Kiribati", id: "I-Kiribati" },
  { name: "select.nationalities.Icelander", id: "Icelander" },
  { name: "select.nationalities.Indian", id: "Indian" },
  { name: "select.nationalities.Indonesian", id: "Indonesian" },
  { name: "select.nationalities.Iranian", id: "Iranian" },
  { name: "select.nationalities.Iraqi", id: "Iraqi" },
  { name: "select.nationalities.Irish", id: "Irish" },
  { name: "select.nationalities.Palestine", id: "Palestine" },
  { name: "select.nationalities.Italian", id: "Italian" },
  { name: "select.nationalities.Ivorian", id: "Ivorian" },
  { name: "select.nationalities.Jamaican", id: "Jamaican" },
  { name: "select.nationalities.Japanese", id: "Japanese" },
  { name: "select.nationalities.Jordanian", id: "Jordanian" },
  { name: "select.nationalities.Kazakhstani", id: "Kazakhstani" },
  { name: "select.nationalities.Kenyan", id: "Kenyan" },
  {
    name: "select.nationalities.Kittian and Nevisian",
    id: "Kittian and Nevisian",
  },
  { name: "select.nationalities.Kuwaiti", id: "Kuwaiti" },
  { name: "select.nationalities.Kyrgyz", id: "Kyrgyz" },
  { name: "select.nationalities.Laotian", id: "Laotian" },
  { name: "select.nationalities.Latvian", id: "Latvian" },
  { name: "select.nationalities.Lebanese", id: "Lebanese" },
  { name: "select.nationalities.Liberian", id: "Liberian" },
  { name: "select.nationalities.Libyan", id: "Libyan" },
  { name: "select.nationalities.Liechtensteiner", id: "Liechtensteiner" },
  { name: "select.nationalities.Lithuanian", id: "Lithuanian" },
  { name: "select.nationalities.Luxembourger", id: "Luxembourger" },
  { name: "select.nationalities.Macedonian", id: "Macedonian" },
  { name: "select.nationalities.Malagasy", id: "Malagasy" },
  { name: "select.nationalities.Malawian", id: "Malawian" },
  { name: "select.nationalities.Malaysian", id: "Malaysian" },
  { name: "select.nationalities.Maldivan", id: "Maldivan" },
  { name: "select.nationalities.Malian", id: "Malian" },
  { name: "select.nationalities.Maltese", id: "Maltese" },
  { name: "select.nationalities.Marshallese", id: "Marshallese" },
  { name: "select.nationalities.Mauritanian", id: "Mauritanian" },
  { name: "select.nationalities.Mauritian", id: "Mauritian" },
  { name: "select.nationalities.Mexican", id: "Mexican" },
  { name: "select.nationalities.Micronesian", id: "Micronesian" },
  { name: "select.nationalities.Moldovan", id: "Moldovan" },
  { name: "select.nationalities.Monacan", id: "Monacan" },
  { name: "select.nationalities.Mongolian", id: "Mongolian" },
  { name: "select.nationalities.Moroccan", id: "Moroccan" },
  { name: "select.nationalities.Mosotho", id: "Mosotho" },
  { name: "select.nationalities.Motswana", id: "Motswana" },
  { name: "select.nationalities.Mozambican", id: "Mozambican" },
  { name: "select.nationalities.Namibian", id: "Namibian" },
  { name: "select.nationalities.Nauruan", id: "Nauruan" },
  { name: "select.nationalities.Nepali", id: "Nepali" },
  { name: "select.nationalities.New Zealander", id: "New Zealander" },
  { name: "select.nationalities.Nicaraguan", id: "Nicaraguan" },
  { name: "select.nationalities.Nigerian", id: "Nigerian" },
  { name: "select.nationalities.Nigerien", id: "Nigerien" },
  { name: "select.nationalities.North Korean", id: "North Korean" },
  { name: "select.nationalities.Northern Irish", id: "Northern Irish" },
  { name: "select.nationalities.Norwegian", id: "Norwegian" },
  { name: "select.nationalities.Omani", id: "Omani" },
  { name: "select.nationalities.Pakistani", id: "Pakistani" },
  { name: "select.nationalities.Palauan", id: "Palauan" },
  { name: "select.nationalities.Panamanian", id: "Panamanian" },
  {
    name: "select.nationalities.Papua New Guinean",
    id: "Papua New Guinean",
  },
  { name: "select.nationalities.Paraguayan", id: "Paraguayan" },
  { name: "select.nationalities.Peruvian", id: "Peruvian" },
  { name: "select.nationalities.Polish", id: "Polish" },
  { name: "select.nationalities.Portuguese", id: "Portuguese" },
  { name: "select.nationalities.Qatari", id: "Qatari" },
  { name: "select.nationalities.Romanian", id: "Romanian" },
  { name: "select.nationalities.Russian", id: "Russian" },
  { name: "select.nationalities.Rwandan", id: "Rwandan" },
  { name: "select.nationalities.Saint Lucian", id: "Saint Lucian" },
  { name: "select.nationalities.Salvadoran", id: "Salvadoran" },
  { name: "select.nationalities.Samoan", id: "Samoan" },
  { name: "select.nationalities.San Marinese", id: "San Marinese" },
  { name: "select.nationalities.Sao Tomean", id: "Sao Tomean" },
  { name: "select.nationalities.Saudi", id: "Saudi" },
  { name: "select.nationalities.Scottish", id: "Scottish" },
  { name: "select.nationalities.Senegalese", id: "Senegalese" },
  { name: "select.nationalities.Serbian", id: "Serbian" },
  { name: "select.nationalities.Seychellois", id: "Seychellois" },
  { name: "select.nationalities.Sierra Leonean", id: "Sierra Leonean" },
  { name: "select.nationalities.Singaporean", id: "Singaporean" },
  { name: "select.nationalities.Slovakian", id: "Slovakian" },
  { name: "select.nationalities.Slovenian", id: "Slovenian" },
  { name: "select.nationalities.Solomon Islander", id: "Solomon Islander" },
  { name: "select.nationalities.Somali", id: "Somali" },
  { name: "select.nationalities.South African", id: "South African" },
  { name: "select.nationalities.South Korean", id: "South Korean" },
  { name: "select.nationalities.Spanish", id: "Spanish" },
  { name: "select.nationalities.Sri Lankan", id: "Sri Lankan" },
  { name: "select.nationalities.Sudanese", id: "Sudanese" },
  { name: "select.nationalities.Surinamer", id: "Surinamer" },
  { name: "select.nationalities.Swazi", id: "Swazi" },
  { name: "select.nationalities.Swedish", id: "Swedish" },
  { name: "select.nationalities.Swiss", id: "Swiss" },
  { name: "select.nationalities.Syrian", id: "Syrian" },
  { name: "select.nationalities.Taiwanese", id: "Taiwanese" },
  { name: "select.nationalities.Tajik", id: "Tajik" },
  { name: "select.nationalities.Tanzanian", id: "Tanzanian" },
  { name: "select.nationalities.Thai", id: "Thai" },
  { name: "select.nationalities.Togolese", id: "Togolese" },
  { name: "select.nationalities.Tongan", id: "Tongan" },
  {
    name: "select.nationalities.Trinidadian/Tobagonian",
    id: "Trinidadian/Tobagonian",
  },
  { name: "select.nationalities.Tunisian", id: "Tunisian" },
  { name: "select.nationalities.Turkish", id: "Turkish" },
  { name: "select.nationalities.Tuvaluan", id: "Tuvaluan" },
  { name: "select.nationalities.Ugandan", id: "Ugandan" },
  { name: "select.nationalities.Ukrainian", id: "Ukrainian" },
  { name: "select.nationalities.Uruguayan", id: "Uruguayan" },
  { name: "select.nationalities.Uzbekistani", id: "Uzbekistani" },
  { name: "select.nationalities.Venezuelan", id: "Venezuelan" },
  { name: "select.nationalities.Vietnamese", id: "Vietnamese" },
  { name: "select.nationalities.Welsh", id: "Welsh" },
  { name: "select.nationalities.Yemenite", id: "Yemenite" },
  { name: "select.nationalities.Zambian", id: "Zambian" },
  { name: "select.nationalities.Zimbabwean", id: "Zimbabwean" },
];

export const Term_Select: { value: term_type; label: string }[] = [
  { value: "first", label: "الأول" },
  { value: "second", label: "الثاني" },
];

interface Note {
  label: string;
  value: string;
  color: string;
}

export const notes: Note[] = [
  { label: "select.Note.normal_note", value: "normal_note", color: "yellow" }, // Normal Note
  { label: "select.Note.alert_note", value: "alert_note", color: "yellow" }, // Alert Note
  {
    label: "select.Note.financial_note",
    value: "financial_note",
    color: "yellow",
  }, // Financial Note
  {
    label: "select.Note.positive_note",
    value: "positive_note",
    color: "green",
  }, // Positive Note
  { label: "select.Note.warning_note", value: "warning_note", color: "red" }, // Warning Note
  {
    label: "select.Note.academic_note",
    value: "academic_note",
    color: "yellow",
  }, // Academic Note
  {
    label: "select.Note.studying_note",
    value: "studying_note",
    color: "yellow",
  }, // Studying Note
  {
    label: "select.Note.organization_note",
    value: "orgnaization_note",
    color: "yellow",
  }, // Organization Note
];

export const Payments: { label: string; value: Payment_type | "" }[] = [
  { label: "select.Payments.paid", value: "paid" },
  { label: "select.Payments.to_be_paid", value: "to_be_paid" },
];

export const Marks: { value: Mark_State; label: string }[] = [
  { value: "Not_Taken", label: "Not_Taken" },
  { value: "Taken", label: "Taken" },
];

export type Sex = "male" | "female" | "bi";

export const Sex_Select_options: { value: Sex; label: string }[] = [
  { value: "male", label: "select.Sex.male" },
  { value: "female", label: "select.Sex.female" },
  { value: "bi", label: "select.Sex.bi" },
];

export const Sex_Select_options_Student: { value: Sex; label: string }[] = [
  { value: "male", label: "select.Sex.male" },
  { value: "female", label: "select.Sex.female" },
];

export type religion = "muslim" | "christianity" | "other";

export const religion_Select_options: { value: religion; label: string }[] = [
  { value: "muslim", label: "select.Religion.muslim" },
  { value: "christianity", label: "select.Religion.christianity" },
  { value: "other", label: "select.Religion.other" },
];

export interface Branch {
  id: number;
  name: string;
  address: string;
  meta: {
    test: number;
  };
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
}

export interface Role {
  id: number;
  name: string;
}

export interface Cycle {
  id: number;
  starting_date: string; // ISO 8601 date string
  ending_date: string; // ISO 8601 date string
  branch_id: number;
  name: string;
  status: string; // Consider using a string literal type for status if it has specific values
}

export interface Term {
  id: number;
  cycle_id: number;
  ending_date: string; // ISO 8601 date string
  starting_date: string; // ISO 8601 date string
  term_type: term_type;
  description: string | null;
  current_term: boolean;
}

export const Term_type: { value: term_type; label: string }[] = [
  { value: "first", label: "select.Term_type.first" },
  { value: "second", label: "select.Term_type.second" },
  { value: "summer", label: "select.Term_type.summer" },
  { value: "extra", label: "select.Term_type.extra" },
];

export interface Ability {
  id: number;
  name: string;
}
export type admin_type = "admin" | "branchAdmin";
export type active_type = "active" | "suspend";

export interface Admin {
  id: number;
  username: string;
  email: string;
  type: admin_type; // Update the types as needed
  status: active_type; // Update the statuses as needed
  shouldRechangePassword: boolean;
  created_at: string;
  updated_at: string;
}

export const Admin_type: { value: admin_type; label: string }[] = [
  { value: "admin", label: "select.Admin_type.admin" },
  { value: "branchAdmin", label: "select.Admin_type.branchAdmin" },
];

export interface BranchRole {
  role: Role;
  branch: Branch;
}

export interface showAdmin {
  user: Admin;
  branches: BranchRole[];
}
export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type DateType = string | dayjs.Dayjs | null | undefined;

export interface CourseItem {
  id: number;
  name: string;
  price: number;
  student_count: number;
}
export interface Item {
  id: number;
  name: string;
}
export interface EduClassItem {
  id: number;
  name: string;
  price: number;
  students_count: number;
  cycle_id: number;
  course_id: number;
  sex: string;
  room_id: number;
  meta: string;
}

export interface Lesson {
  id: number;
  name: string;
  description: string | null;
  unit_id: number;
}
export type term_type = "first" | "second" | "extra" | "summer";

export interface Unit {
  id: number;
  name: string;
  description: string | null;
  subject_id: number;
  term: term_type;
  lessons_count: number;
  lessons: Lesson[];
}

export interface ContactInformation {
  phone_number: string;
}

export interface Teacher {
  id: number;
  name: string;
  contact_information: ContactInformation;
  address: string | null;
}

interface earlyDeparture {
  id: number;
  type: "justified" | "not_justified"; // Define the possible values for type
  date: string;
  registration_record_id: number;
  justification: string;
  departure_time: string;
  attachment: string | null;
  term_id: number;
}
export interface homeWork {
  id?: string | null;
  title?: string | null;
  content?: string | null;
  homeworkable_type?: string | null;
  homeworkable_id?: string | null;
  due_date?: string | null;
  assigning_date?: string | null;
  subject_id?: string | null;
  teacher_id?: string | null;
  edu_class_id?: string | null;
  attachments?: string[] | null;
}

export interface Student {
  id: number;
  user: {
    id: number;
    username: string;
    email: string;
    type: string;
    status: string;
    created_at: string;
    updated_at: string;
  };
  parent_id: null | number;
  notes: null | string;
  image: null | string;
  nationality: string;
  birth_place: string;
  sex: "male" | "female" | "other";
  address: string;
  birthday: string; // Assuming this is in ISO 8601 format (YYYY-MM-DD)
  phone_number_1: null | string;
  phone_number_2: null | string;
  mother_name: string;
  father_name: string;
  last_name: string;
  first_name: string;
  full_name: string;
  religion: string;
  father_job: string;
  mother_job: string;
  mother_phone_number: string;
  father_phone_number: string;
  edu_class: {
    id: number;
    name: string;
    cycle_id: number;
    course_id: number;
    students_count: number;
    sex: "male" | "female" | "other";
    room_id: null | number;
    meta: null | any; // Adjust the type according to the actual data structure
    created_at: string;
    updated_at: string;
  };
  course: {
    id: number;
    name: string;
    price: number;
    created_at: string;
    updated_at: string;
    student_count: number;
  };
  absence: {
    justified: number;
    not_justified: number;
    total: number;
  };
  ealryDeparture: {
    justified: number;
    not_justified: number;
    total: number;
  };
  lateArrival: {
    justified: number;
    not_justified: number;
    total: number;
  };
  positiveNote: number;
  warningNote: number;
  alertNote: number;
  registration_record_id: number;
  registration_record_status: string;
}

export interface Absence {
  id: number;
  registration_record_id: number;
  type: string;
  term_id: number;
  justification: string;
  date: string;
  attachment: any;
  created_at: string;
  updated_at: string;
}

export interface EarlyDeparture {
  id: number;
  registration_record_id: number;
  type: string;
  term_id: number;
  justification: string;
  date: string;
  attachment: any;
  created_at: string;
  updated_at: string;
}

export interface LateArrival {
  id: number;
  registration_record_id: number;
  type: string;
  term_id: number;
  justification: string;
  date: string;
  attachment: any;
  created_at: string;
  updated_at: string;
}

export interface Presence {
  date: string;
  Absence: Absence[] | [];
  LateArrival: LateArrival[] | [];
  EarlyDeparture: EarlyDeparture[] | [];
}

export type Cycle = {
  value: number;
  label: string;
  id: number;
  starting_date: string;
  ending_date: string;
  branch_id: number;
  name: string;
  status: "active" | "inactive"; // Assuming status can only be 'active' or 'inactive'
};

export type Payment_type = "paid" | "to_be_paid";

export interface User {
  id: number;
  username: string;
  email: string;
  email_verified_at: string | null;
  type: string;
  status: string;
  date: string | null;
  created_at: string;
  updated_at: string;
}

interface Student_show {
  id: number;
  user_id: number;
  parent_id: number | null;
  notes: string;
  image: string;
  nationality: string;
  birth_place: string;
  sex: string;
  address: string;
  birthday: string;
  phone_number_2: string;
  phone_number_1: string;
  mother_name: string;
  father_name: string;
  last_name: string;
  first_name: string;
  full_name: string;
  user: User;
}

export interface Payment {
  id: number;
  value: string;
  type: "to_be_paid" | "paid";
  registration_record_id: number;
  student: Student_show;
  receipt_number: string;
  date: string;
  details: string;
}

export type Mark_State = "Taken" | "Not_Taken";
export interface Mark {
  id: number;
  mark_id: number;
  registration_record_id: number;
  value: string;
  note: string | null;
  state: Mark_State;
  created_at: string;
  updated_at: string;
  student_name: string;
}

export interface Exam {
  date: string;
  duration: number;
  edu_class_id: number;
  exam_type_id: number;
  grade_to_pass: string;
  id: number;
  max_grade: string;
  subject: Subject;
  taken_student_count: number;
  term_id: number;
  title: string;
  total_student_count: number;
}
export interface Subject {
  id: number;
  name: string;
  image: string | null; // Assuming image is a string or null
}

export type Exercise = {};

export type Choice = {
  name: string;
};

export type tags = {
  id: number;
  key?: number;
  name: string;
  exercise_id: number;
};

export interface QuestionOption {
  id: number;
  question_id: number;
  answer: string;
  answer_image: string | null;
  isCorrect: number;
}

export interface Question {
  QuestionOptions: never[];
  id: number;
  subject_id: number;
  parent_id: number;
  isBase: number;
  content: string;
  canAnswersBeShuffled: number;
  max_mark: number;
  min_mark_to_pass: number;
  content_image: string | null;
  Questions?: any[];
  question_options_count?: any;
  answers: QuestionOption[];
  hint?: string;
  tags: tags[];
  lessons: any;
  meta?: {};
}

export type user = {
  id: number;
  key?: number;
  name: string;
};

export type reseller = {
  id: number;
  key?: number;
  name: string;
};

export type param = {
  id: number;
  key?: number;
  value: string;
};

export type Student_Package = {
  id: number;
  student: student;
  expiration_date: string;
  activation_date: string;
};

type student = {
  first_name: string;
  last_name: string;
  sex: string;
};

export type Sales = {
  id: number;
  student: student;
  expiration_date: string;
  activation_date: string;
};

export type Collection = {
  id: number;
  amount: student;
  date: string;
  description: string;
};

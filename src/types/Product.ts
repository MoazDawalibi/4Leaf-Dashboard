export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: string;
  is_published: number;
  image: string;
  categories: TCategory;
};

export type TCategory = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  image: string;
};

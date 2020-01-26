export interface Product {
  _id: string;
  category: string;
  name: string;
  image: string;
  manufacturer: string;
  purpose?: string;
  version?: string;
  season?: string;
  fit?: string;
  for: string;
  material: string;
  description: string;
  price: number;
  size: string[];
}

export interface Prod {
  _id: string;
  name: string;
  image: string;
}

export interface CategoriesForHome {
  shirtsTops: Prod[];
  shortsPants: Prod[];
  jacketsVests: Prod[];
  shoes: Prod[];
  gloves: Prod[];
}

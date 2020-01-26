export  interface Category {
  name: string;
  checked: boolean;
}

export interface Filters {
  manufacturer: Category[];
  season?: Category[];
  for: Category[];
  material: Category[];
  size: Category[];
  purpose?: Category[];
  version?: Category[];
}

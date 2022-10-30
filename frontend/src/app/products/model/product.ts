import { Category } from './../../categories/model/category';
export interface Product {
  id: string;
  name: string;
  serie: number;
  price: number;
  category_id: number;
  category?: Category;
}

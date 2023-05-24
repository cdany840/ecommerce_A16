import { Category } from "./category"

export interface Subcategories {
    _id:         string;
    subcategory: string;
    category: Category[];
}
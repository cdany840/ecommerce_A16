export interface Products {
    _id:         string;
    name:        string;
    price:       number;
    old_price:   number;
    discount:    number;
    description: string;
    quantity:    number;
    stock:       number;
    sku:         string;
    slug:        string;
    specs:       string[];
    images:      string[];
    category:    string[];
    subcategory: string[];
}
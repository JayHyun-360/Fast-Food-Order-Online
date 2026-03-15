export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Burgers' | 'Chicken' | 'Sides' | 'Rice Meals' | 'Beverages' | 'Desserts' | 'Combos';
  image: string;
  tags?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  dealPrice: number;
  image: string;
  expiresAt?: string;
}

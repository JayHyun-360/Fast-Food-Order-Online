import { MenuItem, Deal } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'Dulohan Ultimate Burger',
    description: 'Double beef patty, melted cheddar, caramelized onions, and our secret Dulohan sauce.',
    price: 185,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    tags: ['BESTSELLER']
  },
  {
    id: 'c1',
    name: 'Crispy Sarap Chicken (2pc)',
    description: 'Our signature 24-hour marinated fried chicken, served with gravy and rice.',
    price: 165,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    tags: ['BESTSELLER']
  },
  {
    id: 'r1',
    name: 'Sizzling Sisig Rice Bowl',
    description: 'Authentic Kapampangan sisig served on a bed of garlic rice with egg.',
    price: 145,
    category: 'Rice Meals',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800',
    tags: ['NEW']
  },
  {
    id: 's1',
    name: 'Kamote Fries',
    description: 'Sweet potato fries seasoned with our special spice blend.',
    price: 65,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573016608244-7d5618d9fe5d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd1',
    name: 'Ube Leche Flan Shake',
    description: 'Creamy ube shake topped with a generous slice of leche flan.',
    price: 120,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    tags: ['BESTSELLER']
  }
];

export const DEALS: Deal[] = [
  {
    id: 'deal1',
    title: 'Barkada Bundle',
    description: '4 Burgers, 4 Drinks, and 2 Large Sides. Perfect for the crew!',
    originalPrice: 850,
    dealPrice: 699,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'deal2',
    title: 'Solo Sizzle',
    description: '1 Chicken Meal + 1 Drink + 1 Side. Save 20%!',
    originalPrice: 240,
    dealPrice: 189,
    image: 'https://images.unsplash.com/photo-1527335420221-1c057e1c4835?auto=format&fit=crop&q=80&w=800'
  }
];

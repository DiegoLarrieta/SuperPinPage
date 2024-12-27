// src/data/Products.ts
import { 
  SpinADN, 
  Spin6, 
  SpinBeSmall, 
  SpinBeBig,
  Spin76main,
  Spin95main,
} from "../assets/images";

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  stars:number;
  reviews:number;
  quantity: number; // Nueva propiedad


}

const products: Product[] = [
  {
    id: "1", // Unique ID for each product
    name: "SuperPin 9.5mm",
    price: 699,
    images: [Spin95main,  SpinBeBig, SpinADN],
    description: "The perfect pin for your weight stack. Durable and easy to use.",
    stars : 5,
    reviews: 86,
    quantity:1,

  },
  {
    id: "2",
    name: "SuperPin 7.6mm",
    price: 699,
    images: [Spin76main, SpinBeSmall,Spin6],
    description: "A smaller version of SuperPin, great for lighter weight stacks.",
    stars : 5,
    reviews: 142,
    quantity:1,
  },
];

export default products;

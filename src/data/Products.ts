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
    description: "<strong>SuperPin 9.5 mm: potencia y resistencia para entrenamientos avanzados.</strong>  Si buscas llevar tus rutinas al extremo, el modelo SuperPin 9.5 mm es tu mejor aliado. Diseñado para soportar cargas más pesadas, este pin ofrece mayor robustez y estabilidad en cada repetición. Su construcción con acero de alta resistencia y polímero técnico garantiza durabilidad incluso bajo las condiciones de entrenamiento más intensas. Ideal para máquinas con placas de peso grandes, el SuperPin 9.5 mm te permite disfrutar de dropsets más desafiantes y eficientes, impulsando tus logros en fuerza e hipertrofia.",
    stars : 5,
    reviews: 86,
    quantity:1,

  },
  {
    id: "2",
    name: "SuperPin 7.6mm",
    price: 699,
    images: [Spin76main, SpinBeSmall,Spin6],
    description: "<strong>SuperPin 7.6 mm: el más vendido y adaptable a todo tipo de máquinas.</strong>Con un diámetro universal de 7.6 mm, este modelo se ha convertido en el favorito de los usuarios gracias a su increíble versatilidad. Es compatible con la mayoría de las máquinas selectorizadas y, además, su diseño compacto lo hace más ligero y fácil de transportar. A pesar de su tamaño reducido, conserva la misma tecnología de cambio automático de peso que caracteriza a SuperPin, facilitando dropsets rápidos y fluidos. Si deseas un accesorio que se ajuste a cualquier equipo y aporte resultados inmediatos, el SuperPin 7.6 mm es la elección perfecta.",
    stars : 5,
    reviews: 142,
    quantity:1,
  },
];

export default products;

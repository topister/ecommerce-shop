import React from 'react';
import ProductCard from '../components/ProductCard';
import hoodie from '../assets/hoodie.webp';
import denimjacket from '../assets/denimjacket.jpg';
import tshirt from '../assets/tshirt.avif';
const products = [
  {
    id: 1,
    title: "Classic Tee",
    image: tshirt,
    price: 25,
  },
  {
    id: 2,
    title: "Denim Jacket",
    image: denimjacket,
    price: 60,
  },
  {
    id: 3,
    title: "Hoodie",
    image: hoodie,
    price: 40,
  },
];

type Props = {
  onAddToCart: (product: typeof products[0]) => void;
};

const Home: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};



export default Home;

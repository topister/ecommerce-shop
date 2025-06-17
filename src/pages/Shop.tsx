import React from "react";
import ProductCard from "../components/ProductCard";
import hoodie from '../assets/hoodie.webp';
import denimjacket from '../assets/denimjacket.jpg';
import tshirt from '../assets/tshirt.avif';

const products = [
  { id: 1, title: "Classic Tee", price: 25, image: tshirt },
  { id: 2, title: "Denim Jacket", price: 60, image: denimjacket },
  { id: 3, title: "Hoodie", price: 40, image: hoodie },
];

type Props = {
  onAddToCart: (product: typeof products[0]) => void;
};

const Shop: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">🛍️ Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white mt-2 px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

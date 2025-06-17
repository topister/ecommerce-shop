import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  cart: Product[];
};

const Cart: React.FC<Props> = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div key={i} className="flex items-center space-x-4 border p-4 rounded">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              <div>
                <p className="font-bold">{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <div className="text-right font-bold mt-4">Total: ${total}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;

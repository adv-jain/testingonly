import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(0);

  return (
    <>
      <h1>Cart</h1>

      <p>{cart ? "Cart is empty" : cart}</p>

      <button
        onClick={() => setCart(cart + 1)}
        className="btn btn-primary me-4"
      >
        Add
      </button>
      <button onClick={() => setCart(cart - 1)} className="btn btn-primary">
        Remove
      </button>
    </>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";

import { cartStateSelector } from "../../store/reducers/cartReducer/selectors";
import { CartProduct } from "../../types/cartProduct";

const Cart: React.FC = (): JSX.Element => {
  const { addedProducts } = useSelector(cartStateSelector);

  return (
    <section className="cart-container">
      <h1>Here is a card page!</h1>
      <ul>
        {addedProducts.map((item: CartProduct) => (
          <li key={`${item.created} + ${Math.random()}`}>
            <CartItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cart;

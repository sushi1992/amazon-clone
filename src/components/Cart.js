import React from "react";
import "../css/Cart.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CartProduct from "./CartProducts";

function Cart() {
    const[{cart, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" />
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {cart.map(item => (
                        <CartProduct id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                </div>
            </div>

            {cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Cart
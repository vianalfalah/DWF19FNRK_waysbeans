import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import Header from "../../elements/Header/Header";
import "./Cart.css";
import BoxProducts from "./BoxProducts";
<<<<<<< HEAD
import formatCurency from "../../configs/formatCurency";
=======
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb

function Cart() {
  const [state, dispatch] = useContext(Context);
  const { totalCart } = state;
  const { carts } = state;
  useEffect(() => {
    dispatch({
      type: "GET_TOTAL_CART",
    });
  }, [dispatch]);

  return (
    <div className="cart-container">
      <Header />
      <div className="wrapper-cart">
        <div className="title">
          <h2>My Cart</h2>
        </div>
        <div className="wrapper-detail">
          <div className="list-order">
            <p className="review-title">Review Your Order</p>
            <div className="wrap-detail-cart">
              <hr />

              {carts.length > 0 ? (
                carts.map((product, index) => (
                  <BoxProducts
                    dataProduct={product}
                    dispatch={dispatch}
                    key={index}
                  />
                ))
              ) : (
                <div className="list-empty">List Empty</div>
              )}

              <hr />
            </div>
          </div>
          <div className="wrapper-total">
            <hr />
            <div className="subtotal">
              <p>Subtotal</p>
<<<<<<< HEAD
              <p>{formatCurency(totalCart.subtotal)}</p>
=======
              <p>{totalCart.subtotal}</p>
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
            </div>
            <div className="total-qty">
              <p>Qty</p>
              <p>{totalCart.qty}</p>
            </div>
            <hr />
            <div className="price-total">
              <p>Total</p>
<<<<<<< HEAD
              <p>{formatCurency(totalCart.total)}</p>
=======
              <p>{totalCart.total}</p>
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
            </div>
            <div className="wrapper-btn-checkout">
              {carts.length > 0 ? (
                <Link to="/ship">
                  <button className="btn-checkout">Proceed To Checkout</button>
                </Link>
              ) : (
                <button className="btn-checkout disabled">
                  Proceed To Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

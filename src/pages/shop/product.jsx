import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import './Product.css'

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const [isModalOpen, setModalOpen] = useState(false);

  const cartItemCount = cartItems[id];

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} onClick={toggleModal} />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={productImage} alt={productName} />
            <button className="closeModal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="product-details">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

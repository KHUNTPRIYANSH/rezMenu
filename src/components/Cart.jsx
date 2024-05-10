import React ,{useContext}from 'react';
import { useCart } from '../provider/CartContext';
import '../styles/Cart.css';
import IconButton from '@mui/material/IconButton';import CloseIcon from '@mui/icons-material/Close';
import { CtVis } from '../provider/CartVisibility';
const Cart = () => {

   const cttog = useContext(CtVis);
 const handleClose = () => {
    console.log("crt button status : ", cttog.ctStatus);
    if (cttog.ctStatus === 0) {cttog.setctStatus(1);
        document.getElementById('cart-page').style.right = "-1500px";
        
    }
    if (cttog.ctStatus === 1){
        cttog.setctStatus(0);
        document.getElementById('cart-page').style.right = 0;

    } 
  };


  const { cart, addToCart, removeFromCart } = useCart();

  // Function to add more quantity of the same item
  const increaseQuantity = (item) => {
    addToCart(item);
  };

  // Function to decrease quantity of the same item
  const decreaseQuantity = (item) => {
    removeFromCart(item.id);
  };

  // Calculate total quantity and subtotal
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div id='cart-page'>
        <div className="hd">

      <h2>Shopping Cart</h2>
        <IconButton onClick={handleClose}>
            <CloseIcon id='cls'/>
        </IconButton>
        </div>
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <div className="item-img-cart">
                <img src={item.img} alt={item.name} className="item-img-c" />
               
              </div>
              <div className='content-grd'>
                <h3>{item.name}</h3>
                  <div className="tags">
          {item.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
                   <div className="item-ftr">

                <div className='add-rmv'>
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
                <p>Price: ₹{item.price}</p>
                   </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="cart-summary">
        <p>Total Items: {totalQuantity}</p>
        <p>Subtotal: ₹{subtotal}</p>
      </div>
      <br />
      <div className="btn btn-b">
        <center>

        Confirm Order
        </center>
      </div>
    </div>
  );
};

export default Cart;

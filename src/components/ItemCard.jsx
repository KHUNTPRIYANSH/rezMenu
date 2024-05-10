import React, { useState } from 'react';
import '../styles/ItemCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const ItemCard = ({ name, price, description, img, quantity, tags }) => {
  const [isWished, setIsWished] = useState(false);

  const addToWishlist = () => {
    setIsWished(true);
    // Add item to wishlist logic
  };

  const addToCart = () => {
    // Add item to cart logic
  };

  return (
    <div className="item-card">
      {img && <div className="food-img">

      <img src={img} alt={name} />  </div>}
      <div className="content">
        <h2 id='food-name'>{name}</h2>
        <p className="description">{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
        </div>
        
        <button className={`wishlist-btn ${isWished ? 'active' : ''}`} onClick={addToWishlist}>
          <FavoriteBorderIcon/>
        </button>
        <div className="item-ftr">
    <p className="price">₹{price}</p>
        <button className="btn" onClick={addToCart}>
          Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

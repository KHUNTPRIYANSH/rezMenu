import React, {useContext} from 'react';
import ItemCard from '../../components/ItemCard';

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { CartContext } from '../../provider/CartContext';
import "./MenuPage.css"
import { CtVis } from '../../provider/CartVisibility';
import Cart from '../../components/Cart';
const MenuPage = () => {
   const cttog = useContext(CtVis);
  const {cart} = useContext(CartContext);const handleCartBtn = () => {
    console.log("crt button status : ", cttog.ctStatus);
    if (cttog.ctStatus === 0) {cttog.setctStatus(1);
      document.getElementById('cart-page').style.right = 0;
      
    }
    if (cttog.ctStatus === 1){
      cttog.setctStatus(0);
      document.getElementById('cart-page').style.right = "-1500px";

    } 
  };
  // Sample menu data
 const menu = [
  
  {
    name: "Masala Dosa",
    price: 150,
    description: "South Indian delicacy made of fermented rice and lentil batter, filled with spicy potato filling.",
    tags: ["Veg", "South Indian"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrlZV0nxs2q1twTGiZJkDtr8DzCG2omncYUGEaLXeAg&s",
    quantity: 1,
    category: "South Indian"
  },
  {
    name: "Chole Bhature",
    price: 180,
    description: "Deep-fried bread served with spicy chickpea curry, garnished with onions and lemon.",
    tags: ["Veg", "North Indian"],
    img: "https://thumbs.dreamstime.com/b/amritsari-chole-bhature-vegan-indian-breakfast-heavenly-brunch-snack-where-serve-spicy-chickpea-curry-deep-fried-219474681.jpg",
    quantity: 1,
    category: "North Indian"
  },
  {
    name: "Mutton Biryani",
    price: 350,
    description: "Fragrant basmati rice cooked with tender mutton pieces, aromatic spices, and herbs.",
    tags: ["Non-Veg", "Bestseller"],
    img: "https://cookingfromheart.com/wp-content/uploads/2020/10/Avakaya-Biryani-4.jpg",
    quantity: 1,
    category: "Main Course"
  },
  {
    name: "Pani Puri",
    price: 80,
    description: "Crispy hollow puris filled with spicy tangy water, potatoes, and chickpeas.",
    tags: ["Veg", "Street Food"],
    img: "https://myVegetarianroots.com/wp-content/uploads/2020/03/DSC_0244.jpeg",
    quantity: 1,
    category: "Street Food"
  },{
    name: "Paneer Tikka Masala",
    price: 250,
    description: "Juicy paneer cubes cooked in a creamy tomato-based gravy with aromatic spices.",
    tags: ["Veg", "Bestseller"],
    img: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",
    quantity: 1,
    category: "Main Course"
  },
  {
    name: "Butter Chicken",
    price: 300,
    description: "Tandoori chicken cooked in a rich and creamy tomato sauce with butter and spices.",
    tags: ["Non-Veg", "Bestseller"],
    img: "https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4-768x1149.jpg",
    quantity: 1,
    category: "Main Course"
  },
  {
    name: "Chicken Tikka",
    price: 200,
    description: "Succulent chicken pieces marinated in yogurt and spices, grilled to perfection.",
    tags: ["Non-Veg", "Appetizer"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBS_qX2F-u5KdPfkIYbZIHlUviInR1NyX6w&s",
    quantity: 1,
    category: "Appetizer"
  },
  {
    name: "Palak Paneer",
    price: 220,
    description: "Soft paneer cubes cooked in a creamy spinach gravy with Indian spices.",
    tags: ["Veg", "Healthy"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VE_w_hO6dVohMReePp5s3Qp5GVw2nZSY9g&s",
    quantity: 1,
    category: "Main Course"
  },
  {
    name: "Aloo Paratha",
    price: 120,
    description: "Whole wheat bread stuffed with spicy mashed potatoes, served with yogurt and pickle.",
    tags: ["Veg", "Breakfast"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXDGGksPMEdik-UrL7v4BYe8rX_UbCX_cog&s",
    quantity: 1,
    category: "Breakfast"
  },
  {
    name: "Fish Curry",
    price: 280,
    description: "Fresh fish cooked in a tangy coconut milk-based curry, flavored with spices and curry leaves.",
    tags: ["Non-Veg", "Coastal Cuisine"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGqdUKdfT36zW3nRS8wNwF51fiRtM9FtQiw&s",
    quantity: 1,
    category: "Coastal Cuisine"
  },
  {
    name: "Rajma Chawal",
    price: 160,
    description: "Red kidney beans cooked in a thick tomato gravy, served with steamed basmati rice.",
    tags: ["Veg", "Comfort Food"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZenDyMVKYF6bFlJvx0rSz1673XhTyZnE0Q&s",
    quantity: 1,
    category: "North Indian"
  },
  {
    name: "Chicken Curry",
    price: 280,
    description: "Tender chicken pieces cooked in a flavorful onion-tomato gravy with Indian spices.",
    tags: ["Non-Veg", "Homestyle"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJMLyo1tjiR19uh2pqgUPNCu8n868Q4oFFA&s",
    quantity: 1,
    category: "Main Course"
  }
];

  return (
    <>
    <Cart/>
    <div className="menu-page">
      <div id="menu-header">
<div className="hdr-links">
  <div className="logo"> Arbre</div>
  
  <div className="link"  onClick={handleCartBtn}>
            <a href="#">
              Your Orders
            </a>
   <Badge
              color="success"
              badgeContent={cart.length}
              showZero
            >
              <ShoppingCartIcon />
            </Badge>
  </div>
</div>
      <h1 className="t-title">Menu Items</h1>
      </div>
      <div className="menu-grid">
        {menu.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default MenuPage;

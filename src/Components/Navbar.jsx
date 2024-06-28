import React, { useState } from "react";
import "./Navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Studio = () => {
  const mens = [
    "Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets","Indian & Festive Wear","Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis",
  ];
  return (
    <div className="men">
        <ul>
            <li>Jackets</li>
            <li>Dhotis</li>
            {
                mens.map((item, index)=>{
                    <p key={index}>{item}</p>
                    console.log(item)
                })
            }
        </ul>
      <ul>
        {
            mens.map((item, index)=>{
                <p key={index}>{item}</p>
                console.log(item)
            })
        }
      </ul>
    </div>
  );
};

const Women = () => {
  const mens = [
    "Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets","Indian & Festive Wear","Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis",
  ];
  return (
    <div className="men">
        <ul>
            <li>Jackets</li>
            <li>Dhotis</li>
            {
                mens.map((item, index)=>{
                    <p key={index}>{item}</p>
                    console.log(item)
                })
            }
        </ul>
      <ul>
        {
            mens.map((item, index)=>{
                <p key={index}>{item}</p>
                console.log(item)
            })
        }
      </ul>
    </div>
  );
};

const Kids = () => {
  const mens = [
    "Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets","Indian & Festive Wear","Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis",
  ];
  return (
    <div className="men">
        <ul>
            <li>Jackets</li>
            <li>Dhotis</li>
            {
                mens.map((item, index)=>{
                    <p key={index}>{item}</p>
                    console.log(item)
                })
            }
        </ul>
      <ul>
        {
            mens.map((item, index)=>{
                <p key={index}>{item}</p>
                console.log(item)
            })
        }
      </ul>
    </div>
  );
};

const Home = () => {
  const mens = [
    "Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets","Indian & Festive Wear","Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis",
  ];
  return (
    <div className="men">
        <ul>
            <li>Jackets</li>
            <li>Dhotis</li>
            {
                mens.map((item, index)=>{
                    <p key={index}>{item}</p>
                    console.log(item)
                })
            }
        </ul>
      <ul>
        {
            mens.map((item, index)=>{
                <p key={index}>{item}</p>
                console.log(item)
            })
        }
      </ul>
    </div>
  );
};

const Beauty = () => {
  const mens = [
    "Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets","Indian & Festive Wear","Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis",
  ];
  return (
    <div className="men">
        <ul>
            <li>Jackets</li>
            <li>Dhotis</li>
            {
                mens.map((item, index)=>{
                    <p key={index}>{item}</p>
                    console.log(item)
                })
            }
        </ul>
      <ul>
        {
            mens.map((item, index)=>{
                <p key={index}>{item}</p>
                console.log(item)
            })
        }
      </ul>
    </div>
  );
};

const Men = () => {

  const Topwear = ["T-Shirts","Casual Shirts","Formal Shirts","Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets"];

  const IndianFestiveWear = ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"];

  const Bottomwear = ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"];

  const InnerwearAndSleepwear = ["Briefs & Trunks", "Boxers", "Vests", "Sleepwear & Loungewear", "Thermals"];

  const Footwear = ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters", "Flip Flops", "Socks"];

  const SportsAndActiveWear = ["Sports Shoes", "Sports Sandals", "Active T-Shirts", "Track Pants & Shorts", "Tracksuits", "Jackets & Sweatshirts", "Sports Accessories", "Swimwear"];

  const Gadgets = ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"];

  const FashionAccessories = ["Wallets", "Belts", "Perfumes & Body Mists", "Trimmers", "Deodorants", "Ties, Cufflinks & Pocket Squares", "Accessory Gift Sets", "Caps & Hats", "Mufflers, Scarves & Gloves", "Phone Cases", "Rings & Wristwear", "Helmets"];





  return (
    <div className="men">
      <ul>
        <li id="head">TopWare</li>
        {Topwear.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
        <hr />
        <li id="head">IndianFestiveWear</li>
        {IndianFestiveWear.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <li id="head">Bottomwear</li>
        {Bottomwear.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
        <hr />
        <li id="head">InnerwearAndSleepwear</li>
        {InnerwearAndSleepwear.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <li id="head">Footwear</li>
        {Footwear.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <li id="head">SportsAndActiveWear</li>
        {SportsAndActiveWear.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
        <hr />
        <li id="head">Gadgets</li>
        {Gadgets.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <li id="head">FashionAccessories</li>
        {FashionAccessories.map((item, index) => (
          <li key={index} value={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [showmen, setshowmen] = useState(false);
  const [showwomen, setshowwomen] = useState(false);
  const [showkid, setshowkid] = useState(false);
  const [showhome, setshowhome] = useState(false);
  const [showbeauty, setshowbeauty] = useState(false);
  const [showstudio, setshowstudio] = useState(false);

  const handleMouseOverMen = () => {setshowmen(true);};
  const handleMouseOverWomen = () => {setshowwomen(true);};
  const handleMouseOverKids = () => {setshowkid(true);};
  const handleMouseOverHome = () => {setshowhome(true);};
  const handleMouseOverBeauty = () => {setshowbeauty(true);};
  const handleMouseOverStudio = () => {setshowstudio(true);};
  
  const handleMouseOutMen = () => {setshowmen(false);};
  const handleMouseOutWomen = () => {setshowwomen(false);};
  const handleMouseOutKids = () => {setshowkid(false);};
  const handleMouseOutHome = () => {setshowhome(false);};
  const handleMouseOutBeauty = () => {setshowbeauty(false);};
  const handleMouseOutStudio = () => {setshowstudio(false);};

  return (
    <nav>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="list">
        <ul>
          <li onMouseOver={handleMouseOverMen} onMouseOut={handleMouseOutMen}>
            <a href="https://www.myntra.com/shop/men">MEN</a>
            {showmen && <Men />}
          </li>
          <li onMouseOver={handleMouseOverWomen} onMouseOut={handleMouseOutWomen}>
            <a href="https://www.myntra.com/shop/women">WOMEN</a>
            {showwomen && <Women />}
          </li>
          <li onMouseOver={handleMouseOverKids} onMouseOut={handleMouseOutKids}>
            <a href="https://www.myntra.com/shop/kids">KIDS</a>
            {showkid && <Kids />}
          </li>
          <li onMouseOver={handleMouseOverHome} onMouseOut={handleMouseOutHome}>
            <a href="https://www.myntra.com/shop/home-living">HOME & LIVING</a>
            {showhome && <Home />}
          </li>
          <li onMouseOver={handleMouseOverBeauty} onMouseOut={handleMouseOutBeauty}>
            <a href="https://www.myntra.com/personal-care">BEAUTY</a>
            {showbeauty && <Beauty />}
          </li>
          <li onMouseOver={handleMouseOverStudio} onMouseOut={handleMouseOutStudio}>
            <a href="https://www.myntra.com/studio/home">STUDIO</a>
            {showstudio && <Studio />}
          </li>
        </ul>
      </div>
      <div className="search">
        <IoSearchSharp className="icon" size={20} color="Black" />
        <input type="text" placeholder="Search for Products, brands and more" />
      </div>
      <div className="Section">
        <div className="icon">
          <IoPerson size={20} />
          <p>Profile</p>
        </div>
        <div className="icon">
          <CiHeart size={20} />
          <p>Wishlist</p>
        </div>
        <div className="icon">
          <FaShoppingCart size={20} />
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

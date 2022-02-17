import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Home from "./Home";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);
  const handleAuthentication = ()=> {
    if (user){
      auth.signOut();
        localStorage.clear();

        basket.splice(0);
    }
  }
  return (
    <div className="container">
      <div className="header">
        <Link to={!user && "/login"}>
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to="/login">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />

              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
              <Link to="/contacts">
                <div className="call">
                  <AddIcCallIcon />
                </div>
              </Link>
            </div>
          </Link>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default Header;

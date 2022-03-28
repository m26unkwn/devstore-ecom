import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { devLogo, wishlist, cart, burger, User } from "../../assets";
import { useAuth } from "../../Context/auth/auth-context";

import Tooltip from "../Tooltip/Tooltip";

import SidebarNav from "./SidebarNav";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const {
    authState: { token },
  } = useAuth();

  const currentPath = useLocation();

  const isClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  const pathArray = ["/login", "/signup"];

  return (
    <nav
      className={`nav-wrapper flex ${
        pathArray.some((item) => currentPath.pathname === item)
          ? "jc-center"
          : "jc-between ai-center"
      } flex-gap`}>
      <div className='logo flex jc-between ai-center flex-gap'>
        <NavLink to='/'>
          <button className='btn btn-icon'>
            <img src={devLogo} alt='dev_logo' />
          </button>
        </NavLink>
        <h1 className='logo-text'>DEVSTORE</h1>
        <NavLink
          to='/products'
          className='link-btn logo-text  flex ai-center  jc-center'>
          Shop Now
        </NavLink>
      </div>

      <div className='input-field search-bar'>
        <input placeholder='Search dev swags' type='search' />
      </div>
      <div className='nav-action-wrapper flex jc-between ai-center flex-gap'>
        {!pathArray.some((item) => currentPath.pathname === item) && (
          <div className='auth-link flex jc-between flex-gap'>
            {token ? (
              <Tooltip info='Profile'>
                <NavLink to='/profile' className='btn btn-icon'>
                  <img src={User} alt='userImage' />
                </NavLink>
              </Tooltip>
            ) : (
              <>
                <NavLink to='/login' className='btn auth-login'>
                  Login
                </NavLink>
                <NavLink to='/signup' className='auth-signup btn'>
                  Signup
                </NavLink>
              </>
            )}
          </div>
        )}

        <div className='nav-btn flex jc-between flex-gap'>
          <a href='./screens/wishlist.html'>
            <Tooltip info='wishlist'>
              <button className='btn btn-icon'>
                <img src={wishlist} alt='wishlist_logo' />
              </button>
            </Tooltip>
          </a>
          <a href='./screens/mycart.html'>
            <Tooltip info='cart'>
              <button className='btn btn-icon'>
                <img src={cart} alt='cart_icon' />
              </button>
            </Tooltip>
          </a>
        </div>
      </div>
      <div className='nav-burger'>
        <button className='btn btn-icon' onClick={isClickedHandler}>
          <img src={burger} alt='menu_icon' />
        </button>
      </div>

      {isClicked && (
        <SidebarNav
          setIsClicked={setIsClicked}
          clickHandler={isClickedHandler}
        />
      )}
    </nav>
  );
};

export default Navbar;

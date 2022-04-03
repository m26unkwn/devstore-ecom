import { useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";

import { devLogo, wishlist, cart, burger, User } from "../../assets";
import { useAuth } from "../../Context/auth/auth-context";
import { useData } from "../../Context/stateManage/state-context";
import SearchBar from "./SearchBar";

import SidebarNav from "./SidebarNav";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const {
    authState: { token },
  } = useAuth();

  const {
    state: { wishlistItems, cartItems },
  } = useData();

  const currentPath = useLocation();

  const isClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  const pathArray = ["/login", "/signup"];

  return (
    <nav
      className={`nav-wrapper flex ${
        pathArray.some((item) => currentPath.pathname === item) || token
          ? "jc-center"
          : "jc-between ai-center"
      } flex-gap`}>
      <div className='logo flex jc-between ai-center flex-gap'>
        <div className='flex flex-gap jc-center  ai-center'>
          <NavLink to='/'>
            <button className='btn btn-icon'>
              <img src={devLogo} alt='dev_logo' />
            </button>
          </NavLink>
          <h1 className='logo-text'>DEVSTORE</h1>
        </div>
        <NavLink
          to='/products'
          className='link-btn logo-text  flex ai-center  jc-center'>
          Shop Now
        </NavLink>
      </div>

      <SearchBar />
      <div className='nav-action-wrapper flex jc-between ai-center flex-gap'>
        {!pathArray.some((item) => currentPath.pathname === item) && (
          <div className='auth-link flex jc-between flex-gap'>
            {token ? (
              <NavLink to='/profile' className='btn btn-icon'>
                <img src={User} alt='userImage' />
              </NavLink>
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
          <Link to='/wishlist'>
            <div className='badge'>
              <button className='btn btn-icon'>
                <img src={wishlist} alt='wishlist_logo' />
              </button>
              {token
                ? wishlistItems.length > 0 && (
                    <div className='badge-num-size badge-num-pos circle'>
                      {wishlistItems.length}
                    </div>
                  )
                : ""}
            </div>
          </Link>
          <NavLink to='/cart'>
            <div className='badge'>
              <button className='btn btn-icon'>
                <img src={cart} alt='cart_icon' />
              </button>
              {token
                ? cartItems.length > 0 && (
                    <div className='badge-num-size badge-num-pos circle'>
                      {cartItems.length}
                    </div>
                  )
                : ""}
            </div>
          </NavLink>
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

import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import { RemoveIcon } from "../../assets";

const SidebarNav = ({ setIsClicked, clickHandler }) => {
  const removeSideBar = (e) => {
    if (e.target.classList.contains("navbar-backdrop")) {
      setIsClicked(false);
    }
  };

  return ReactDOM.createPortal(
    <div className='navbar-backdrop' onClick={removeSideBar}>
      <div className='navbar-menu-items card-container'>
        <ul>
          <li className='nav-items-head flex flex-col'>
            <div className='head-cta flex ai-center jc-between'>
              <h3 className='head-title'>Hi There!</h3>

              <button
                onClick={() => clickHandler()}
                style={{ background: "#ffff", borderRadius: "50%" }}
                className='btn btn-icon'>
                <img src={RemoveIcon} alt='remove_icon' />
              </button>
            </div>

            <div className='flex flex-gap'>
              <NavLink to='/login' className='link-btn font-b'>
                Log In
              </NavLink>
              or
              <a href='./' className='link-btn font-b'>
                Sign Up
              </a>
            </div>
          </li>
          <li className='nav-items'>
            <NavLink to='/products' className='link-btn'>
              Shop Now
            </NavLink>
          </li>
          <li className='nav-items'>
            <a href='./' className='link-btn '>
              My Wishlist
            </a>
          </li>
          <li className='nav-items'>
            <a href='./' className='link-btn'>
              My Cart
            </a>
          </li>
        </ul>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
export default SidebarNav;

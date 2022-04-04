import ReactDOM from "react-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useWidth from "../../hooks/use-width";

import { RemoveIcon } from "../../assets";
import { useAuth } from "../../Context/auth/auth-context";

const SidebarNav = ({ setIsClicked, clickHandler }) => {
  const {
    authState: { token, userDetails },
  } = useAuth();

  const width = useWidth();

  useEffect(() => {
    if (width > 700) {
      setIsClicked(false);
    }
  }, [width, setIsClicked]);

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
                <img src={RemoveIcon} alt='remove_icon' height='50px' />
              </button>
            </div>

            {token ? (
              <p>Hello {userDetails.firstName}</p>
            ) : (
              <div className='flex flex-gap'>
                <NavLink to='/login' className='link-btn font-b'>
                  Log In
                </NavLink>
                or
                <NavLink to='/signup' className='link-btn font-b'>
                  Sign Up
                </NavLink>
              </div>
            )}
          </li>
          <li className='nav-items'>
            <NavLink to='/products' className='link-btn'>
              Shop Now
            </NavLink>
          </li>
          <li className='nav-items'>
            <NavLink to='/wishlist' className='link-btn '>
              My Wishlist
            </NavLink>
          </li>
          <li className='nav-items'>
            <NavLink to='/cart' className='link-btn'>
              My Cart
            </NavLink>
          </li>
          <NavLink to='/profile' className='link-btn'>
            Profile
          </NavLink>
        </ul>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
export default SidebarNav;

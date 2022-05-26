import { Link } from "react-router-dom";
import { BoldProfile, Home, OrderBag } from "../../assets";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className=' account-wrapper'>
        <h1 className='flex jc-center'>Account</h1>
        <div className='account-card-wrapper flex flex-wrap flex-gap'>
          <Link to='/account/profile' className='card-container account-card'>
            <div className='acount-content flex ai-center flex-gap'>
              <img src={BoldProfile} alt='profile-img' />
              <h3>Profile</h3>
            </div>
          </Link>
          <Link to='/account/orders' className='card-container account-card'>
            <div className='acount-content flex ai-center flex-gap'>
              <img src={OrderBag} alt='order-img' />
              <h3>Orders</h3>
            </div>
          </Link>
          <Link to='/account/address' className='card-container account-card'>
            <div className='acount-content flex ai-center flex-gap'>
              <img src={Home} alt='order-img' />
              <h3>Address</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;

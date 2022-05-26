import { Link } from "react-router-dom";
import { AddressCard } from "../../components";

const ProfileInfo = () => {
  return (
    <div className=' account-wrapper'>
      <Link to='/account' className='btn account-btn outline-secondary'>
        <h3>
          {"<  "}
          Account
        </h3>
      </Link>
      <div className=' card-container account-head flex flex-col ai-center jc-center'>
        <h1 className='flex jc-center'>Address</h1>
        <div className='card-divider'></div>
        <button className='btn'>Add Address</button>
        <div className='addresss-wrapper'>
          <AddressCard
            name='Jhon Doe'
            street='Indian Jones'
            city='Phagwara'
            state='Punjab'
            country='India'
            pincode='144401'
            phone='1234567891'
          />
          <AddressCard
            name='Jhon Doe'
            street='Indian Jones'
            city='Phagwara'
            state='Punjab'
            country='India'
            pincode='144401'
            phone='1234567891'
          />
          <AddressCard
            name='Jhon Doe'
            street='Indian Jones'
            city='Phagwara'
            state='Punjab'
            country='India'
            pincode='144401'
            phone='1234567891'
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

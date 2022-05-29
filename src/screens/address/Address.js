import { Link } from "react-router-dom";
import { useState } from "react";
import { AddressCard } from "../../components";
import { AddressModal } from "../../components/Modal/AddressModal";
import { useData } from "../../Context";

const ProfileInfo = () => {
  const [address, setAddress] = useState(false);
  const {
    state: { allAddress },
  } = useData();


  const openAddressModal = () => {
    setAddress(true);
  };
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
        <div className='addresss-wrapper'>
          {allAddress?.length > 0 ? (
            allAddress?.map((address) => (
              <AddressCard key={address._id} address={address} />
            ))
          ) : (
            <h3>You don't have any address</h3>
          )}
        </div>
        <button className='btn btn-secondary' onClick={openAddressModal}>
          Add Address
        </button>
      </div>
      {address && <AddressModal setModal={setAddress} />}
    </div>
  );
};

export default ProfileInfo;

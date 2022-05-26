import React from "react";
import { useState } from "react";
import { useAuth, useData } from "../../Context";
import { handlers } from "../../utils/handlers";
import { AddressModal } from "../Modal/AddressModal";
import "./address.css";

export const AddressCard = ({ address }) => {
  const { name, street, city, state, pincode, country, phone } = address;
  const [editAddress, setEditAddress] = useState();
  const { dispatch } = useData();
  const {
    authState: { token },
  } = useAuth();

  const removeAddress = () => {
    return handlers.removeAddress(token, address, dispatch);
  };

  const editModal = () => {
    setEditAddress(true);
  };

  return (
    <div className='address-card'>
      <p className='user-name'>{name}</p>
      <p className='user-location'>
        {street} , {city} , {state}
      </p>
      <p>{pincode}</p>
      <p className='user-country '>{country}</p>
      <p className='user-phone'>{phone}</p>
      <div className='address-action flex flex-gap'>
        <button className='btn' onClick={editModal}>
          Edit
        </button>
        <button className='btn outline-primary' onClick={removeAddress}>
          Remove
        </button>
      </div>
      {editAddress && (
        <AddressModal
          setModal={setEditAddress}
          edit={true}
          editAddress={address}
        />
      )}
    </div>
  );
};

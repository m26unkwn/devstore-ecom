import React from "react";
import "./address.css";

export const AddressCard = ({
  name,
  street,
  city,
  state,
  pincode,
  country,
  phone,
}) => {
  return (
    <div className='address-card'>
      <p className='user-name'>{name}</p>
      <p className='user-location'>
        {street} , {city} , {state} , {pincode}
      </p>
      <p className='user-country '>{country}</p>
      <p className='user-phone'>{phone}</p>
      <div className='address-action flex flex-gap'>
        <button className='btn'>Edit</button>
        <button className='btn outline-primary'>Remove</button>
      </div>
    </div>
  );
};

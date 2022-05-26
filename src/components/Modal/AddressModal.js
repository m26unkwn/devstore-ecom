import React from "react";
import { useState } from "react";
import { useAuth, useData } from "../../Context";
import { handlers } from "../../utils/handlers";
import "./modal.css";

export const AddressModal = ({ setModal, edit, editAddress }) => {
  const { dispatch } = useData();
  const {
    authState: { token },
  } = useAuth();

  const closeModal = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setModal(false);
    }
  };

  const [address, setAddress] = useState(
    edit
      ? editAddress
      : {
          name: "",
          house: "",
          city: "",
          state: "",
          pincode: "",
          country: "",
          phone: "",
        },
  );

  const inputHanlder = (e, name) => {
    setAddress((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const fillDummyData = () => {
    setAddress({
      name: "Milke",
      house: "IH:31",
      city: "Gothwam",
      state: "Param",
      pincode: "1234",
      country: "india",
      phone: "1234567",
    });
  };

  const cancelAddress = () => {
    setAddress({
      name: "",
      house: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      phone: "",
    });
    setModal(false);
  };

  const addAddressHandler = () => {
    if (!edit) {
      handlers.addAddress(token, address, dispatch);
      setModal(false);
    } else {
      handlers.updateAddress(token, address, dispatch);
      setModal(false);
    }
  };

  return (
    <div className='modal-backdrop' onClick={closeModal}>
      <div className='address-container'>
        <div className='card-container modal-card '>
          <div className='auth-head flex flex-col jc-center ai-center'>
            <h4 className='head-title'>Add Address</h4>
          </div>
          <form
            className='form-wrapper flex flex-col ai-center jc-center'
            onSubmit={addAddressHandler}>
            <div className='input-field'>
              <input
                type='text'
                value={address.name}
                placeholder='Enter Name'
                onChange={(e) => inputHanlder(e, "name")}
                required={true}
              />
            </div>
            <div className='input-field'>
              <input
                type='text'
                value={address.house}
                placeholder='Enter House Number'
                onChange={(e) => inputHanlder(e, "house")}
                required
              />
            </div>
            <div className='input-field'>
              <input
                type='text'
                value={address.city}
                placeholder='Enter City'
                onChange={(e) => inputHanlder(e, "city")}
                required
              />
            </div>
            <div className='input-field'>
              <input
                type='text'
                value={address.state}
                placeholder='Enter State'
                onChange={(e) => inputHanlder(e, "state")}
                required
              />
            </div>
            <div className='input-field'>
              <input
                type='text'
                value={address.pincode}
                minLength='4'
                placeholder='Enter Pincode'
                onChange={(e) => inputHanlder(e, "pincode")}
                required
              />
            </div>
            <div className='input-field select'>
              <select
                name='country'
                value={address.country}
                onChange={(e) => inputHanlder(e, "country")}>
                <option value='india'>India</option>
                <option value='pakistan'>Pakistan</option>
                <option value='bangladesh'>Bangladesh</option>
              </select>
            </div>
            <div className='input-field'>
              <input
                type='text'
                value={address.phone}
                minLength='10'
                placeholder='Enter phoneNumber'
                onChange={(e) => inputHanlder(e, "phone")}
                required
              />
            </div>
            <button className='btn' type='submit'>
              Save
            </button>
          </form>
          <div className='address-action'>
            <button className='btn outline-primary' onClick={fillDummyData}>
              Fill Dummy Data
            </button>
            <button className='btn outline-primary' onClick={cancelAddress}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

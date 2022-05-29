import { getDataFromServer } from "../services";
import { toast } from "react-toastify";

// It is use for Removing the item from cart.

// addresss Manangement Handlers

// Add Addresss

const addAddress = (token, address, dispatch) => {
  const header = { authorization: token };
  getDataFromServer(
    "/api/user/address/",
    "post",
    dispatch,
    "ADD_ADDRESS",
    "addressList",
    "Addresss Added",
    null,
    { address: address },
    header,
  );
};

// remove addresss

const removeAddress = (token, address, dispatch) => {
  const header = { authorization: token };
  getDataFromServer(
    `/api/user/address/${address._id}`,
    "delete",
    dispatch,
    "ADD_ADDRESS",
    "addressList",
    "Addresss removed",
    null,
    null,
    header,
  );
};

const updateAddress = (token, address, dispatch) => {
  const header = { authorization: token };
  getDataFromServer(
    `/api/user/address/${address._id}`,
    "post",
    dispatch,
    "ADD_ADDRESS",
    "addressList",
    "Addresss Updated",
    null,
    { address: address },
    header,
  );
};

// edit Address

// It is use for moving  the item from cart to wishlist.

const moveToWishlist = (
  id,
  token,
  product,
  dispatch,
  setLoading,
  isProducInWishlist,
) => {
  const header = { authorization: token };
  if (isProducInWishlist) {
    toast.warning("Product already in Wishlist");
  } else {
    getDataFromServer(
      `/api/user/wishlist`,
      "POST",
      dispatch,
      "ADD_PRODUCT_INTO_WISHLIST",
      "wishlist",
      setLoading,
      { product: product },
      header,
    );
    removefromCart(id, token, product, dispatch, setLoading);
    toast.success("Product Moved Into Wishtlist");
  }
};

// It is use for updating the item in cart by the type whether it is increment or decrement.

const updateQuantity = (id, token, dispatch, setLoading, type) => {
  const header = { authorization: token };
  getDataFromServer(
    `/api/user/cart/${id}`,
    "post",
    dispatch,
    "ADD_PRODUCT_INTO_CART",
    "cart",
    "Quntity Updated.",
    setLoading,
    {
      action: {
        type: type,
      },
    },
    header,
  );
};
const removefromCart = (id, token, product, dispatch, setLoading) => {
  const header = { authorization: token };
  getDataFromServer(
    `/api/user/cart/${id}`,
    "DELETE",
    dispatch,
    "ADD_PRODUCT_INTO_CART",
    "cart",
    "Product Removed From Cart",
    setLoading,
    { product: product },
    header,
  );
};

const addToCart = (
  token,
  product,
  dispatch,
  setLoading,
  navigate,
  location,
) => {
  const header = { authorization: token };
  token
    ? getDataFromServer(
        "/api/user/cart",
        "post",
        dispatch,
        "ADD_PRODUCT_INTO_CART",
        "cart",
        "Product Added To Cart.",
        setLoading,
        {
          product: product,
        },
        header,
      )
    : navigate("/login", { state: { location, item: product } });
};

const emptyCart = (token, dispatch) => {
  const header = { authorization: token };

  getDataFromServer(
    "/api/user/cart/clearCart",
    "post",
    dispatch,
    "ADD_PRODUCT_INTO_CART",
    "cart",
    "Order Placed Successfully",
    null,
    null,
    header,
  );
};

const addToWishlist = (
  token,
  product,
  dispatch,
  setLoading,
  isProducInWishlist,
  navigate,
  location,
) => {
  const header = { authorization: token };
  if (isProducInWishlist) {
    toast.warning("Item already inside of Wishlist");
  } else if (token) {
    getDataFromServer(
      `/api/user/wishlist`,
      "POST",
      dispatch,
      "ADD_PRODUCT_INTO_WISHLIST",
      "wishlist",
      "Product Added To Wishlist.",
      setLoading,
      { product: product },
      header,
    );
  } else {
    navigate("/login");
  }
};

const removefromWishlist = (id, token, product, dispatch, setLoading) => {
  const header = { authorization: token };
  token
    ? getDataFromServer(
        `/api/user/wishlist/${id}`,
        "DELETE",
        dispatch,
        "ADD_PRODUCT_INTO_WISHLIST",
        "wishlist",
        "Product Removed From Wishlist.",
        setLoading,
        { product: product },
        header,
      )
    : toast.warning("You have to Login First");
};

const moveToCart = (
  id,
  token,
  product,
  dispatch,
  setLoading,
  isProducInCart,
) => {
  const header = { authorization: token };
  if (isProducInCart) {
    getDataFromServer(
      `/api/user/cart/${id}`,
      "post",
      dispatch,
      "ADD_PRODUCT_INTO_CART",
      "cart",
      "Product Moved To Cart.",
      setLoading,
      {
        action: {
          type: "increment",
        },
      },
      header,
    );
    toast.success("Quantity Increased");
  } else {
    getDataFromServer(
      "/api/user/cart",
      "post",
      dispatch,
      "ADD_PRODUCT_INTO_CART",
      "cart",
      "",
      setLoading,
      {
        product: product,
      },
      header,
    );
  }
};

// orders

const addOrder = (token, order, dispatch) => {
  const header = { authorization: token };
  getDataFromServer(
    "/api/user/orders",
    "post",
    dispatch,
    "ADD_ORDER",
    "orders",
    "Order Placed Successfully",
    null,
    { ...order },
    header,
  );
};

const handlers = {
  removefromCart,
  moveToWishlist,
  updateQuantity,
  addToCart,
  addToWishlist,
  removefromWishlist,
  moveToCart,
  addAddress,
  removeAddress,
  updateAddress,
  emptyCart,
  addOrder,
};

export { handlers };

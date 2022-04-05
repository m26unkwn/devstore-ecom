import { getDataFromServer } from "../services";

// It is use for Removing the item from cart.

const removefromCart = (id, token, product, dispatch, setLoading) => {
  const header = { authorization: token };
  getDataFromServer(
    `/api/user/cart/${id}`,
    "DELETE",
    dispatch,
    "ADD_PRODUCT_INTO_CART",
    "cart",
    setLoading,
    { product: product },
    header
  );
};

// It is use for moving  the item from cart to wishlist.

const moveToWishlist = (
  id,
  token,
  product,
  dispatch,
  setLoading,
  isProducInWishlist
) => {
  const header = { authorization: token };
  if (isProducInWishlist) {
    alert("Item already inside of Wishlist");
  } else {
    getDataFromServer(
      `/api/user/wishlist`,
      "POST",
      dispatch,
      "ADD_PRODUCT_INTO_WISHLIST",
      "wishlist",
      setLoading,
      { product: product },
      header
    );
    removefromCart(id, token, product, dispatch, setLoading);
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
    setLoading,
    {
      action: {
        type: type,
      },
    },
    header
  );
};

const addToCart = (token, product, dispatch, setLoading) => {
  const header = { authorization: token };
  token
    ? getDataFromServer(
        "/api/user/cart",
        "post",
        dispatch,
        "ADD_PRODUCT_INTO_CART",
        "cart",
        setLoading,
        {
          product: product,
        },
        header
      )
    : alert("You have to login first.");
};

const addToWishlist = (
  token,
  product,
  dispatch,
  setLoading,
  isProducInWishlist
) => {
  const header = { authorization: token };
  if (isProducInWishlist) {
    alert("Item already inside of Wishlist");
  } else if (token) {
    getDataFromServer(
      `/api/user/wishlist`,
      "POST",
      dispatch,
      "ADD_PRODUCT_INTO_WISHLIST",
      "wishlist",
      setLoading,
      { product: product },
      header
    );
  } else {
    alert("You have to login first.");
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
        setLoading,
        { product: product },
        header
      )
    : alert("You have to login first.");
};

const moveToCart = (
  id,
  token,
  product,
  dispatch,
  setLoading,
  isProducInCart
) => {
  const header = { authorization: token };
  if (isProducInCart) {
    getDataFromServer(
      `/api/user/cart/${id}`,
      "post",
      dispatch,
      "ADD_PRODUCT_INTO_CART",
      "cart",
      setLoading,
      {
        action: {
          type: "increment",
        },
      },
      header
    );
  } else {
    getDataFromServer(
      "/api/user/cart",
      "post",
      dispatch,
      "ADD_PRODUCT_INTO_CART",
      "cart",
      setLoading,
      {
        product: product,
      },
      header
    );
    removefromWishlist(id, token, product, dispatch);
  }
};

const handlers = {
  removefromCart,
  moveToWishlist,
  updateQuantity,
  addToCart,
  addToWishlist,
  removefromWishlist,
  moveToCart,
};

export { handlers };

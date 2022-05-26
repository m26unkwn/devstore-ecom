export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_PRODUCTS":
      return { ...state, products: action.payload };

    case "SORT_CHANGE":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          [action.payload.filterParam]: {
            type: action.payload.filterType,
            data: action.payload.data,
          },
        },
      };

    case "CHECKBOX_CHANGE":
      const found = state.selectedFilters[
        action.payload.filterParam
      ]?.data.some((value) => value === action.payload.data);

      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          [action.payload.filterParam]: {
            type: action.payload.filterType,
            data: found
              ? state.selectedFilters[action.payload.filterParam].data.filter(
                  (value) => value !== action.payload.data,
                )
              : state.selectedFilters[action.payload.filterParam]
              ? [
                  ...state.selectedFilters[action.payload.filterParam].data,
                  action.payload.data,
                ]
              : [action.payload.data],
          },
        },
      };
    case "CHECKBOX_BRAND_CHANGE":
      const Newfound = state.selectedFilters[
        action.payload.filterParam
      ]?.data.some((value) => value === action.payload.data);
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          [action.payload.filterParam]: {
            type: action.payload.filterType,
            data: Newfound
              ? state.selectedFilters[action.payload.filterParam].data.filter(
                  (value) => value !== action.payload.data,
                )
              : state.selectedFilters[action.payload.filterParam]
              ? [
                  ...state.selectedFilters[action.payload.filterParam].data,
                  action.payload.data,
                ]
              : [action.payload.data],
          },
        },
      };
    case "CHANGE_RATING":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          rating: action.rating,
        },
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        selectedFilters: { rating: 1 },
      };

    case "ADD_PRODUCT_INTO_CART":
      return { ...state, cartItems: action.payload };

    case "ADD_PRODUCT_INTO_WISHLIST":
      return { ...state, wishlistItems: action.payload };
    case "ADD_ADDRESS":
      return { ...state, allAddress: action.payload };

    case "CLEAR_ALL_DATA_FROM_STATE":
      return {
        ...state,
        wishlistItems: [],
        cartItems: [],
        allAddress: [],
      };

    default:
      return state;
  }
}

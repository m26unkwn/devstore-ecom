export function stateReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

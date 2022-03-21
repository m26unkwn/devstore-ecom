export function stateReducer(state, action) {
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
      ]?.data?.some((value) => value === action.payload.data);
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          [action.payload.filterParam]: {
            type: action.payload.filterType,
            data: found
              ? state.selectedFilters[action.payload.filterParam].data.filter(
                  (value) => value !== action.payload.data
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
    default:
      return state;
  }
}

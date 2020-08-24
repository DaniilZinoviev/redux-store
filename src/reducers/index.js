const initialState = {
  books: [],
  loading: true,
};

/**
 *
 * @param {Object} state
 * @param {{type: string; payload: any}} action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        ...state,
        books: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

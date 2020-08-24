const initialState = {
  books: [],
  loading: false,
  error: null,
};

/**
 *
 * @param {Object} state
 * @param {{type: string; payload: any}} action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

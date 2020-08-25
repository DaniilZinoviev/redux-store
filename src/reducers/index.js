const initialState = {
  books: [],
  loading: false,
  error: null,
  cartItems: [],
  orderTotal: 0,
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

    case "ADD_BOOK_TO_CART":
      const bookId = action.payload;

      const cartTotal = state.cartItems.reduce(
        (total, item) => total + item.price,
        0
      );

      if (state.cartItems.find((item) => item.id === bookId)) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map((item) => {
              if (item.id === bookId) {
                item.count++;
                item.price += item.price / (item.count - 1);
              }
              return item;
            }),
          ],
          orderTotal: cartTotal,
        };
      }

      const item = state.books.find((book) => book.id === bookId);
      const newItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        count: 1,
      };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
        orderTotal: cartTotal + newItem.price,
      };

    default:
      return state;
  }
};

export default reducer;

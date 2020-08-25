import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";

/**
 *
 * @param {Object} state
 * @param {{type: string; payload: any}} action
 */
const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;

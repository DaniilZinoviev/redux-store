const updateShoppingCart = (state, action) => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case "ADD_BOOK_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "REMOVE_BOOK_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "DELETE_BOOK_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

const updateCartItem = (book, item = {}, quantity) => {
  let { id = book.id, title = book.title, count = 0, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateCartItems = (cartItems, newItem, item) => {
  if (newItem.count <= 0) {
    return [...cartItems.filter(({ id }) => id !== newItem.id)];
  }
  if (item) {
    return [
      ...cartItems.map((item) => (item.id === newItem.id ? newItem : item)),
    ];
  }
  return [...cartItems, newItem];
};

const getCartItemsTotal = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + item.total, 0);
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const item = cartItems.find(({ id }) => id === bookId);

  const newItem = updateCartItem(book, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, item);

  return {
    cartItems: newCartItems,
    orderTotal: getCartItemsTotal(newCartItems),
  };
};

export default updateShoppingCart;

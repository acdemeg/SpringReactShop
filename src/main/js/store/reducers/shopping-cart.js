import { actionsEnum } from '../../constants';

const sumOrders = arr => arr.reduce((sum, item) => sum + item.total, 0);

const updateCartItems = (cartItems, item, idx) => {
  let newCartItems;

  if (item.count === 0) {
    newCartItems = [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
    return newCartItems;
  }

  if (idx === -1) {
    newCartItems = [...cartItems, item];
    return newCartItems;
  }

  newCartItems = [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
  return newCartItems;
};

const updateCartItem = (product, item = {}, quantity) => {
  const {
    id = product.id,
    nameProduct = product.nameProduct,
    pathImage = product.pathImage,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    nameProduct,
    pathImage,
    count: count + quantity,
    total: total + quantity * product.price,
  };
};

const updateOrder = (state, productId, quantity) => {
  const {
    goodsList: { goods },
    shoppingCart: { cartItems },
  } = state;

  const product = goods.find(({ id }) => id === productId);
  const itemIndex = cartItems.findIndex(({ id }) => id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(product, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
  const orderTotal = sumOrders(newCartItems);

  return {
    cartItems: newCartItems,
    orderTotal,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case actionsEnum.CLEAR_CART:
      return {
        cartItems: [],
        orderTotal: 0,
      };

    case actionsEnum.GOODS_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case actionsEnum.GOODS_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    case actionsEnum.ALL_GOODS_REMOVED_FROM_CART:
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;

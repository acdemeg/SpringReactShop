import updateGoodsList from './reducers/goods-list';
import updateProductInfo from './reducers/productInfo'
import updateShoppingCart from './reducers/shopping-cart';
import updateAlert from './reducers/notifications';
import updateProfile from './reducers/profile';
import updateOrdersList from './reducers/orders';
import getAllUsers from './reducers/users';
import checkUserAuthorization from './reducers/authorization';

const reducer = (state, action) => ({
  goodsList: updateGoodsList(state, action),
  productInfo: updateProductInfo(state, action),
  shoppingCart: updateShoppingCart(state, action),
  notifications: updateAlert(state, action),
  profile: updateProfile(state, action),
  users: getAllUsers(state, action),
  orderList: updateOrdersList(state, action),
  authorization: checkUserAuthorization(state, action),
});

export default reducer;

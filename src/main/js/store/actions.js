import { 
  actionsEnum, 
  scenesEnum, 
  typeModalEnum, 
  messages, 
  orderStatusEnum 
} from '../constants';
import appServiceData from '../App/appServiceData';

const PRODUCT_LOADED = newProduct => ({
  type: actionsEnum.PRODUCT_LOADED,
  payload: newProduct,
});

const PRODUCT_REQUESTED = () => ({
  type: actionsEnum.PRODUCT_REQUESTED,
});

const PRODUCT_ERROR = error => ({
  type: actionsEnum.PRODUCT_ERROR,
  payload: error,
});

const GOODS_LOADED = newGoods => ({
  type: actionsEnum.GOODS_LOADED,
  payload: newGoods,
});

const GOODS_REQUESTED = () => ({
  type: actionsEnum.GOODS_REQUESTED,
});

const GOODS_ERROR = error => ({
  type: actionsEnum.GOODS_ERROR,
  payload: error,
});

const ORDERS_LOADED = newOrders => ({
  type: actionsEnum.ORDERS_LOADED,
  payload: newOrders,
});

const USERS_REQUESTED = () => ({
  type: actionsEnum.USERS_REQUESTED,
});

const USERS_LOADED = users => ({
  type: actionsEnum.USERS_LOADED,
  payload: users,
});

const USERS_ERROR = error => ({
  type: actionsEnum.USERS_ERROR,
  payload: error,
});

const PROFILE_ERROR = error => ({
  type: actionsEnum.PROFILE_ERROR,
  payload: error,
});

const PROFILE_LOADED = profile => ({
  type: actionsEnum.PROFILE_LOADED,
  payload: profile,
});

const ORDERS_REQUESTED = () => ({
  type: actionsEnum.ORDERS_REQUESTED,
});

const ORDERS_ERROR = error => ({
  type: actionsEnum.ORDERS_ERROR,
  payload: error,
});

const CLEAR_CART = () => ({
  type: actionsEnum.CLEAR_CART
});

const GOODS_ADDED_TO_CART = goodsId => ({
  type: actionsEnum.GOODS_ADDED_TO_CART,
  payload: goodsId,
});

const GOODS_REMOVED_FROM_CART = goodsId => ({
  type: actionsEnum.GOODS_REMOVED_FROM_CART,
  payload: goodsId,
});

const ALL_GOODS_REMOVED_FROM_CART = goodsId => ({
  type: actionsEnum.ALL_GOODS_REMOVED_FROM_CART,
  payload: goodsId,
});

const SHOW_ALERT = (scene, text, typeAlert = 'info') => ({
  type: actionsEnum.SHOW_ALERT,
  payload: { scene, text, typeAlert },
});

const HIDE_ALERT = () => ({
  type: actionsEnum.HIDE_ALERT,
});

const OPEN_MODAL_WINDOW = (type, title) => ({
  type: actionsEnum.OPEN_MODAL_WINDOW,
  payload: { type, title },
});

const CANCEL_MODAL_WINDOW = () => ({
  type: actionsEnum.CANCEL_MODAL_WINDOW,
});

const SUBMIT_MODAL_WINDOW = data => ({
  type: actionsEnum.SUBMIT_MODAL_WINDOW,
  payload: data,
});

const LOG_IN = (userId) => ({
  type: actionsEnum.LOG_IN,
  payload: userId
});

const LOG_OUT = () => ({
  type: actionsEnum.LOG_OUT,
});

const LOGIN = (event, dispatch) => {
  event.preventDefault();
  const formDate = new FormData(LogInForm);
  const user = {
    email: formDate.get("email"),
    password: formDate.get("password")
  }
  appServiceData.logInUser(user).then((res) => {
    if(res){
      dispatch(SHOW_ALERT(scenesEnum.LOG_IN, messages.LOG_IN));
      dispatch(PROFILE_LOADED(res))
      dispatch(LOG_IN(res.id))
    }
    else {
      dispatch(SHOW_ALERT(scenesEnum.LOG_IN, messages.LOG_IN_ERROR, "error"));
    }
   
  });
};

const REGISTER = (event, dispatch) => {
  event.preventDefault();
  const formDate = new FormData(RegForm);
  const user = {
    name: formDate.get("name"),
    phone: formDate.get("phone"),
    email: formDate.get("email"),
    password: formDate.get("password"),
    repeatPassword: formDate.get("password_repeat")
  }

  if(user.password !== user.repeatPassword){
    return dispatch(SHOW_ALERT(scenesEnum.REG, messages.PASSWORD_DISPARITY, "error"));
  }

  appServiceData.regUser(user).then((res) => {
    if(res){
      dispatch(SHOW_ALERT(scenesEnum.REG, messages.REG));
    }
    else dispatch(SHOW_ALERT(scenesEnum.REG, messages.REG_ERROR, "error"));
  });
};

const fetchProductInfo = (id, dispatch) => {
  dispatch(PRODUCT_REQUESTED());
  appServiceData
    .getProductById(id)
    .then(data => dispatch(PRODUCT_LOADED(data)))
    .catch(err => dispatch(PRODUCT_ERROR(err)));
};

const fetchGoods = (appServiceData, dispatch) => {
  dispatch(GOODS_REQUESTED());
  appServiceData
    .getProducts()
    .then(data => dispatch(GOODS_LOADED(data)))
    .catch(err => dispatch(GOODS_ERROR(err)));
};

const fetchOrders = (appServiceData, dispatch, userId) => {
  dispatch(ORDERS_REQUESTED());
  appServiceData
    .getOrdersOfUser(userId)
    .then(data => dispatch(ORDERS_LOADED(data)))
    .catch(err => dispatch(ORDERS_ERROR(err)));
};

const fetchUsers = dispatch => {
  dispatch(USERS_REQUESTED());
  appServiceData.getUsers()
    .then(data => dispatch(USERS_LOADED(data)))
    .catch(err => dispatch(USERS_ERROR(err)));
};

const fetchOrdersforAll = dispatch => {
  dispatch(ORDERS_REQUESTED());
  appServiceData.getOrdersAll()
    .then(data => dispatch(ORDERS_LOADED(data)))
    .catch(err => dispatch(ORDERS_ERROR(err)));
};

const fetchFullInfo = (dispatch) => {
  fetchUsers(dispatch);
  fetchOrdersforAll(dispatch);
};


const fetchProfile = (userId, dispatch) => {
  appServiceData
    .getProfileOfUser(userId)
    .then(data => dispatch(PROFILE_LOADED(data)))
    .catch(err => dispatch(PROFILE_ERROR(err)));
};

const UPDATE_PROFILE = (data, alertText, typeModal, profile, dispatch) => {
  let newData;

  if(typeModal === typeModalEnum.FILL_UP){
    dispatch(SUBMIT_MODAL_WINDOW((Boolean(Number(data))) 
    ? Number(data) + profile.balance : profile.balance
    ));
  } else dispatch(SUBMIT_MODAL_WINDOW(data))


  switch (typeModal) {
    case typeModalEnum.NAME:
      newData = { 
        name: data, 
        email: profile.email, 
        phone: profile.phone, 
        balance: profile.balance
       };
       break;

    case typeModalEnum.PHONE:
      newData = { 
        name: profile.name, 
        email: profile.email, 
        phone: data, 
        balance: profile.balance
        };
        break;

    case typeModalEnum.EMAIL:
      newData = { 
        name: profile.name, 
        email: data, 
        phone: profile.phone, 
        balance: profile.balance
        };
        break;

    case typeModalEnum.FILL_UP:
      newData = { 
        name: profile.name, 
        email: profile.email, 
        phone: profile.phone, 
        balance: (Boolean(Number(data))) 
          ? Number(data) + profile.balance : profile.balance
        };
        break;

    default:
       newData = profile;
  }

  appServiceData.updateProfileById(profile.id, newData).then(res => {
    if (res) {
      dispatch(SHOW_ALERT(scenesEnum.PROFILE, alertText));
    } else dispatch(SHOW_ALERT(scenesEnum.PROFILE, `${alertText} Ошибка!`, "error"));
  });
};

const UPDATE_BALANCE = newBalance => ({
  type: actionsEnum.UPDATE_BALANCE,
  payload: newBalance,
});

const MAKE_ORDER = (orderTotal, items, alertText, userId, profile, dispatch) => {
  if(orderTotal > profile.balance){
    return dispatch(SHOW_ALERT(scenesEnum.CART, messages.MAKE_ORDER_ERROR, "error"));
  }
  const order = {
    userId: userId,
    total: orderTotal,
    products: items.map(item => ({
      productId: item.id,
      orderId: undefined,
      count: item.count,
    })),
  };
  
  const newBalance = profile.balance - orderTotal;
  const newData = {
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    balance: newBalance,
  }

  dispatch(CLEAR_CART());

  appServiceData.updateProfileById(profile.id, newData).then(res => {
    if (res){
      dispatch(UPDATE_BALANCE(newBalance)) 
      appServiceData.createOrder(order).then((res) => {
        if(res){
          dispatch({ type: actionsEnum.MAKE_ORDER, })
          dispatch(SHOW_ALERT(scenesEnum.CART, alertText));
        }
        else {
          dispatch(SHOW_ALERT(scenesEnum.CART, messages.MAKE_ORDER_FAILED, "error"));
          appServiceData.updateProfileById(profile.id, {...newData, balance: profile.balance})
            .then(() => dispatch(UPDATE_BALANCE(profile.balance)))
        }

      });
    } 
    else dispatch(SHOW_ALERT(scenesEnum.CART, messages.MAKE_ORDER_FAILED, "error"));
  });

};

const UPDATE_ORDER = (id, newStatus, userId, profile, orderTotal, scene, dispatch) => {
  appServiceData.updateOrder(id, newStatus).then((res) => {
    if(res){
      dispatch(ORDERS_REQUESTED());
      appServiceData
      .getOrdersOfUser(userId)
      .then(data => dispatch(ORDERS_LOADED(data)))
      .catch(err => dispatch(ORDERS_ERROR(err))); 
      dispatch(SHOW_ALERT(scene, messages.ORDER_UPDATE));
      //refund money
      if(newStatus === orderStatusEnum.CANCELED){
        const newBalance = profile.balance + orderTotal;
        const newData = {
          name: profile.name,
          email: profile.email,
          phone: profile.phone,
          balance: newBalance,
        }
        appServiceData.updateProfileById(profile.id, newData).then(res => {
          if(res){
            dispatch(UPDATE_BALANCE(newBalance)) 
          }
        })
      }
    }
    else dispatch(SHOW_ALERT(scene, messages.ORDER_UPDATE_ERROR, "error"));
  });
};

const ADD_GOODS = (event, dispatch, productInfo) => {
  event.preventDefault();

  const formDate = new FormData(AddProductForm);
  const product = {
    nameProduct: formDate.get("productTitle"),
    description: formDate.get("desc"),
    count: formDate.get("countProduct"),
    price: formDate.get("price"),
    category: formDate.get("category"),
    detailInfo: formDate.get("detail"),
    pathImage: (productInfo.picture) ? productInfo.picture.imagePreviewUrl : null
  }

  appServiceData.addProduct(product).then((res) => {
    if(res){
      dispatch(SHOW_ALERT(scenesEnum.ADD_PRODUCT, messages.ADD_PRODUCT));
    }
    else dispatch(SHOW_ALERT(scenesEnum.ADD_PRODUCT, messages.ADD_PRODUCT_ERROR, "error"));
  });
};

const UPDATE_GOODS = (event, dispatch, productInfo) => {
  event.preventDefault();

  let pathImage;

  if(productInfo.picture){
    pathImage = productInfo.picture.imagePreviewUrl;
  }
  else pathImage = productInfo.product.pathImage;

  const formDate = new FormData(AddProductForm);
  const product = {
    id: productInfo.product.id,
    nameProduct: formDate.get("productTitle"),
    description: formDate.get("desc"),
    count: formDate.get("countProduct"),
    price: formDate.get("price"),
    category: formDate.get("category"),
    detailInfo: formDate.get("detail"),
    pathImage: pathImage
  }

  appServiceData.updateProduct(product.id, product).then((res) => {
    if(res){
      dispatch(SHOW_ALERT(scenesEnum.PRODUCT_INFO, messages.UPDATE_PRODUCT));
    }
    else dispatch(SHOW_ALERT(scenesEnum.PRODUCT_INFO, messages.UPDATE_PRODUCT_ERROR, "error"));
  });
};

const PRODUCT_REMOVE = (productId, dispatch) => {
  appServiceData.deletProduct(productId).then(res => {
    if (res) {
      dispatch(SHOW_ALERT(scenesEnum.PRODUCT_INFO, messages.PRODUCT_REMOVE));
    } else {
      dispatch(SHOW_ALERT(scenesEnum.PRODUCT_INFO, messages.PRODUCT_REMOVE, "error"));
    }
  });
};

export {
  fetchProductInfo,
  fetchFullInfo,
  fetchGoods,
  fetchOrders,
  fetchProfile,
  GOODS_ADDED_TO_CART,
  GOODS_REMOVED_FROM_CART,
  ALL_GOODS_REMOVED_FROM_CART,
  SHOW_ALERT,
  HIDE_ALERT,
  OPEN_MODAL_WINDOW,
  CANCEL_MODAL_WINDOW,
  SUBMIT_MODAL_WINDOW,
  MAKE_ORDER,
  UPDATE_ORDER,
  LOG_IN,
  LOG_OUT,
  REGISTER,
  LOGIN,
  UPDATE_PROFILE,
  ADD_GOODS,
  UPDATE_GOODS,
  PRODUCT_REMOVE
};

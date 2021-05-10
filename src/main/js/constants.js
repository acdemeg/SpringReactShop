const actionsEnum = Object.freeze({
  GOODS_LOADED: 'FETCH_GOODS_SUCCESS',
  GOODS_REQUESTED: 'FETCH_GOODS_REQUESTED',
  GOODS_ERROR: 'FETCH_GOODS_FAILURE',
  PRODUCT_LOADED: 'FETCH_PRODUCT_SUCCESS',
  PRODUCT_REQUESTED: 'FETCH_PRODUCT_REQUESTED',
  PRODUCT_ERROR: 'FETCH_PRODUCT_FAILURE',
  GOODS_ADDED_TO_CART: 'GOODS_ADDED_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  GOODS_REMOVED_FROM_CART: 'GOODS_REMOVED_FROM_CART',
  PROFILE_LOADED: 'FETCH_PROFILE_SUCCESS',
  PROFILE_ERROR: 'FETCH_PROFILE_FAILURE',
  ALL_GOODS_REMOVED_FROM_CART: 'ALL_GOODS_REMOVED_FROM_CART',
  ORDERS_LOADED: 'FETCH_ORDERS_SUCCESS',
  ORDERS_REQUESTED: 'FETCH_ORDERS_REQUESTED',
  ORDERS_ERROR: 'FETCH_ORDERS_FAILURE',
  SHOW_ALERT: 'SHOW_ALERT',
  HIDE_ALERT: 'HIDE_ALERT',
  OPEN_MODAL_WINDOW: 'OPEN_MODAL_WINDOW',
  CANCEL_MODAL_WINDOW: 'CANCEL_MODAL_WINDOW',
  SUBMIT_MODAL_WINDOW: 'SUBMIT_MODAL_WINDOW',
  UPDATE_BALANCE: 'UPDATE_BALANCE',
  FILL_UP_BALANCE: 'FILL_UP_BALANCE',
  MAKE_ORDER: 'MAKE_ORDER',
  UPDATE_ORDER: 'UPDATE_ORDER',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  USERS_REQUESTED: 'USERS_REQUESTED',
  USERS_LOADED: 'USERS_LOADED',
  USERS_ERROR: 'USERS_ERROR'
});

const scenesEnum = Object.freeze({
  PROFILE: 'Profile',
  PRODUCT_LIST: 'ProductList',
  ORDER_LIST: 'OrdersList',
  CART: 'Cart',
  LOG_IN: 'Log-In',
  REG: 'Reg',
  ADMIN_USERS_INFO: 'ADMIN_USERS_INFO',
  PRODUCT_INFO: 'PRODUCT_INFO',
  ADD_PRODUCT: 'ADD_PRODUCT'
});

const usersRoleEnum = Object.freeze({
  ADMIN: 'ADMIN',
  USER: 'USER',
});

const orderStatusEnum = Object.freeze({
  DONE: 'Выполнен',
  CANCELED: 'Отменен',
  DELIVERING: 'В обработке',
});

const typeModalEnum = Object.freeze({
  NAME: 'name_redact',
  PHONE: 'phone_redact',
  EMAIL: 'email_redact',
  FILL_UP: 'fill_up',
});


const messages = Object.freeze({
  MAKE_ORDER: 'Ваш заказ был подтвержден',
  FILL_UP: 'Вы пополнили баланс',
  EMAIL_UPDATE: 'Email обновлен',
  ORDER_UPDATE: 'Статус вашего заказа был обновлен',
  PHONE_UPDATE: 'Ваш телефон обновлен',
  NAME_UPDATE: 'Ваше имя обновлено',
  LOG_IN: 'Вы вошли в аккаунт',
  LOG_OUT: 'Вы вышли из аккаунта',
  LOG_IN_ERROR: 'Ошибка авторизации',
  ORDER_UPDATE_ERROR: 'Ошибка обновления заказа',
  REG: 'Вы успешно зарегистрировались',
  REG_ERROR: 'Ошибка регистрации',
  PASSWORD_DISPARITY: 'Введенные пароли не совпадают',
  MAKE_ORDER_ERROR: 'Не достаточно средств для совершения заказа',
  MAKE_ORDER_FAILED: 'Невозможно создать заказ',
  ADD_PRODUCT: 'Продукт успешно добавлен',
  ADD_PRODUCT_ERROR: 'Произошла обшибка',
  UPDATE_PRODUCT: 'Продукт успешно обновлен',
  UPDATE_PRODUCT_ERROR: 'Произошла обшибка обновления',
  PRODUCT_REMOVE: 'Товар удален из базы данных',
  PRODUCT_REMOVE_ERROR: 'Произошла ошибка при удалении'
});

export { 
  actionsEnum, 
  scenesEnum, 
  typeModalEnum, 
  usersRoleEnum,
  orderStatusEnum, 
  messages };

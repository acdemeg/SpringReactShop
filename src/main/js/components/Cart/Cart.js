import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProductInCart from './ProductInCart';
import './Cart.css';
import {
  GOODS_ADDED_TO_CART,
  GOODS_REMOVED_FROM_CART,
  ALL_GOODS_REMOVED_FROM_CART,
  MAKE_ORDER,
} from '../../store/actions';
import { scenesEnum } from '../../constants';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import ShowNotification from '../ShowNotification';

function Cart({ 
  items, 
  orderTotal, 
  onIncrease, 
  onDecrease, 
  onDelete, 
  makeOrder,
  isLoggedIn, 
  notifications
 }) {
  if(!isLoggedIn){
    return <Redirect to="/authorizationPage" />;
  }

  return (
    <>
      <TransitionGroup component="div" className="cart">
        <CartHeader />

        {items.map(item => (
          <CSSTransition key={item.id} classNames="note" timeout={700}>
            <ProductInCart
              item={item}
              onIncrease={() => onIncrease(item.id)}
              onDecrease={() => onDecrease(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          </CSSTransition>
        ))}

        <CartFooter orderTotal={orderTotal} makeOrder={makeOrder} items={items} />
      </TransitionGroup>

      <ShowNotification notifications={notifications} currentScene={scenesEnum.CART} />
    </>
  );
}

const mapStateToProps = ({
  shoppingCart: { cartItems, orderTotal },
  authorization: { isLoggedIn }, 
  notifications, 
}) => ({
  items: cartItems,
  orderTotal,
  isLoggedIn,
  notifications,
});

const mapDispatchToProps = dispatch => ({
  onIncrease: goodsId => dispatch(GOODS_ADDED_TO_CART(goodsId)),
  onDecrease: goodsId => dispatch(GOODS_REMOVED_FROM_CART(goodsId)),
  onDelete: goodsId => dispatch(ALL_GOODS_REMOVED_FROM_CART(goodsId)),
  makeOrder: (orderTotal, items, alertText, userId, profile) => 
    MAKE_ORDER(orderTotal, items, alertText, userId, profile, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

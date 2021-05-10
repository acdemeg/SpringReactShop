import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfoCardProduct from '../InfoCardProduct';
import { fetchGoods, GOODS_ADDED_TO_CART, SHOW_ALERT } from '../../store/actions';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator';
import { scenesEnum } from '../../constants';
import ShowNotification from '../ShowNotification';
import appServiceData from '../../App/appServiceData';
import { container, productListWrapper, googleFont } from './ProductList.scss';
import SideBar from './SideBar';

const ProductsList = ({ goods, onAddedToCart, notifications, isLoggedIn }) => 
{
  const [goodsList, setGoodsList] = useState(goods);

  return (
    <div className={productListWrapper}>
      <SideBar goods={goods} setGoodsList={setGoodsList}/>
      <div
        style={{     
          paddingLeft: "1%",
          paddingTop: "1%",
          marginLeft: "17%" 
        }} 
        className={container}
      > {
          (goodsList.length === 0) 
          ? ( <div className={googleFont}>Goods Not Found</div>)
          : null
        }
        {goodsList.map(item => (
            <InfoCardProduct
              key={item.id}
              item={item}
              isLoggedIn={isLoggedIn}
              onAddedToCart={() => {
                onAddedToCart(item.id, item.nameProduct);
              }}
            />
        ))}
        <ShowNotification notifications={notifications} currentScene={scenesEnum.PRODUCT_LIST} />
      </div>
    </div>
  );
};

const ProductsListContainer = ({
  goods,
  loading,
  error,
  notifications,
  onAddedToCart,
  fetchGoods,
  isLoggedIn
}) => {
  useEffect(() => {
    fetchGoods();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <ProductsList 
    goods={goods} 
    onAddedToCart={onAddedToCart} 
    notifications={notifications}
    isLoggedIn={isLoggedIn} />;
};

const mapStateToProps = ({ 
  goodsList: { goods, loading, error },
  authorization: { isLoggedIn },
  notifications }) => ({
  goods,
  loading,
  error,
  notifications,
  isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchGoods: () => fetchGoods(appServiceData, dispatch),
  onAddedToCart: (id, nameProduct) => {
    dispatch(GOODS_ADDED_TO_CART(id));
    dispatch(SHOW_ALERT(scenesEnum.PRODUCT_LIST, `Продукт ${nameProduct} добавлен в корзину`));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListContainer);

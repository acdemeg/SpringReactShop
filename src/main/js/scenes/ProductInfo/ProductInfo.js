import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { 
  googleFont,
  wrapper, 
  wrapperProductInfo,
  updateProduct,
  border 
} from './ProductInfo.scss'
import { 
  fetchProductInfo, 
  GOODS_ADDED_TO_CART, 
  SHOW_ALERT,
  PRODUCT_REMOVE
 } from '../../store/actions';
import { connect } from 'react-redux';
import { scenesEnum } from '../../constants';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../../components/Error-boundry/Error-indicator'; 
import ShowNotification from '../../components/ShowNotification';
import ProductInfoCard from './ProductInfoCard';
import AddGoods from "../AddGoods/";

const ProductInfo = ({ 
  isLoggedIn, 
  notifications,
  product, 
  loading, 
  error,
  onAddedToCart,
  removeProduct,
  fetchProduct,
  profile
}) => {

  const params = useParams();
  const productId = Number(params.id);
  if(!productId){
    return <Redirect to="/" />
  }

  useEffect(() => {
    fetchProduct(productId);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  if(!product){
    return (
    <div className={googleFont}>
      Impossible product page
    </div>);
  }

  return (
    <div>
      <div className={wrapper}>
        <ProductInfoCard 
          product={product} 
          onAddedToCart={onAddedToCart}
          removeProduct={removeProduct} 
          isLoggedIn={isLoggedIn} 
          profile={profile}
        />
        <hr className={border}></hr>
        <div className={wrapperProductInfo}>
          <div
            className={googleFont} 
            style={{ margin: "1% 1% 1% 0" , textAlign: "left"}} >
            <font size="30px"><b>Подробная информация о </b></font>
            <font color="crimson">
              {`${product.nameProduct}`}
            </font>
          </div>
          <big>
            {product.detailInfo}
          </big>
        </div>
        <ShowNotification 
          notifications={notifications} 
          currentScene={scenesEnum.PRODUCT_INFO} 
        />
      </div>
      <div className={updateProduct}>
        <AddGoods product={product}/>
      </div>
    </div>
  );
}

const mapStateToProps = ({
  notifications,
  authorization: { isLoggedIn },
  productInfo: { product, loading, error },
  profile
}) => ({
  notifications,
  isLoggedIn,
  product, 
  loading, 
  error,
  profile
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => fetchProductInfo(id, dispatch),
  onAddedToCart: (id, nameProduct) => {
    dispatch(GOODS_ADDED_TO_CART(id));
    dispatch(SHOW_ALERT(scenesEnum.PRODUCT_INFO, `Продукт ${nameProduct} добавлен в корзину`));
  },
  removeProduct: (productId) => PRODUCT_REMOVE(productId, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductInfo);
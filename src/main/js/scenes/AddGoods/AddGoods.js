import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { scenesEnum, usersRoleEnum } from '../../constants';
import { ADD_GOODS, UPDATE_GOODS } from '../../store/actions';
import { connect } from 'react-redux';
import ImageUpload from './ImageUpload'
import { googleFont, addGoods, addProductInfo } from './AddGoods.scss'
import MainProductInfo from "./MainProductInfo";
import ShowNotification from '../../components/ShowNotification';
import { border } from '../ProductInfo/ProductInfo.scss'


function AddGoods({ 
  notifications,
  profile,
  isLoggedIn,
  uploadProduct,
  product
}){
  const [picture, setPicture] = useState();

  if(!isLoggedIn || profile.role !== usersRoleEnum.ADMIN){
    if(product){
      return null;
    }
    return <Redirect to="/authorizationPage" />
  }

  return (
    <div>
      {
        (product) 
        ?
        <div>
          <hr className={border}></hr>
          <div className={googleFont}>
            <b>
              <a style={{ 
                cursor: "default",
                color: "#3273dc"
               }}
                name="modify">Модификация товара</a>
            </b>
          </div>
        </div>
       :
       <div className={googleFont}>
         <b>Добавление товара</b>
      </div>
      }
      <form
        id="AddProductForm" 
        onSubmit={e => uploadProduct(e, { product, picture})}>  
        <div className={addGoods}>
          <MainProductInfo product={product}/>
          <div className={addProductInfo}>
              <ImageUpload 
                product={product} 
                setPicture={setPicture}
              />
            <textarea 
              name="detail"
              style={{ marginTop: "5%"}}
              className="textarea" 
              placeholder="Подробное описание"
              defaultValue={(product) ? product.detailInfo : ""}
            >
            </textarea>
          </div>
        </div>
        <button className="submitButton" 
          type="submit" 
          onClick={e => uploadProduct(e, { product, picture})}
        >
            Сохранить товар
        </button>
      </form>
      <ShowNotification notifications={notifications} currentScene={scenesEnum.ADD_PRODUCT} />
    </div>
  );
}

const mapStateToProps = ({
  notifications,
  profile,
  authorization: { isLoggedIn }
}) => ({
  notifications,
  profile,
  isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  uploadProduct: (event, { product, picture }) => {
    if(product){
      UPDATE_GOODS(event, dispatch, { product, picture })
    }
    else ADD_GOODS(event, dispatch, { product, picture })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddGoods);
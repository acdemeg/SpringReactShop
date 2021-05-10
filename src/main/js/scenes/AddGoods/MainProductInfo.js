import React from 'react';
import InputField from '../../components/inputs/InputField'
import SelectInput from '../../components/inputs/SelectInput'
import { mainProductInfo } from './AddGoods.scss'

function MainProductInfo({ product }){

  let titleProduct = "";
  let descProduct = "";
  let countProduct = "";
  let priceProduct = "";

  if(product){
    titleProduct = product.nameProduct;
    descProduct = product.description;
    countProduct = product.count;
    priceProduct = product.price;
  }

  return (
    <div className={mainProductInfo}>
      <InputField
        inputColor="colorProductTitle"
        type="text"
        name="productTitle"
        placeholder="Введите название товара"
        iconLeft="ad"
        iconRight="iconProductTitle"
        minLength="1"
        inputTitle="Введите название товара"
        value={titleProduct}
      />
      <InputField
        inputColor="colorDesc"
        type="text"
        name="desc"
        placeholder="Введите краткое описание"
        iconLeft="pencil-alt"
        iconRight="iconDesc"
        minLength="1"
        inputTitle="Введите краткое описание"
        value={descProduct}
      /> 
      
      <SelectInput nameForm="category"/>
      
      <InputField
        inputColor="colorCountProduct"
        type="number"
        name="countProduct"
        placeholder="Введите количество"
        iconLeft="calculator"
        minLength="1"
        iconRight="iconCountProduct"
        inputTitle="Введите количество"
        value={countProduct}
      /> 
      <InputField
        inputColor="colorPrice"
        type="number"
        name="price"
        placeholder="Введите цену Руб."
        iconLeft="ruble-sign"
        iconRight="iconPrice"
        minLength="1"
        inputTitle="Введите цену Руб." 
        value={priceProduct}
      />  
    </div>
  );
}

export default MainProductInfo;
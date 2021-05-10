import React from 'react';
import { usersRoleEnum } from '../../constants';
import { 
  wrapperProductInfo,
  productInfo,
  photoWrapper,
  addToCartDisabled
} from './ProductInfo.scss'

const ProductInfoCard = ({ product, onAddedToCart, removeProduct, isLoggedIn, profile }) => {
  const { id, nameProduct, count, description, price, pathImage } = product;

  return (
    <div className={wrapperProductInfo}>
      <div className={photoWrapper}>
        {
          (pathImage) 
          ? <img src={(pathImage.startsWith("data:image/")) ? pathImage : `/upload/products/${pathImage}` }
              alt="productPhoto" width="400px" height="400px"/>
          : <img src={`/upload/products/notImage.png`} width="400px" height="400px" />
        }
      </div>
      <div className={productInfo}>
        <div>
          <p>
            Название:&emsp;
            <i style={{ color: 'blue' }}>{nameProduct}</i>
          </p>
        </div>
        <div>
          <p>
            Остаток на складе:&emsp;
            <i style={{ color: 'blue' }}>{count}</i>
          </p>
        </div>
        <div>
          <p>
          Цена:&emsp;
            <i style={{ color: 'blue' }}>{price}&#8381;</i>
          </p>
        </div>
        <div>
          Описание:&emsp;
            <i style={{ color: 'gray', overflowWrap: "anywhere"}}>{description}</i>
        </div>
        <div>
          <button
            onClick={() => onAddedToCart(id, nameProduct)}
            className={`button is-rounded is-small add-to-card 
              ${(isLoggedIn) ? null : addToCartDisabled}`}
            type="submit"
            value="Add to cart"
          >
            Добавить в корзину
          </button>
          {
            (usersRoleEnum.ADMIN === profile.role)
            ? <>
                  <a href="#modify">
                    <button
                      style={{ background: "burlywood", marginLeft: "5%"}}
                      className={`button is-rounded is-small add-to-card `}
                    >
                      Модифицировать
                    </button>
                  </a>
                  <button
                    style={{ background: "crimson", marginLeft: "5%"}}
                    onClick={() => removeProduct(id)}
                    className={`button is-rounded is-small add-to-card`}
                  >
                    Удалить товар
                  </button>
            </>
            : null
          }

      </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
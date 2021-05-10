import React from 'react';
import style from './UsersInfo.scss';

const ProductsImages = ({ products }) => (
  <div>
    {products.map(item => (
      <div key={item.id}>
        {
          (item.pathImage) 
          ? 
          <img 
            alt="avatar" 
            src={(item.pathImage.startsWith("data:image/")) 
              ? item.pathImage : `/upload/products/${item.pathImage}` }
            width="100px" height="100px" 
         />
          : <img src={`/upload/products/notImage.png`} width="100px" height="100px" />
        }
      </div>
    ))}
  </div>
);

export default ProductsImages;

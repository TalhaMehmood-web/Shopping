import React from 'react';
import "../css/product.css";
const Product = (props) => {
    let {productIMG , productTXT}=props;
  return (
    <div>
      <div className="product">
        <div className="product-top">
            <img style={{cursor:"pointer"}} src={productIMG} alt="" />
        </div>
        <div className="product-btm">
            <p>{productTXT}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

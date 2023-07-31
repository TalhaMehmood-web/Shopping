import React from 'react';
import "../css/brand.css";
const Brand = (props) => {
        let {brandIMG} = props; 
  return (
    <div>
      
      <div className="brand-container">
<img src={brandIMG} alt="" />
      </div>
    </div>
  );
}

export default Brand;

import React from 'react';
import "../css/sofa.css";

const Sofa = (props) => {
    let {sofaIMG , color1 ,color2,color3, color4,color5 ,state , Width , Height ,setmargin} = props;
    const Visible = {
         opacity : state,
        
    };
    const size = {
      width :  `${Width}px`,
      height : `${Height}px`, 

  


    }
    const margins ={
      marginRight : `${setmargin}rem`
    }
  return (
    <div>
      <div className="sofa-container" style={margins}>
        <div className="sofa-top">
<div className="sofa-img">
<img src={sofaIMG} style={size} alt="" />
</div>
<div className="sofa-color" style={Visible} >
<ul>
    <li><img src= {color1}  alt="" /></li>
    <li><img src= {color2}  alt="" /></li>
    <li><img src= {color3}  alt="" /></li>
    <li><img src= {color4}  alt="" /></li>
    <li><img src= {color5}  alt="" /></li>
</ul>
</div>
        </div>
        <div className="sofa-btm">
<div className="sofa-txt">
<p>Alcatra porkchop venison </p>
</div>
<div className="sofa-price">
<p><b>$50.00</b><del> $66.00</del></p>
</div>
        </div>
        <div className="sofa-hover">
            <ul>
                <li><i class="fa-solid fa-cart-shopping"></i></li>
                <li><i class="fa-regular fa-eye"></i></li>
                <li><i class="fa-regular fa-heart"></i></li>
                <li><i class="fa-solid fa-repeat"></i></li>
            </ul>
        </div>
        <div className="sofa-badge">
          SALE
        </div>
      </div>
    </div>
  );
}

export default Sofa;

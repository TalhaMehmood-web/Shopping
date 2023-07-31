import React from 'react';
import "../css/services.css";
const Services = (props) => {
let {serviceIMG , smid , sbtmbtm ,sbtmtop} =props;

    return (
    <div>
      <div className="services-container">
        <div className="s-top">
<img src={serviceIMG} alt="" />
        </div>
        <div className="s-mid">
<p>{smid}</p>
        </div>
        <div className="s-btm">
<p>{sbtmtop} <br /> 
    {sbtmbtm}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

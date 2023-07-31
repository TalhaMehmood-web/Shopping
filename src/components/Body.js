import React from 'react';
import "../css/body.css";
import Product from './Product';
import Sofa from './Sofa';
import Button from './Button';
import Brand from './Brand';
import Services from './Services';

const Body = () => {

const slideLeft = () =>{
 const HomeSlider = document.querySelector(".slider-ul");
 const slideWidth = HomeSlider.clientWidth;
 HomeSlider.scrollLeft -= slideWidth;

}
const slideRight = () =>{
    const HomeSlider = document.querySelector(".slider-ul");
    const slideWidth = HomeSlider.clientWidth;
    HomeSlider.scrollLeft += slideWidth;
   
   }   
   const productLeft = ()=>{
    const productSlider = document.querySelector(".product-ul");   
const productWidth = productSlider.clientWidth;
productSlider.scrollLeft -= productWidth;

   }

   const productRight = ()=>{
    const productSlider = document.querySelector(".product-ul");
    const productWidth = productSlider.clientWidth;
     productSlider.scrollLeft += productWidth;

   }
   const sofaLeft =()=>{
    
    const sofaul = document.querySelector(".sofa-ul");
    const sofawidth = sofaul.clientWidth;
    sofaul.scrollLeft -= sofawidth


   }
   const sofaRight = ()=>{
    const sofaul = document.querySelector(".sofa-ul");
    const sofawidth = sofaul.clientWidth;
    sofaul.scrollLeft += sofawidth
   }
   const popularLeft =()=>{
    const popularul = document.querySelector(".popular-ul");
    const popularwidth = popularul.clientWidth;
    popularul.scrollLeft -= popularwidth
   }
   const popularRight =()=>{
    const popularul = document.querySelector(".popular-ul");
    const popularwidth = popularul.clientWidth;
    popularul.scrollLeft += popularwidth
   }
   const brandLeft =()=>{
    const brandul = document.querySelector(".brand-ul");
    const brandwidth = brandul.clientWidth;
    brandul.scrollLeft -= brandwidth
   }
   const brandRight =()=>{
    const brandul = document.querySelector(".brand-ul");
    const brandwidth = brandul.clientWidth;
    brandul.scrollLeft += brandwidth
   }
  return (
    <div>
      <section>
        <div className="home">
            <div className="navbar">
                <div className="nav-content">
<div className="nav-left list-items">
<ul>
    <li><a href="/">HOME</a></li>
    <li><a href="/">FEATURES</a></li>
    <li><a href="/">SHOP</a></li>
    <li><a href="/">PAGES</a></li>
    <li><a href="/">BLOGS</a></li>
</ul>
</div>
<div className="nav-mid">
<img src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/logo.png" alt="" />
</div>
<div className="nav-right list-items">
<ul>
    <li><a href="/">ENG </a></li>
    <li><a href="/">USD </a></li>
    <li><a href="/">LOGIN</a></li>
    <li><a href="/">REGISTER</a></li>
    <li><a href="/"><i class="fa-solid fa-magnifying-glass"></i></a></li>
    <li><a href="/"><i class="fa-regular fa-heart"></i></a></li>
    <li><a href="/"><i class="fa-regular fa-bell"></i></a></li>
</ul>
</div>
</div>
            </div>
            <div className="slider">
<div className="slider-content">
    <div className="slider-ul"  >
        <div className="slider-items"><img src="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/slideshow/home1/Index_v1_3-1740x860.jpg" alt="" /></div>
        <div className="slider-items"><img src="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/slideshow/home1/Index_v1_1-1740x860.jpg" alt="" /></div>
        <div className="slider-items"><img src="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/slideshow/home1/Index_v1_2-1740x860.jpg" alt="" /></div>
    </div>
    <div className="slider-btn">
        <div className="btnleft" id='btnleft' onClick={slideLeft}  >
<button className='btn-hover'><i class="fa-solid fa-chevron-left"></i></button>
        </div>
        <div className="btnright " onClick={slideRight}>
<button className='btn-hover'><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
</div>
            </div>
            
        </div>
      </section>
      <section>
        <div className="product-container">
            <div className="product-content">
                <div className="product-ul">
                    <div className="product-item"><Product productIMG= "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/category/category2-80x80.png "  productTXT = "Living room"/></div>
                    <div className="product-item"><Product productIMG= " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/category/category1-80x80.png"  productTXT = " INTERIOR "/></div>
                    <div className="product-item"><Product productIMG= " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/category/category3-80x80.png"  productTXT = " KITCHEN"/></div>
                    <div className="product-item"><Product productIMG= "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/category/category4-80x80.png "  productTXT = " BATHROOM"/></div>
                    <div className="product-item"><Product productIMG= " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/category/category5-80x80.png"  productTXT = " LIGHTING"/></div>
                    <div className="product-item"><Product productIMG= "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/category/category6-80x80.png "  productTXT = " OFFICE"/></div>
                    <div className="product-item"><Product productIMG= " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/category/category7-80x80.png"  productTXT = " BEDROOM "/></div>
                </div>
               
            </div>
            <div className="product-btn">
        <div  id='btnleft' onClick={productLeft}   >
<button className="productleft"><i class="fa-solid fa-arrow-left-long"></i></button>
        </div>
        <div onClick={productRight}  >
<button className="productright"><i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
    </div>
        </div>
      </section>
      <section>
  <div className="sofa">
    <div className="sofa-content">
      <div className="sofa-head">
<p>NEW ARRIVALS</p>
      </div>
      <div className="sofa-txt">
        <p>SHOP THE NEW SELECTION OF NEW ARRIVALS AT OUR STORE. FILL OUT YOUR WISHLIST ITEM.</p>
      </div>
      <div className="sofa-ul">
        <div className="sofa-list"><Sofa  Width = "320"  Height = "350"  setmargin ="1.1" sofaIMG = " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/30a-330x396.jpg"
        color1 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Mint-20x20.png"   color2 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Red-20x20.png"    color3 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Blue-20x20.png"   color4 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Silver-20x20.png" color5="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/brown-20x20.png" /></div>
        <div className="sofa-list"><Sofa  Width = "320"  Height = "350"  setmargin ="1.1" sofaIMG = " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/1-330x396.jpg"
        state ="0" /></div>
        <div className="sofa-list"><Sofa  Width = "320"  Height = "350"  setmargin ="1.1" sofaIMG = " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/32-330x396.jpg"
         color2 = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Navy-20x20.png" color3="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/brown-20x20.png" color4 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Blue-20x20.png" /></div>
        <div className="sofa-list"><Sofa  Width = "320"  Height = "350"  setmargin ="1.1" sofaIMG = " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/18-330x396.jpg"
            state ="0"/></div>
        <div className="sofa-list"><Sofa  Width = "320"  Height = "350"  setmargin ="1.1" sofaIMG = " https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/16-330x396.jpg" 
          state ="0"  /></div>
        <div className="sofa-list"><Sofa  Width = "320"  Height = "350"  setmargin ="1.1" sofaIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/31-330x396.jpg "
        color1 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Mint-20x20.png" color2="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/White-20x20.png" color3="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Yellow-20x20.png" color4="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Navy-20x20.png"/></div>
      </div>
    </div>
    <div className="sofa-btn">
        <div  id='sofaleft' onClick={sofaLeft}   >
<button className="sofaleft"><i class="fa-solid fa-arrow-left-long"></i></button>
        </div>
        <div onClick={sofaRight}  >
<button className="sofaright"><i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
    </div>
  </div>
      </section>
      <section>
        <div className="popular">
          <div className="popular-content">
            <div className="popular-left">
              <div className="popular-ul">
                <div className="popular-list" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}><Sofa Width = "400"  Height = "400" sofaIMG="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/30b-330x396.jpg" color1 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Mint-20x20.png"   color2 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Red-20x20.png"    color3 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Blue-20x20.png"   color4 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Silver-20x20.png" color5="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/brown-20x20.png"  /> <div><Button btnmargin="1" btntxt = "ADD TO CART" btncolor ="black" /></div></div>
                <div className="popular-list" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}><Sofa Width = "400"  Height = "400" sofaIMG="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/1-330x396.jpg" state ="0" /><div><Button btntxt = "ADD TO CART" btnmargin="1" btncolor ="black" /></div></div>                            
                <div className="popular-list" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}><Sofa Width = "400"  Height = "400" sofaIMG="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/32-330x396.jpg" color2 = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Navy-20x20.png" color3="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/brown-20x20.png" color4 ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/so_color_swatches_pro_icons/Blue-20x20.png"/><div><Button btnmargin="1"btntxt = "ADD TO CART" btncolor ="black"  /></div></div>  
              </div>
              <div className="popular-btn">
            <div  id='popularleft' onClick={popularLeft}>
<button className="popularleft"><i class="fa-solid fa-arrow-left-long"></i></button>
        </div>
        <div onClick={popularRight}  >
<button className="popularright"><i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
            </div>
            </div>
         
            <div className="popular-right">
<img src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/banners/id1-img1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
    <div className="seller">
      <div className="seller-content">
        <div className="seller-top">
<div className="seller-head">
<p>BESTSELLER</p>
</div>
<div className="seller-para">
<p>LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY</p>
</div>
<div className="seller-btn">
<ul>
  <li><a href="/"><Button btntxt= "DECOR"/></a></li>
  <li><a href="/"><Button btntxt= "KITCHEN"/></a></li>
  <li><a href="/"><Button btntxt= "LIVING ROOM"/></a></li>
  <li><a href="/"><Button btntxt= "SOFA"/></a></li>
</ul>
</div>
        </div>
        <div className="seller-btm">
          <div className="btm-r1">
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/24-330x396.jpg"/></div>
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/21-330x396.jpg"/></div>
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/7-330x396.jpg"/></div>
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/5-330x396.jpg"/></div>
          </div>
          <div className="btm-r2">
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/22-330x396.jpg "/></div>
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG =" https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/23-330x396.jpg"/></div>
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG =" https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/6-330x396.jpg"/></div>
<div className="sellet-item"><Sofa setmargin = "2.2" state = "0" Width="320" Height="350" sofaIMG ="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/demo/product/4-330x396.jpg "/></div>
          </div>
        </div>
      </div>
    </div>
      </section>
      <section>
        <div className="brand">
          <div className="brand-content">
         <div className="brand-ul">
          <div className="brand-list"><Brand brandIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/brands/br1-210x210.png"/></div>
          <div className="brand-list"><Brand brandIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/brands/br2-210x210.png"/></div>
          <div className="brand-list"><Brand brandIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/brands/br3-210x210.png"/></div>
          <div className="brand-list"><Brand brandIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/brands/br4-210x210.png"/></div>
          <div className="brand-list"><Brand brandIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/brands/br5-210x210.png"/></div>
          <div className="brand-list"><Brand brandIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/brands/br6-210x210.png"/></div>
          <div className="brand-list"><Brand brandIMG = "https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/brands/br2-210x210.png"/></div>
         </div>
          </div>
          <div className="brand-btn">
          <div  id='brandleft' onClick={brandLeft}>
<button className="brandleft"><i class="fa-solid fa-arrow-left-long"></i></button>
        </div>
        <div onClick={brandRight}  >
<button className="brandright"><i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
          </div>
        </div>
      </section>
      <section>
        <div className="store">
          <div className="store-content">
            <div className="store-head">
              <p>HELLO CUSTOMER! </p>
            </div>
            <div className="store-para">
              <p>VISIT OUR STORE</p>
            </div>
            <div className="store-txt">
              <p> 21 W. 46th St., New York, United States <br />
                  talhamehmood991@gmai.com <br />
                  +92 (302) 419 7272 <br /> </p>
            </div>
            <div className="store-btn">
              <Button btnmargin="1" btntxt ="CONTACT US"/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="services">
      <div className="services-content">
        <div className="services-ul">
          <div className="services-list"> <Services serviceIMG ="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/icon-service/icon1.png" smid="FREE SHIPPING" sbtmbtm="Sed ut perspiciatis unde omnis iste natus" sbtmtop="error sit voluptatem accusantium"/> </div>
          <div className="services-list"> <Services serviceIMG ="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/icon-service/icon2.png" smid="30 DAYS MONEY BACK" sbtmbtm="Sed ut perspiciatis unde omnis iste natus" sbtmtop="error sit voluptatem accusantium"/> </div>
          <div className="services-list"> <Services serviceIMG ="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/icon-service/icon3.png" smid="24/7 HELP CENTER" sbtmbtm="Sed ut perspiciatis unde omnis iste natus" sbtmtop="error sit voluptatem accusantium

"/> </div>
          <div className="services-list"> <Services serviceIMG ="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/icon-service/icon4.png" smid="GIFT PROMOTION
" sbtmbtm="Sed ut perspiciatis unde omnis iste natus" sbtmtop="error sit voluptatem accusantium"/> </div>
        </div>
      </div>
        </div>
      </section>
      <section>
        <div className="menu">
          <div className="menu-content">
            <div className="menu-left">
<div className="menu-ul">
  <p> SHOP</p>
  <ul>
<li>NEW ARRIVALS</li>
<li>SALE & SPECIAL OFFER</li>
<li>LIVING ROOM</li>
<li>FURNITURE DECOR</li>
<li>LAMP & LIGHTING</li>
<li>SOFA & CHAIR</li>
<li>HOME & KITCHENS</li>
  </ul></div>
<div className="menu-ul">
  <p>INFORMATION</p>
  <ul>
<li>ABOUT US</li>
<li>CUSTOMER SERVICES</li>
<li>BLOG</li>
<li>PAGE 404</li>
<li>SIZING GUIDE</li>
<li>FAQS</li>
<li>CONTACT US</li>
  </ul></div>
<div className="menu-ul">
  <p>ORDER</p>
  <ul>
<li>MY ACCOUNT</li>
<li>VIEW BAG</li>
<li>PRIVACY POLICY</li>
<li>COOKIE POLICY</li>
  </ul></div>
            </div>
            <div className="menu-right">
<div className="menu-top">
<div className="menu-head">
  <p>SIGN UP FOR NEWSLETTER</p>
</div>
<div className="menu-txt">
  <p>Don't miss out on exciting promotions and the latest shopping news</p>
</div>
<div className="menu-input">
 <div> <input type="text" placeholder=' Your email address' /></div>
<div><Button btnmargin="0" btntxt="SUBSCRIBE"/></div>
</div>

</div>
<div className="menu-btm">
<ul>
  <li><i class="fa-brands fa-facebook"></i></li>
  <li><i class="fa-brands fa-twitter"></i></li>
  <li><i class="fa-brands fa-pinterest"></i></li>
  <li><i class="fa-brands fa-instagram"></i></li>
  <li><i class="fa-brands fa-linkedin"></i></li>
  <li><i class="fa-brands fa-youtube"></i></li>
</ul>

</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="footer">
          <p>Copyright © 2022. Designed by <span style={{cursor:"pointer" , color :"#ff5d1d"}} > SmartAddons.Com </span>All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
}

export default Body;

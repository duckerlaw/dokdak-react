import React from 'react'
import "./Main.css"
import { Carousel } from 'react-carousel-minimal';
import { Link, Outlet } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';


function Main() {
  const kyrieWEB1 = [
    {
      image: "https://www.amny.com/wp-content/uploads/2022/05/2022-04-27T092025Z_1770064726_MT1USATODAY18160287_RTRMADP_3_NBA-BOSTON-CELTICS-AT-BROOKLYN-NETS-1200x800.jpg?fbclid=IwAR11Av1CmCsUgDDHD2TR3gsgjxZ6P48b0RyHr758ZZi0qPljkkqXPOfbZTw",
      
    },
    {
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/K4WIR3DFVJECDPLZ4FS7ZX4A3Q.jpeg?fbclid=IwAR11Av1CmCsUgDDHD2TR3gsgjxZ6P48b0RyHr758ZZi0qPljkkqXPOfbZTw",
      
    },
    {
      image: "https://cdn-japantimes.com/wp-content/uploads/2023/02/np_file_209374.jpeg?fbclid=IwAR2GDFlzAcC77MXgN83ELEBCdX6w7SKoQnCY7H_JCeHNGc7J3Gl2PcjC0T8?fbclid=IwAR2GDFlzAcC77MXgN83ELEBCdX6w7SKoQnCY7H_JCeHNGc7J3Gl2PcjC0T8",
      
    },
    {
      image: "https://static01.nyt.com/images/2020/01/13/sports/13nba-kyrieWEB1/merlin_167052225_82cee84c-d59e-45f2-80c6-2b7cbaaa6461-superJumbo.jpg?fbclid=IwAR0iY2E8TF0s5qAw3LTQMLcZZn29n1fJLhT-hnFtfKFL5y4vC5Fh49NzJ7I",      
    },    
  ];

 
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    // ReactDOM.render( 
    <body>
      <section>
      <div className="App">
        <div style={{ textAlign: "center" }}>        
          <div style={{
            // padding: "0 20px"
          }}>
            <Carousel
              data={kyrieWEB1}
              time={3000}
              width="1040px"
              height="604px"
              captionStyle={captionStyle}
              // radius="10px"
              // slideNumber={true}
              // slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              // thumbnails={true}
              // thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "1040px",
                maxHeight: "604px",
                margin: "auto",
              }}
            />
          </div>
        </div>
      </div>
      </section>
      <section className='guidecontainer'>
        <div className="guide">
          <p>สินค้าแนะนำ Nike</p>
        </div>      
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          // dots={true}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >    
          <div>
            <Link to="/product" className='product'>
              <img
                alt=''
                src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/bd9a8dc3-01d4-41dc-a390-ef12addf1373/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89-air-jordan-37-low-pf-7z7ltC.png'
              />
            </Link>            
            <div className="textcontainer">
              <p className='texttype'>รองเท้าบาสเก็ตบอล</p>
              <p className='textname'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/fdd16a2f-3331-43e8-b779-523a55249816/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-ja-1-hunger-ep-XncH16.png'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/4b97494a-b21a-4b01-ac0e-fe0dac87f125/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-lebron-nxxt-gen-ep-bkxBVS.png'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/6ba1da85-7b21-462b-b0e7-cc7f36ef6f85/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-jordan-one-take-4-pf-cdsVn1.png'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/4b259023-d78d-4e10-884f-e15c63acb0b1/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-zion-2-full-moon-pf-fTg9sH.png'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/26577e0c-89d6-44e0-9f02-1eeb6c0bad9d/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-air-max-impact-4-CcJxBx.png'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/d926275d-2c7e-4ed5-8a1b-43084bc7e6da/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-hustle-500-11-q4t8cZ.png'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/193e9061-bb11-4dc4-8957-a0a21381430e/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-hustle-500-11-TBQxXL.png'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          
        </InfiniteCarousel>
        
      </section>
      <section className='guidecontainer'>
        <div className="guide">
          <p>สินค้าแนะนำ Adidas</p>
        </div>      
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          // dots={true}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >    
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/473980861bf445f4b7abaf410161f475_9366/Harden_Volume_7_HP3019_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/18db34d6ee3742de9c9caf32002715d8_9366/Trae_Young_2_IG5333_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05f03523d66542e0b954af15010bedfe_9366/D_Rose_Son_of_Chi_II_HQ1006_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/749a15ebcb5143c585f5af3b00f816ba_9366/Trae_Young_2.0_HQ0986_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd714851366a4df791a4afab01618a3f_9366/Crazy_1_FZ6208_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/74023f35ddfa4df38573af2901282ae7_9366/BYW_Select_IG4949_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78af8b4351064614a68caf010001e685_9366/Dame_Extply_2.0_HR0728_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08d1470293e44014bcb5af20014b42af_9366/D.O.N._Issue_4_HR0710_01_standard.jpg'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          
        </InfiniteCarousel>
        
      </section>
      <section className='guidecontainer'>
        <div className="guide">
          <p>สินค้าแนะนำ Under Armour</p>
        </div>      
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          // dots={true}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >    
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/1298306-016_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/3026272-700_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/3026282-100_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/3026281-700_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/3026052-600_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/3025632-001_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/3026276-402_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          <div>
            <img
              alt=''
              src='https://underarmour.scene7.com/is/image/Underarmour/3026273-602_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688'
            />
            <div className="textcontainer">
              <p className='textsection'>รองเท้าบาสเก็ตบอล</p>
              <p className='textbrand'>Air Jordan XXXVII Low PF</p>
              <p className='textprice'>฿6,400</p>
            </div>
          </div>
          
        </InfiniteCarousel>
        
      </section>
      <section className='brandlogo'>
        <div className="nikebrand">
          <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="" />
        </div>
        <div className="adidasbrand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" alt="" />
        </div>
        <div className="uabrand">
          <img src="https://1000logos.net/wp-content/uploads/2021/04/Under-Armour-logo.png" alt="" />
        </div>
      </section>
            
    </body>
    //  ,
    //  document.getElementById('root'))                 
       
  );
}



export default Main


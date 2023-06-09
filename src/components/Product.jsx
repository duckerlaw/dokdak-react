import React from 'react'
import "./Product.css"
import { Carousel } from 'react-carousel-minimal';
import InfiniteCarousel from 'react-leaf-carousel';

function Product() {
  const shoeslides = [
    {
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/28f581f1-975a-4df9-88b2-2ea2fb6d75f1/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89-air-jordan-37-low-pf-7z7ltC.png",

    },
    {
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/196fd404-a8b7-40ed-b191-6c979edc7ffb/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89-air-jordan-37-low-pf-7z7ltC.png",

    },
    {
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4e44ec51-9271-4bc9-bf3a-0354f7640e31/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89-air-jordan-37-low-pf-7z7ltC.png",

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
    <body>
      <section className='productitem'>
        <div className="productcontainer">
          <div className="productbox">
            <div className="App">
              <div style={{ textAlign: "center" }}>
                <div style={{
                  // padding: "0 20px"
                }}>
                  <Carousel
                    data={shoeslides}
                    width="775px"
                    height="510px"
                    captionStyle={captionStyle}
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                      textAlign: "center",
                      maxWidth: "775px",
                      maxHeight: "510px",
                      margin: "auto",
                      // margin: "41px 50px 50px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="containerdetail">
              <div className="producttext">
                <p className='productname'>Air Jordan XXXVII Low PF</p>
                <p className='producttype'>รองเท้าผู้ชาย</p>
                <p className='productprice'>฿6,400</p>
              </div>
              <div className="productsize">
                <button className="btnsize" onClick={() => console.log("us7")}>US 7</button>
                <button className="btnsize" onClick={() => console.log("us8")}>US 8</button>
                <button className="btnsize" onClick={() => console.log("us9")}>US 9</button>
                <button className="btnsize" onClick={() => console.log("us10")}>US 10</button>
                <button className="btnsize" onClick={() => console.log("us11")}>US 11</button>
                <button className="btnsize" onClick={() => console.log("us12")}>US 12</button>
                <button className="btnsize" onClick={() => console.log("us13")}>US 13</button>
              </div>
              <div className='containerbtn'>
                <button className="btnproduct" onClick={() => console.log("เพิ่มสินค้าลงตะกร้า")}>เพิ่มลงตะกร้า</button>
                <div id="main-content">
                  <div>
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox">
                      <svg className='svghearth' id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                          <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2" />
                          <circle id="main-circ" fill="#2B6B46" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                          <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                          </g>

                          <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                          </g>

                          <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                          </g>

                          <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                          </g>
                        </g>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: 125 }} />
      <section className='guideproduct'>
        <div className="guide">
          <p>สินค้าแนะนำ</p>
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
    </body>
  )
}

export default Product

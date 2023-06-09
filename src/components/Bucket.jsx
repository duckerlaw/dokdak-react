import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from "./Bucket.module.css"

function Bucket() {
  return (
    <body>
      <section>
        <div className={styles.bucketcontainer}>
          <div className={styles.bucketbox}>
            <Link to="/product" className='product'>
              <img className={styles.bucketimg}
                alt=''
                src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/bd9a8dc3-01d4-41dc-a390-ef12addf1373/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89-air-jordan-37-low-pf-7z7ltC.png'
              />
            </Link>
            <div className={styles.bucketdetail}>
              <div className={styles.bucketboxtext}>
                <p className={styles.bucketname}>Air Jordan XXXVII Low PF</p>
                <p className={styles.buckettype}>รองเท้าบาสเก็ตบอลผู้ชาย</p>
                <p className={styles.bucketprice}>฿ 6,400</p>
              </div>
              <button className={styles. bucketsize} onClick={() => console.log("size")}>เลือกไซส์</button>              
            </div>           
          </div>
        </div>        
      </section>
    </body>
  )
}

export default Bucket

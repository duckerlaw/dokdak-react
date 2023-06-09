import React, { useState } from "react";
import "./Signup.css"
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

function Signup() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const handleOnSubmit = async (e) => {
    console.log("Auth : ", auth);

    const { email, password, Cpassword, firstname, lastname, birthday } = auth;
    e.preventDefault();
    await axios
      .post("https://cute-teal-shrimp.cyclic.app/signup", {
        email,
        password,
        Cpassword,
        firstname,
        lastname,
        birthday,
      })
      .then((res) => {
        alert("SignUp successfully");        
        console.log(res.data);
      }).catch((err)=>{
        
        alert(err.response.data)
        // console.log("Err",)
      })
  };
  return (
    <section className="signincontainer">
      <div className="form-img">
        <img src="https://s3-alpha-sig.figma.com/img/548c/b7cd/2f940007274c895722400387bd9bab2f?Expires=1687132800&Signature=guo1jHpNPSEtpwv14F5Y5NdxOuU9xA27jsCeWhzGnWh3JlSwqa1-AlA5D8C9eIb3FonraBIuL59Kxhkx4iDEJcfa7I4LSnPCIxdA0-9GFEcOZA7~CY9Zj6vrteXhrD1x6WIYCDn1zUUKsfBH6IgUCkY5j4p1aYekUQc~8t35Gpcy~bR3lUdWTfdPO4s2iOSBclu3UMoxMoOV8HioejCzmNG7O9h6xqZc652x~GBviWtS95Za2kpaDlRBgVR4IwPLUdDt-Eg~CemnDnlr5JMGaeQ6x2FGlbFtwn621oR07FzBSZvIkUz2uO8XZ8q92965C~6YVpPbzwnr3LJvjFmcLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      </div>
      <form className="form-information" onSubmit={handleOnSubmit}>
        <div className="form-header">
          <ul>
            <li className="form-header1">สมัครใหม่</li>
            <li className="form-header2">l</li>
            <li className="form-header3"><Link to="/signin" className='signin-btn'>เข้าสู่ระบบ</Link></li>
          </ul>
        </div>
        <div className="form-inputemail">
          <input value={auth.email} type="email" placeholder="อีเมล" 
          onChange={(e) => setAuth({ ...auth, email: e.target.value })}/>
        </div>
        <div className="form-inputpsw">
          <input value={auth.password} type="password" placeholder="รหัสผ่าน" 
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}/>
        </div>
        <div className="form-inputpsw2">
          <input value={auth.Cpassword} type="password" placeholder="ยืนยันรหัสผ่าน" 
          onChange={(e) => setAuth({ ...auth, Cpassword: e.target.value })}/>
        </div>
        <div className="form-namecontainer">
          <div className="form-fname">
            <input value={auth.firstname} type="text" placeholder="ชื่อ"
            onChange={(e) => setAuth({ ...auth, firstname: e.target.value })}/>
          </div>
          <div className="form-lname">
            <input value={auth.lastname} type="text" placeholder="นามสกุล"
            onChange={(e) => setAuth({ ...auth, lastname: e.target.value })}/>
          </div>          
        </div>
        <div className="form-birthday">
            <input value={auth.birthday} type="date" placeholder="วัน/เดือน/ปี" 
            onChange={(e) => setAuth({ ...auth, birthday: e.target.value })}/>
        </div>
        <button className="btn" type="submit">เข้าสู่ระบบ</button>
        <div style={{ display: "flex" ,gap: 10,alignItems:"center" }}>
          <div className="checkbox-wrapper-12">
            <div className="cbx">
              <input id="cbx-12" type="checkbox" />
              <label htmlFor="cbx-12" />
              <svg width={15} height={14} viewBox="0 0 15 14" fill="none">
                <path d="M2 8.36364L6.23077 12L13 2" />
              </svg>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo-12">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation={4}
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                    result="goo-12"
                  />
                  <feBlend in="SourceGraphic" in2="goo-12" />
                </filter>
              </defs>
            </svg>
          </div>
          <p className="form-checkbox">ฉันได้อ่านและยอมรับเงื่อนไขการให้บริการ </p>          
        </div>
        
      </form>
    </section>
  )
}

export default Signup

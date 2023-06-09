import React, { useState } from "react";
import "./Signin.css";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const handleOnSubmit = async (e) => {
    console.log("Auth : ", auth);

    const { email, password } = auth;
    e.preventDefault();
    await axios
      .post("https://cute-teal-shrimp.cyclic.app/login", {
        email,
        password,
      })
      .then((res) => {
        alert("Login complete");        
        console.log(res.data);
      }).catch((err)=>{
        
        alert(err.response.data)
        // console.log("Err",)
      })
  };
  return (
    <>
      <section className="signincontainer">
        <div className="form-img">
          <img src="https://s3-alpha-sig.figma.com/img/548c/b7cd/2f940007274c895722400387bd9bab2f?Expires=1687132800&Signature=guo1jHpNPSEtpwv14F5Y5NdxOuU9xA27jsCeWhzGnWh3JlSwqa1-AlA5D8C9eIb3FonraBIuL59Kxhkx4iDEJcfa7I4LSnPCIxdA0-9GFEcOZA7~CY9Zj6vrteXhrD1x6WIYCDn1zUUKsfBH6IgUCkY5j4p1aYekUQc~8t35Gpcy~bR3lUdWTfdPO4s2iOSBclu3UMoxMoOV8HioejCzmNG7O9h6xqZc652x~GBviWtS95Za2kpaDlRBgVR4IwPLUdDt-Eg~CemnDnlr5JMGaeQ6x2FGlbFtwn621oR07FzBSZvIkUz2uO8XZ8q92965C~6YVpPbzwnr3LJvjFmcLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>

        <form className="form-information" onSubmit={handleOnSubmit}>
          <div className="form-header">
            <ul>
              <li className="form-header1">
                <Link to="/signup" className="signup-btn">
                  สมัครใหม่
                </Link>
              </li>
              <li className="form-header2">l</li>
              <li className="form-header3">เข้าสู่ระบบ</li>
            </ul>
          </div>
          <div className="form-inputemail">
            <input
              value={auth.email}
              type="email"
              placeholder="อีเมล"
              onChange={(e) => setAuth({ ...auth, email: e.target.value })}
            />
          </div>
          <div className="form-inputpsw">
            <input
              value={auth.password}
              type="password"
              placeholder="รหัสผ่าน"
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              เข้าสู่ระบบ
            </button>
          </div>
          
          {/* <div className="form-checkbox">
          <input type="checkbox" style={{ borderRadius: 2, color: "red" }} />
          ฉันได้อ่านและยอมรับเงื่อนไขการให้บริการ
        </div> */}
        </form>
      </section>
      {/* <Outlet /> */}
    </>
  );
}

export default Signin;

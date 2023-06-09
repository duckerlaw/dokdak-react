import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <>
        <nav className='navbar'>
            <section className='navbarcontainer'>
                <div className="logo">
                    <Link to="/" className='index'>
                        <img src='https://s3-alpha-sig.figma.com/img/3cd0/b9cf/3e5cf10ab5e242b8c30d3c6b70e9c563?Expires=1687132800&Signature=NDIknFg2KDzd~X1T65HXe9UVOGgBSrHtTdTJjQwl73-acazC2wcdyzv-S6UFfJgql0pxbaGjSmvB7wTIOlPCrFS3LyJYK8-Uh0w4srNmh-pGB9Ap9Lj0x89ZKRbcko2GVmlu-S1GydepK5ALFUMRGiCe7-l14Q~68PZaigS-nwlrZ2kJ8k3PRUzKaZlf3F-kkWS6IDYmPtsHletMebS4hKlwQU-DhlmclzBCpwWoWlPXF8rCaBjhTAr1YcpABeFpRY3W6DU46Q3JNvUVfJiH8523BnQp8SdtVn~gwgtfsugkCJUvAeuV1jtsGQfwTP3UwujsRS8TOvk4hHhhBnt~-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <h2 className='dk'>OKDAK</h2>
                    </Link>
                </div>
                <div className='menu'>
                    <div className='menu1'>
                        <ul>
                            <li><Link to="/male" className='male'>ผู้ชาย</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/female" className='female'>ผู้หญิง</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/kid" className='kid'>เด็ก</Link></li>
                        </ul>
                    </div>
                    <div className='menu2'>
                        <ul>
                            <li><Link to="/fav" className='fav'>&#9825;</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/bucket" className='bucket'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/signin" className='signin'>เข้าสู่ระบบ</Link></li>
                        </ul>
                    </div>
                </div>

            </section>
        </nav>
        <div style={{height:85}} />
    

    
    <Outlet/>
        
        <footer className='footer'>
            <p>&copy;2023 DOKDAK,lnc. สงวนลิขสิทธิ์</p>
        </footer>

    
        

     
        </>
    )
}

export default Navbar


import { Link } from 'react-router-dom'
import { SiStarbucks } from 'react-icons/si'
import { IoLocationSharp } from 'react-icons/io5'
import {GrNext, GrPrevious} from 'react-icons/gr'
import '../css/navbar.css'
import { useEffect, useState } from 'react'

export default function Navbar() {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [innerMobmenu, setInnerMobmneu] = useState(false)

    useEffect(()=>{
        if (mobileMenu){
            document.body.classList.add('prevent_scroll')
        }
        else{
            document.body.classList.remove('prevent_scroll')
        }
    }, [mobileMenu])

    return (
        <div className='navbar-container'>
            <nav className='navbar container'>
                <div className='desktop-navbar'>
                    <div className='logo-links-container'>
                        <Link to="/" className='logo'><SiStarbucks /></Link>
                        <ul>
                            <li>
                                <Link to="/">Menu</Link>
                            </li>
                            <li>
                                <Link to="/">Rewards</Link>
                            </li>
                            <li>
                                <Link to="/">Gift cards</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-links-right'>
                        <Link to="/" className='nav-location'>
                            <IoLocationSharp />
                            Find a store
                        </Link>
                        <div>
                            <Link to="/"><button className='nav-btn-secondary'>Sign in</button></Link>
                            <Link to="/"><button className='nav-btn-primary'>Join now</button></Link>
                        </div>
                    </div>
                </div>
                
                <div className='mobile-navbar'>
                    <Link to="/" className='logo'><SiStarbucks/></Link>
                    <div className={mobileMenu ? 'mobile-menu-lines active' :'mobile-menu-lines'} onClick={()=> {setMobileMenu(!mobileMenu); setInnerMobmneu(false)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={mobileMenu ? 'mobile-menu-links active'  : 'mobile-menu-links'}>
                        <ul>
                            <li className='has-children'><p onClick={()=> setInnerMobmneu(!innerMobmenu)}>Menu <GrNext className='next'/></p>
                                <div className={innerMobmenu ? 'inner-mob-menu active' :'inner-mob-menu'}>
                                    <p onClick={()=>setInnerMobmneu(!innerMobmenu)}><GrPrevious/>Menu</p>
                                    <ul>
                                        <li>All Products</li>
                                        <li>Featured</li>
                                        <li>Previous Orders</li>
                                        <li>Favorite Products</li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to='/'>Rewards</Link></li>
                            <li><Link to='/'>Gift Cards</Link></li>
                        </ul>
                        <div>
                            <div>
                                <Link><button className='nav-btn-secondary'>Sign in</button></Link>
                                <Link><button className='nav-btn-primary'>Join Now</button></Link>
                            </div>
                            <Link to='/' className='nav-location'><IoLocationSharp/>Find a store</Link>
                        </div>
                    </div>
                    <div className={mobileMenu ? 'mobile-menu-bg-overlay active' :'mobile-menu-bg-overlay'} onClick={()=> {setMobileMenu(!mobileMenu); setInnerMobmneu(false)}}></div>
                </div>
                
            </nav>
        </div>
    )
}
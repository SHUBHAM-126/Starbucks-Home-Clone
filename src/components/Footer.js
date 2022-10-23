import "../css/footer.css"
import {BsSpotify, BsFacebook, BsPinterest, BsInstagram, BsYoutube, BsTwitter} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {BsChevronDown} from 'react-icons/bs'

const mobile_dropdown_status = (e) => {
    const parent = e.target.parentElement;
    if (parent.classList.contains('active')){
        parent.classList.remove('active')
    }
    else{
        parent.classList.add('active')
    }
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="ft-main-links-container">
                <div>
                    <p onClick={(e) => mobile_dropdown_status(e)}>About us <BsChevronDown/></p>
                    <ul>
                        <li>Our company</li>
                        <li>Our coffee</li>
                        <li>Stories and news</li>
                        <li>Starbucks archive</li>
                        <li>Investor relations</li>
                        <li>Customer service</li>
                    </ul>
                </div>
                <div>
                    <p onClick={(e) => mobile_dropdown_status(e)}>Careers <BsChevronDown/></p>
                    <ul>
                        <li>Culture and values</li>
                        <li>Inclusion, diversity and equity</li>
                        <li>College achievement plan</li>
                        <li>Alumni community</li>
                        <li>US careers</li>
                        <li>International careers</li>
                    </ul>
                </div>
                <div>
                    <p onClick={(e) => mobile_dropdown_status(e)}>Social impact <BsChevronDown/></p>
                    <ul>
                        <li>People</li>
                        <li>Planet</li>
                        <li>Environment and social impact reporting</li>
                    </ul>
                </div>
                <div>
                    <p onClick={(e) => mobile_dropdown_status(e)}>For business partners <BsChevronDown/></p>
                    <ul>
                        <li>Landlord support center</li>
                        <li>Suppliers</li>
                        <li>Corporate gift card sales</li>
                        <li>Office and foodservice coffee</li>
                    </ul>
                </div>
                <div>
                    <p onClick={(e) => mobile_dropdown_status(e)}>Order and pickup <BsChevronDown/></p>
                    <ul>
                        <li>Order on the app</li>
                        <li>Order on the web</li>
                        <li>Delivery</li>
                        <li>Order and pickup options</li>
                        <li>Explore and find coffee for home</li>
                    </ul>
                </div>
            </div>

            <div className="ft-secondary">
                <div className="social-icons">
                    <Link to="#"><BsSpotify/></Link>
                    <Link to="#"><BsFacebook/></Link>
                    <Link to="#"><BsPinterest/></Link>
                    <Link to="#"><BsInstagram/></Link>
                    <Link to="#"><BsYoutube/></Link>
                    <Link to="#"><BsTwitter/></Link>
                </div>
                <div className="ft-sec-links">
                    <ul>
                        <li>Privacy policy</li>
                        <li>Terms of use</li>
                        <li>CA supply chain act</li>
                        <li>Cookie preferences</li>
                    </ul>
                </div>
                <p className="copyright_txt">© 2022 Starbucks Coffee Company. All rights reserved.</p>
            </div>
        </footer>
    )
}
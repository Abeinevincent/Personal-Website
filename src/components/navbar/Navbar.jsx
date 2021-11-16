import "./navbar.css";

function Navbar({ openMenu, setOpenMenu }) {
    return (
        <div className={openMenu ? "navbar active" : "navbar"}>
            <div className="navbarLeft">
                <div className="navbarLogo">
                    <h2>Mern Dev</h2>
                </div>
            </div>
            <div className="navbarCenter">
                <div className="navbarCenterItem">
                    {/* <Phone className="phoneIcon" /> */}
                    <a href="tel:+256779923503">
                        <span className="phoneIcon icon">P</span>
                    </a>
                    <a href="tel:+256779923503">
                        <span className="phoneNumber">+256779923503</span>
                    </a>
                </div>
                <div className="navbarCenterItem">
                    {/* <Mail className="emailIcon" /> */}
                    <a href="mailto:abeinevincent@gmail.com">
                        <span className="emailIcon icon">E</span>
                    </a>
                    <a href="mailto:abeinevincent@gmail.com">
                        <span className="emailAddress">abeinevincent@gmail.com</span>
                    </a>
                </div>
            </div>
            <div className="navbarRight">
                <div className="hambugerMenu" onClick={() => setOpenMenu(!openMenu)}>
                    <span className="line1 line"></span>
                    <span className="line2 line"></span>
                    <span className="line3 line"></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

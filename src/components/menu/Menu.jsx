import "./menu.css";

function Menu({ openMenu, setOpenMenu }) {
    return (
        <div className={openMenu ? "menu active" : "menu"}>
            <ul className="menuList">
                <li onClick={ () => setOpenMenu(false) }>
                    <a href="#home">Home</a>
                </li>
                <li onClick={ () => setOpenMenu(false) }>
                    <a href="#about">About</a>
                </li>
                <li onClick={ () => setOpenMenu(false) }>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={ () => setOpenMenu(false) }>
                    <a href="#services">Services</a>
                </li>
                <li onClick={ () => setOpenMenu(false) }>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={ () => setOpenMenu(false) }>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;

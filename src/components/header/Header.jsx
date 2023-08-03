import { Nav } from "../nav";
import Logo from '../../assets/logoBambu.png';

const Header = () => {
    return <header className="header">
        <div className="header__container container">
            <div className="header__item">
                <img src={Logo} />
            </div>
            <div className="header__item">
                <Nav />
            </div>
        </div>
    </header>
}

export default Header;
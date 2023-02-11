import './Header.css';
import { NavLink } from 'react-router-dom';
import { TfiAngleLeft } from 'react-icons/tfi';
import { BsFillGearFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Header = () => (
  <div className="header-cont">
    <div className="header-item">
      <nav>
        <NavLink to="/">
          <IconContext.Provider
            value={{ color: 'var(--enfasis-color)', size: '1rem' }}
          >
            <button className="nav-button" type="button" aria-label="Login">
              <TfiAngleLeft />
            </button>
          </IconContext.Provider>
        </NavLink>
      </nav>
    </div>
    <div className="header-item">
      <p className="cabin-700 page-title">COUNTRIES POPULATION</p>
    </div>
    <div className="header-item">
      <IconContext.Provider
        value={{ color: 'var(--enfasis-color)', size: '1rem' }}
      >
        <button className="nav-button" type="button" aria-label="Login">
          <BsFillGearFill />
        </button>
      </IconContext.Provider>
    </div>
  </div>
);

export default Header;

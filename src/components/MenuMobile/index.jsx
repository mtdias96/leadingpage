import PropTypes from 'prop-types';
import menu from '../../assets/icons/menu.svg';
import SmoothScroll from '../SmoothScroll';
import { Container } from './styles';

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container isVisible={menuIsVisible}>
      <button className="btn" type="button" onClick={() => setMenuIsVisible(false)}>
        <img src={menu} alt="menu" />
      </button>
      <nav>
        <li><SmoothScroll to="home">Home</SmoothScroll></li>
        <li><SmoothScroll to="product">Product</SmoothScroll></li>
        <li><SmoothScroll to="pricing">Pricing</SmoothScroll></li>
        <li><SmoothScroll to="about">About</SmoothScroll></li>
        <li><SmoothScroll to="contact">Contact</SmoothScroll></li>
      </nav>
    </Container>
  );
}

MenuMobile.propTypes = {
  menuIsVisible: PropTypes.bool,
  setMenuIsVisible: PropTypes.func,
};

MenuMobile.defaultProps = {
  menuIsVisible: false,
  setMenuIsVisible: () => { },
};

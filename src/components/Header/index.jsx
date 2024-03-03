import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconFace from '../../assets/icons/facebookIcon.svg';
import iconLink from '../../assets/icons/linkdinIcon.svg';
import menu from '../../assets/icons/menu.svg';
import iconTT from '../../assets/icons/twitterIcon.svg';
import SmoothScroll from '../SmoothScroll';
import { Container, MenuNavigate, SocialMedia } from './styles';

export default function Header({ setMenuIsVisible }) {
  return (
    <Container>
      <MenuNavigate>
        <li><SmoothScroll to="home">Home</SmoothScroll></li>
        <li><SmoothScroll to="product">Product</SmoothScroll></li>
        <li><SmoothScroll to="pricing">Pricing</SmoothScroll></li>
        <li><SmoothScroll to="about">About</SmoothScroll></li>
        <li><SmoothScroll to="contact">Contact</SmoothScroll></li>
      </MenuNavigate>

      <SocialMedia>
        <Link to="/">
          <img src={iconTT} alt="icon" />
        </Link>
        <Link to="/">
          <img src={iconFace} alt="icon" />
        </Link>
        <Link to="/">
          <img src={iconLink} alt="icon" />
        </Link>
      </SocialMedia>
      <buttton className="btn" onClick={() => setMenuIsVisible(true)}>
        <img src={menu} alt="menu" className="mobile" />
      </buttton>
    </Container>
  );
}

Header.propTypes = {
  setMenuIsVisible: PropTypes.bool.isRequired,
};

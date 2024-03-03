import iconFace from '../../assets/icons/facebookIcon.svg';
import iconLink from '../../assets/icons/linkdinIcon.svg';
import iconTT from '../../assets/icons/twitterIcon.svg';
import iconPhone from '../../assets/icons/whitephone.svg';
import map from '../../assets/icons/whitmap.svg';
import {
  ContactContainer,
  Container, Content, Info, InfoContainer, PagesContainer, SocialMedia,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <PagesContainer>
          <h3>Pages</h3>
          <a href="/#">Home</a>
          <a href="/#">Product</a>
          <a href="/#">Pricing</a>
          <a href="/#">About</a>
          <a href="/#">Contact</a>
        </PagesContainer>
        <InfoContainer>
          <h3>Information</h3>
          <a href="/#">FAQ</a>
          <a href="/#">Blog</a>
          <a href="/#">Support</a>
        </InfoContainer>
        <ContactContainer>
          <Info>
            <img src={map} alt="location" />
            <span>
              6386 Spring St undefined
            </span>
          </Info>
          <Info>
            <img src={iconPhone} alt="phone" />
            <span>
              (239) 555-0108
            </span>
          </Info>
          <SocialMedia>
            <img src={iconTT} alt="twit" />
            <img src={iconFace} alt="face" />
            <img src={iconLink} alt="linkdin" />
          </SocialMedia>
        </ContactContainer>
      </Content>
    </Container>
  );
}

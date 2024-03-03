import { Button } from '../../components/Button';
import {
  Contact,
  ContactInfo,
  Container, ContainerContact, ContainerInfo, ContainerText, Content, Info, Input,
  SocialMedia, TextArea,
} from './styles';

import email from '../../assets/icons/email.svg';
import facebook from '../../assets/icons/facebook.svg';
import linkidin from '../../assets/icons/linkdin.svg';
import map from '../../assets/icons/map.svg';
import phone from '../../assets/icons/phone.svg';
import twitter from '../../assets/icons/twitter.svg';
import googleMaps from '../../assets/images/googlemaps.png';

export default function ContactUs() {
  return (
    <Container id="contact">
      <Content>
        <ContainerText>
          <h2>Contact Us</h2>
          <h4>
            Most calendars are designed for teams.
            Slate is designed for freelancers
          </h4>
        </ContainerText>
        <ContainerContact>
          <Contact>
            <h3>Contact Us</h3>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <TextArea placeholder="Your Message" />
            <Button>Send</Button>
          </Contact>
          <ContainerInfo>
            <ContactInfo>
              <Info>
                <img src={map} alt="location" />
                <span>
                  6386 Spring St undefined Anchorage,
                  Georgia 12473 United States
                </span>
              </Info>
              <Info>
                <img src={phone} alt="phone" />
                <span>
                  (843) 555-0130
                </span>
              </Info>
              <Info>
                <img src={email} alt="location" />
                <span>
                  willie.jennings@example.com
                </span>
              </Info>
            </ContactInfo>
            <img className="maps" src={googleMaps} alt="iconMaps" />
            <SocialMedia>
              <img src={twitter} alt="twit" />
              <img src={facebook} alt="face" />
              <img src={linkidin} alt="linkdin" />
            </SocialMedia>
          </ContainerInfo>
        </ContainerContact>
      </Content>

    </Container>
  );
}

import { useMediaQuery } from 'react-responsive';
import { Button } from '../../components/Button';
import {
  Container, ContainerImage, ContainerText, Content,
} from './styles';

import grip from '../../assets/icons/grip.svg';
import macImage from '../../assets/images/macbook.png';

export default function Hero() {
  const isMobileText = useMediaQuery({ maxWidth: 1168 });
  return (
    <Container id="about">
      <Content>
        <ContainerText>
          <h2>Fastest way to organize</h2>
          <h4>
            {isMobileText
              ? 'Most calendars are designed for teams.'
              : 'Most calendars are designed for teams. Slate is designed for freelancers'}
          </h4>

          <Button>Try For Free</Button>
        </ContainerText>

        <ContainerImage>
          <img src={macImage} alt="macbook" />
          <img src={grip} alt="macbook" className="icon" />
        </ContainerImage>
      </Content>
    </Container>
  );
}

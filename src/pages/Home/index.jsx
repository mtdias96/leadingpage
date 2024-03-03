import { useState } from 'react';
import { Button } from '../../components/Button';
import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import { BackgroundHome, Container, TextContainer } from './styles';

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <BackgroundHome>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>

        <TextContainer>
          <h1>
            The best products
            start with Figma
          </h1>
          <span>
            AMost calendars are designed for teams. Slate is designed
            for freelancers
          </span>

          <Button type="button">Experimente gratuitamente</Button>
        </TextContainer>

      </Container>
    </BackgroundHome>
  );
}

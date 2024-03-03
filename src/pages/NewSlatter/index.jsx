import { useMediaQuery } from 'react-responsive';
import emailIMG from '../../assets/images/email.png';
import { Button } from '../../components/Button';
import {
  Container,
  ContainerEmail, ContainerImage,
  ContainerNewSlatter,
  ContainerSubscribe,
  ContainerText,
  Content,
  Input,
} from './styles';

export default function NewSlatter() {
  const isMobileText = useMediaQuery({ maxWidth: 1168 });
  return (
    <Container>
      <Content>
        <ContainerImage>
          <img src={emailIMG} alt="email" />
        </ContainerImage>
        <ContainerNewSlatter>
          <ContainerText>
            <h3>At your fingertips</h3>
            <h2>
              {isMobileText
                ? 'Newsletter'
                : 'Lightning fast prototyping'}
            </h2>
          </ContainerText>

          <ContainerSubscribe>
            <span>Subscribe to our Newsletter</span>
            <p>Available exclusivery on Figmaland</p>

            <ContainerEmail>
              <Input placeholder="Your Email" />
              <Button className="btn">Subscribe</Button>
            </ContainerEmail>

          </ContainerSubscribe>
        </ContainerNewSlatter>
      </Content>
    </Container>
  );
}

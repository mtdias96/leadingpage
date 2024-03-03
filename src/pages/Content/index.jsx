import { useMediaQuery } from 'react-responsive';
import icon1 from '../../assets/icons/circ.svg';
import elipse from '../../assets/icons/elipse.svg';
import icon2 from '../../assets/icons/paint.svg';
import icon3 from '../../assets/icons/paint2.svg';
import play from '../../assets/icons/play.svg';
import img from '../../assets/images/screen.png';
import imgMob from '../../assets/images/screen2.png';
import {
  Container, FeatureItem, FeaturesContainer, ImageContainer, TextHeader,
} from './styles';

export default function Content() {
  const isMobileText = useMediaQuery({ maxWidth: 768 });
  const isMobileImage = useMediaQuery({ maxWidth: 768 });
  return (
    <Container id="product">
      <TextHeader>
        <h2>Features</h2>
        <h4>
          {isMobileText
            ? 'Most calendars are designed for teams.'
            : 'Most calendars are designed for teams. Slate is designed for freelancers.'}
        </h4>
      </TextHeader>

      <FeaturesContainer>
        <FeatureItem>
          <img src={icon1} alt="circulo" />
          <h3>
            OpenType features
            Variable fonts
          </h3>
          <p>
            Slate helps you see how
            many more days you need
            to work to reach your
            financial goal.
          </p>
        </FeatureItem>
        <FeatureItem>
          <img src={icon2} alt="circulo" />
          <h3>Design with real data</h3>
          <p>
            Slate helps you see how
            many more days you need
            to work to reach your
            financial goal.
          </p>
        </FeatureItem>
        <FeatureItem>
          <img src={icon3} alt="circulo" />
          <h3>Design with real data</h3>
          <p>
            Slate helps you see how
            many more days you need
            to work to reach your
            financial goal.
          </p>
        </FeatureItem>
      </FeaturesContainer>

      <ImageContainer>
        {isMobileImage
          ? <img className="img" src={imgMob} alt="img" />
          : <img className="img" src={img} alt="img" />}
        <img src={elipse} alt="icon" className="iconPlay" />
        <img src={play} alt="icon2" className="play" />
      </ImageContainer>
    </Container>
  );
}

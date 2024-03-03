import IBM from '../../assets/images/ibm.svg';
import { Button } from '../../components/Button';
import { Container, ContainerIBM } from './stykes';

export default function Testimonials() {
  return (
    <Container>
      <h2>Testimonials</h2>

      <ContainerIBM>
        <img src={IBM} alt="logo" />
        <h4>
          Most calendars are designed for teams. Slate is designed for freelancers
          who want a simple way to plan their schedule.
        </h4>
      </ContainerIBM>
      <Button>More Testimonials</Button>
    </Container>
  );
}

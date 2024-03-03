import { useMediaQuery } from 'react-responsive';
import Card from '../../components/Card';
import { Container, ContainerCard, ContainerText } from './styles';

export default function Pricing() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Container id="pricing">
      <ContainerText>
        <h2>Pricing</h2>
        <h4>
          {isMobile
            ? 'Most calendars are designed for teams.'
            : ' Most calendars are designed for teams. Slate is designed for freelancers'}

        </h4>
      </ContainerText>
      <ContainerCard>
        <Card
          tittle="FREE"
          subtitle="Organize across all apps by hand"
          price="0"
        />
        <Card
          tittle="SATANDARD"
          subtitle="Organize across all apps by hand"
          price="10"
          select
        />
        <Card
          tittle="BUSINESS"
          subtitle="Organize across all apps by hand"
          price="99"
        />
      </ContainerCard>
    </Container>
  );
}

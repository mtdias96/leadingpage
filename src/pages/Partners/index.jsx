import { useMediaQuery } from 'react-responsive';
import amazon from '../../assets/images/amazon.png';
import dropbox from '../../assets/images/dropbox.png';
import google from '../../assets/images/google.svg';
import microsoft from '../../assets/images/microsoft.png';

import uber from '../../assets/images/uber.png';
import { Button } from '../../components/Button';
import {
  Container, ContainerPartners, ContainerText, Partner,
} from './style';

export default function Partners() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const partners = [
    { name: 'Client Name', logo: google },
    { name: 'Client Name', logo: amazon },
    { name: 'Client Name', logo: microsoft },
    { name: 'Client Name', logo: uber },
    { name: 'Client Name', logo: dropbox },
    { name: 'Client Name', logo: google },
    { name: 'Client Name', logo: uber },
    { name: 'Client Name', logo: amazon },
  ];
  const renderedPartners = isMobile ? partners.slice(0, 3) : partners;

  return (
    <Container>
      <ContainerText>
        <h2>Partners</h2>
        <h4>
          Most calendars are designed for teams.
          Slate is designed for freelancers
        </h4>
      </ContainerText>
      <ContainerPartners>
        {renderedPartners.map((partner) => (
          <Partner key={partners.logo}>
            <h5>{partner.name}</h5>
            <img src={partner.logo} alt="logo" />
          </Partner>
        ))}
      </ContainerPartners>
      <Button>Try For Free </Button>
    </Container>
  );
}

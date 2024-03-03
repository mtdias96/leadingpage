import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ContainerCard, ContainerPrice, ContainerText } from './styles';

export default function Card({
  tittle, subtitle, price, select,
}) {
  return (
    <ContainerCard select={select}>
      <ContainerText select={select}>
        <h3>{tittle}</h3>
        <h5>{subtitle}</h5>
      </ContainerText>
      <ContainerPrice select={select}>
        <h1>{price}</h1>
        <span>
          $
          <p>Per Month</p>
        </span>
      </ContainerPrice>
      <span>Pricing Feature</span>
      <span>Pricing Feature</span>
      <span>Pricing Feature</span>
      <span>Pricing Feature</span>
      <span>Pricing Feature</span>

      <Button select={select}>Order Now</Button>
    </ContainerCard>
  );
}

Card.propTypes = {
  tittle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  select: PropTypes.bool,
};

Card.defaultProps = {
  select: false,
};

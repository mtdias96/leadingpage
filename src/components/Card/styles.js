import styled, { css } from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  width: 335px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  border: 1px solid #DEDEDE;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);

  ${(props) => props.select && css`
  padding: 83px 40px;
  background: #2091F9;
  color: #fff;

  h3, h5, h1, span, p {
      color: #fff;
    }

  `}

  @media (max-width:768px) {
    width: 300px;
  }
`;

export const ContainerText = styled.div`
  text-align: center;
h3{
    color: ${({ select }) => (select ? '#fff' : '#252B42')};
    font-family: Graphik;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.1px;
  }

  h5{
    color: ${({ select }) => (select ? '#fff' : '#252B42')};
    width: 148px;
    text-align: center;
    font-family: Graphik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.1px;
  }

`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  flex: 1;

  h1 {
    padding: 0 10px;
    color: ${({ select }) => (select ? '#fff' : '#252B42')};
    font-family: Graphik;
    font-size: 84px;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0.2px;
  }

  span {
    color: ${({ select }) => (select ? '#fff' : '#252B42')};
    font-family: Graphik;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 0.1px;
  }

  p{
    color: ${({ select }) => (select ? '#FFF' : '#252B42')};
    font-family: Graphik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.1px;
  }


`;

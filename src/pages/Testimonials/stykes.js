import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 111px;
  display: flex;
  padding: 5% 5%;
  flex-direction: column;
  align-items: center;
  gap: 91px;

  h2{
    color: var(--text, #252B42);
    text-align: center;
    font-family: Graphik;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: 0.2px;
  }
`;

export const ContainerIBM = styled.div`
  max-width: 997px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  img{
    width: 149.854px;
    height: 60px;
  }

  h4{
    color: var(--second-text, #374754);
    text-align: center;
    font-family: Graphik;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0.2px;
  }
`;

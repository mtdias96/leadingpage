import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 111px;
  display: flex;
  padding: 5% 5%;
  flex-direction: column;
  align-items: center;
  gap: 91px;
  background: ${({ theme }) => theme.colors.dark};
`;

export const ContainerText = styled.div`
    text-align: center;
    width: 500px;

    h2{
      color: var(--Light-text, #FFF);
      font-family: Graphik;
      font-size: 48px;
      font-weight: 400;
      line-height: 55px;
      letter-spacing: 0.2px;
      margin-bottom: 27px;
    }

    h4{
      color: var(--Light-text, #FFF);
      font-family: Graphik;
      font-size: 28px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: 0.2px;


      @media (max-width: 768px ) {
        font-size: 22px;
      }
    }

    @media (max-width: 768px ) {
        width: 180px;
      }
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;



  @media (max-width: 1200px ) {
      flex-direction: column;
  }
`;

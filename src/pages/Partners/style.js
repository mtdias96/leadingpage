import styled from 'styled-components';

export const Container = styled.section`
margin-top: 111px;
display: flex;
padding: 5% 5%;
flex-direction: column;
align-items: center;
gap: 91px;


@media screen {

}
`;

export const ContainerText = styled.div`
  max-width: 522px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;

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

  h4{
    color: var(--second-text, #374754);
    text-align: center;
    font-family: Graphik;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0.2px;
  }
`;

export const ContainerPartners = styled.div`
  max-width: 1075px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Partner = styled.div`
  display: flex;
  padding: 31px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid #ccc;
  flex: 1;


  img{
    max-width: 293px;
    height: 48px;
  }
`;

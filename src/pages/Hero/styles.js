import styled from 'styled-components';

export const Container = styled.section`
margin-top: 50px;
display: flex;
padding: 5% 5%;
flex-direction: column;
align-items: center;
gap: 10px;


@media (max-width: 956px) {
    margin-top: 110px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 43px 0px;
  align-items: center;
  gap: 50px;

  @media (max-width: 956px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 27px;

  h2 {
    width: 100%;
    max-width: 335px;
    font-family: Graphik;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.2px;
    color: var(--text, #252B42);


  }

  h4 {
    width: 100%;
    max-width: 532px;
    font-size: 28px;
    font-family: Graphik;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 0.2px;
    color: var(--second-text, #374754);
    margin-bottom: 48px;

    @media (max-width: 768px) {
      width: 250px;
      font-size: 30px;
      line-height: 40px;
    }
  }

  @media (max-width: 1200px) {
      width: 100%;
      max-width: none;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 30px;
    }
`;

export const ContainerImage = styled.div`
display: flex;
flex-direction: column;
max-width: 624.464px;
border-radius: 16.19px 16.19px 0px 0px;
border: 5.397px solid #9FA2A5;
border-bottom: 8px solid #9FA2A5;
background: #000;

img{
  border: 4px solid #000;

  @media (max-width: 680px) {
    width: 280.146px;
  }
}

.icon{
max-width: 500px;
height: 12px;

}
`;

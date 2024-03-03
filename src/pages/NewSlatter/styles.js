import styled from 'styled-components';

export const Container = styled.section`
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
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 3% 0;
  align-items: center;
  gap: 80px;


  @media (max-width: 1208px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 854.233px;
  gap: 5%;

  img {
    width: 100%;
    height: auto;
    max-width: 677px;
    max-height: 514px;
  }
`;

export const ContainerNewSlatter = styled.div`
display: flex;
max-width: 544px;
padding: 0 5%;
flex-direction: column;
gap: 15px;

`;
export const ContainerText = styled.div`
  h3{
    color: var(--text, #252B42);
    font-family: Graphik;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.1px;
  }

  h2{
    color: var(--text, #252B42);
    font-family: Graphik;
    font-size: 48px;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: 0.2px;
  }
`;
export const ContainerSubscribe = styled.div`
margin-top: 25px;
display: flex;
flex-direction: column;
justify-content: center;

span{
  color: var(--text, #252B42);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.1px;
}

p{
  color: var(--second-text, #374754);
  font-family: Graphik;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.2px;
}

@media (max-width: 1208px) {
  margin-top: 17px;
}
`;

export const Input = styled.input`
display: flex;
max-width: 273px;
padding: 19px 39px;
flex-direction: column;
align-items: flex-start;
gap: 64px;
border-radius: 39px;
border: 1px solid #E8E8E8;
background: #F4F4F4;

&:focus{
    outline: none;
  }
::placeholder {
  color: var(--Background, #18171D);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1px;
  }


`;
export const ContainerEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 34px 0px;

  .btn{
    width: 10000px;
  }

  @media (max-width: 1208px) {
    flex-direction: column;
    gap: 12px;

    .btn{
      width: 273px;
    }
  }
`;

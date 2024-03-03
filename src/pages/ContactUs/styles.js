import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 111px;
  display: flex;
  padding: 5% 5%;
  flex-direction: column;
  align-items: center;
  gap: 91px;

`;
export const Content = styled.div`
width: 100%;
max-width: 1228px;
display: flex;
padding: 50px 0px;
flex-direction: column;
align-items: center;
gap: 50px;

@media (max-width: 937px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ContainerText = styled.div`
  text-align: center;
  max-width: 532px;
  margin-bottom: 50px;

  h2{
    margin-bottom: 20px;
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
    color: var(--text, #252B42);
    text-align: center;
    font-family: Graphik;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0.2px;
  }

  @media (max-width: 937px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;
export const ContainerContact = styled.div`
  width: 100% ;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 937px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Contact = styled.div`
  display: flex;
  height: 669px ;
  padding: 22px 22px;
  justify-content: center;
  flex-direction: column;
  gap: 45px;
  border-radius: 20px;
  border: 1px solid #DDD;
  background: #FFF;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);

  h3{
    color: #252B42;
    text-align: center;
    font-size: 28px;
  }

  @media (max-width: 937px) {
    order: 3;
  }
`;
export const Input = styled.input`
  display: flex;
  padding: 19px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 47px;
  align-self: stretch;
  border-radius: 39px;
  border: 1px solid #E8E8E8;
  background: #F5F5F5;
  outline: none;
`;
export const TextArea = styled.textarea`
display: flex;
height: 147px;
padding: 23px ;
align-items: center;
align-self: stretch;
overflow-y: hidden;
border: 1px solid #E8E8E8;
background: #F5F5F5;
outline: none;
`;
export const ContainerInfo = styled.div`
width: 725px;
display: flex;
flex-direction: column;
align-items: center;
gap: 80px;


img{
    width: 516px;
  }

  @media (max-width: 937px) {
    flex-direction: column;
    width: 100%;

    .maps{
      display: none;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;

  @media (max-width: 937px) {
    order: 2;
    gap: 10px;
    margin-left: 35px;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;

  img{
    width: 26px;
    height: 32px;
  }

  span{
    color: #374754;
    text-align: center;
    line-height: 23px;
    letter-spacing: 0.1px;
  }

  @media (max-width: 937px) {
    flex-direction: row;
    width: 300px;
    gap: 20px;


    span{
      text-align: left;
    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  img{
    width: 40.987px;
    height: 40.987px;
  }


  @media (max-width: 937px) {
   justify-content: center;
  }
`;

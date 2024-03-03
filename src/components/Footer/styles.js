import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  padding: 150px 0px;
  align-items: center;
  justify-content: center;
  align-items: center;
  background:${({ theme }) => theme.colors.dark} ;

  h3{
    color:  #FFF;
    font-family: Graphik;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.1px;
  }
  a{
    color:  #ccc;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
  }
`;

export const Content = styled.div`
display: flex;
gap: 130px;
justify-content: space-between;


@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 500px) {
     text-align: center;
    }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
width: 100%;
display: flex;
justify-content: start;
align-items: center;
gap: 8px;
color: #fff;
img{
width: 46px;
height: 46px;
}


& + & {
  margin-top: 16px;
}
`;
export const SocialMedia = styled.div`
width: 100%;
  margin-top: 36px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
`;

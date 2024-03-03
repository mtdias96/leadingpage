import styled from 'styled-components';
import backGroundImage from '../../assets/images/bg2.png';

export const Container = styled.div`
display: flex;
width: 100%;
padding: 80px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 826px;
  height: 335px;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
  padding: 20px;

  @media (max-width: 768px) {
        display: flex;
        justify-content: end;
        gap: 44px;
    }

  h1 {
    text-align: center;
    color: #fff;
    font-size: 4.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0.2px;

    @media (max-width: 768px) {
      font-size: 2.6rem;
      line-height: 60px;
    }
  }

  span {
    display: block;
    text-align: center;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.text.light};
    margin-bottom: 64px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 30px;
      margin-bottom: 0;

    }
  }
`;

export const BackgroundHome = styled.div`
  background-image: url(${backGroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1030px;

  @media (max-width: 1775.766px) {
    height: 930px;
  }

    @media (max-width: 768px) {
      height: 800px;
    }
`;

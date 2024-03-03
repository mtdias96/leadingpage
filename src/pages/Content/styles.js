import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 61px;
  width: 100%;
  height: 1300px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextHeader = styled.div`
  max-width: 500px;
  h2{
    color: var(--text, #252B42);
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    line-height: 65px;
    letter-spacing: 0.2px;
  }

  h4{
    margin-top: 27px;
    color: var(--second-text, #374754);
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0.2px;

    @media (max-width: 400px) {
      width: 265px;
      height: 80px;
      font-size: 28px;
    }
  }
  @media (max-width: 768px) {
    order: 1;
  }
`;

export const FeaturesContainer = styled.div`

  display: flex;
  justify-content: space-between;
  gap: 76px;
  margin-top: 88px;

  @media (max-width: 768px) {
    flex-direction: column;
    order: 3;
  }
`;

export const FeatureItem = styled.div`
    display: flex;
    width: 194px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;

  img{
    width: 61px;
    height: 61px;
  }

  h3{
    color: var(--text, #252B42);
    text-align: center;
    font-family: Graphik;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.1px;
  }

  p{
    color: var(--second-text, #374754);
    text-align: center;
    font-family: Graphik;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.2px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .img {
    width: 100%;
    height: auto;
    max-width: 1177.341px;
    max-height: 658.303px;
    flex-shrink: 0;
  }
  .iconPlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: pointer;


    @media (max-width: 768px) {
    width: 61.421px;
    height: 61.421px;
  }
  }

  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 15.355px;
      height: 15.355px;
  }
  }

  @media (max-width: 768px) {
    order:2;
    margin-top: 42px;
  }
`;

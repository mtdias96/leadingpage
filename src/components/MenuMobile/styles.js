import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    backdrop-filter: blur(9px) ;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    pointer-events: none ;
    opacity: 0;
    background: transparent;
    transform: translateY(50px);

    img{
      position: absolute;
      top: 1rem;
      right: 1rem;
      transform: rotate(45deg);
      transition: .7s;
    }

    .btn{
      background: transparent;
      top: 1rem;
      right: 1rem;
    }

    nav{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    }

    a{
    color: ${({ theme }) => theme.colors.text.light};
    font-size: 28px;
    font-weight: 600;
    line-height: 1;
    font-family: 'Courier New', Courier, monospace;

    &:hover{
      color: #FFF;
    }

  }
    ${({ isVisible }) => isVisible && css`
      opacity: 1;
      pointer-events: auto ;
      transform: translateX(0px);


      img{
        transform: rotate(0deg);
      }
    `}
`;

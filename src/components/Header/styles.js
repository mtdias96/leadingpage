import styled from 'styled-components';

export const Container = styled.header`
  padding: 3.3rem 3.125rem 4rem 3.125rem;
  display: flex;
  justify-content: space-evenly;
  align-items:center ;

  .btn{
    display: none;

    @media (max-width: 768px ) {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    list-style: none;
    font-style: normal;

  }
  }

  .btn{
    width: 100%;
  }

  a{
    cursor: pointer;
  }
`;

export const MenuNavigate = styled.nav`
  display: flex;
  gap: 2.5625rem;

  a{
    color: ${({ theme }) => theme.colors.text.light};
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
    font-family: 'Courier New', Courier, monospace;

    &:hover{
      color: #FFF;
    }
  }

  @media (max-width: 773px) {
    display: none;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1.5rem;
  img{
    width: 1.25rem;

  }

  a{
    width: 1.25rem;
  }
  @media (max-width: 773px) {
    display: none;
  }
`;

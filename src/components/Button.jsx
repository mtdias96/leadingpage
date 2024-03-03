import styled, { css } from 'styled-components';

export const Button = styled.button`
display: flex;
width: 236px;
padding: 16px 0px;
flex-direction: column;
align-items: center;
border-radius: 35px;
border: 1px solid transparent;
color: #FFF;
background: var(--Primary, #2091F9);
transition: all 0.4s ease-in;


&:hover{
  background: #4ea9fb;
}

${(props) => props.select && css`
  background: #fff;
  color: #2091F9;
  transition: all 0.4s ease-in;

  &:hover{
   background #2091F9;
   color: #fff;
   transition: all .6s ease-in;
}
  `}
`;

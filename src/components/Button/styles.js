import styled from "styled-components"

export const WrapButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 32px;
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: ${props => props.width};
  justify-content: center;
  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
  border-radius: 30px;
  /* Buttons */
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: left;
  cursor: pointer;
  /* SUNRISE / White */
  a {
    text-decoration: none;
    color: ${props => props.color};
  }
  &:hover a {
    color: white;
  }
  @media screen and (max-width: 400px) {
    /* width: 80vw; */
  }
`

import styled from "styled-components"

export const WrapSavjeti = styled.div`
  position: relative;
  width: 621px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 1300px) {
    width: 821px;

    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;

    margin: 0 auto;
  }
`
export const Title = styled.div`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  height: 77px;
  /* or 36px */
  width: 100%;
  color: #ffffff;
  text-align: center;
  background: #32bde3;
  border-radius: 14px 14px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 560px) {
    font-size: 23px;
    border-radius: 0;
  }
`
export const WrapQuestion = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background-color: ${props => (props.isOpen ? `#32BDE3 !important` : `white`)};
  /* &:nth-child(n) {
    background-color: blue;
  } */
  .accordionContent {
    color: black;
  }
  @media screen and (max-width: 560px) {
    padding: 8px 0;
  }
`

export const WrapQ = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* background: rgba(50, 189, 227, 0.16); */
  /* &:nth-child(n + 2) {
    background-color: blue;
  } */

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Question = styled.div`
  position: relative;
  width: 80%;
  height: 62px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 32px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  color: ${props => (props.isOpen ? `black !important` : ``)};
  font-weight: ${props => (props.isOpen ? `bold` : ``)};

  /* SUNRISE/Coral */

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`
export const Para = styled.div`
  position: relative;
  width: 100%;
  /* height: auto; */
  max-height: 150px;
  padding-left: 32px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE/Coral */

  color: #32bde3;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

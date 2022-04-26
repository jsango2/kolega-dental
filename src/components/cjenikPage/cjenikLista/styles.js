import styled from "styled-components"

export const WrapSekcija = styled.div`
  position: relative;
  width: 513px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0 auto 30px auto;
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
  background: #32bde3;
  border-radius: 14px 14px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    border-radius: 0px;
  }
`
export const WrapPrice = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0 45px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  background-color: white;
  &:nth-child(odd) {
    background-color: #def8fe;
  }
  /* or 22px */

  /* SUNRISE/Coral */

  color: #32bde3;
  /* &:nth-child(n) {
    background-color: blue;
  } */
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
  @media screen and (max-width: 500px) {
    padding: 0 25px;
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

  /* SUNRISE/Coral */

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
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

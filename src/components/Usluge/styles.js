import styled from "styled-components"
import tockice from "../../../content/assets/tockice.svg"

export const UslugeWrap = styled.div`
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: auto;
  background-color: #32bde312;
  padding-top: 82px;
  padding-left: 118px;
  @media screen and (max-width: 1000px) {
    padding-left: 0;
  }
  @media screen and (max-width: 500px) {
    padding-left: 40px;
  }
`
export const NaslovUsluge = styled.h1`
  font-family: Buenard;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  color: #32bde3;
  margin-bottom: 40px;
  @media screen and (max-width: 1000px) {
    padding-left: 118px;
  }
  @media screen and (max-width: 500px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    padding-left: 0px;
  }
`
export const ParagraphText = styled.h1`
  width: 718px;
  height: auto;
  left: 121px;
  top: 951px;

  /* B */

  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 53px;
  /* or 22px */

  color: #37313c;

  opacity: 0.8;
  @media screen and (max-width: 1000px) {
    padding-left: 118px;
    width: 80vw;
  }
  @media screen and (max-width: 500px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    padding-left: 0;
    width: 80vw;
  }
`
export const Rectangle = styled.div`
  height: 227px;
  width: 449px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.1;
  position: absolute;
  left: -90px;
  top: 39px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Rectangle2 = styled.div`
  height: 422px;
  width: 449px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.1;
  position: absolute;
  right: -90px;
  top: 59%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Rectangle3 = styled.div`
  height: 227px;
  width: 609px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.1;
  position: absolute;
  right: -90px;
  bottom: -100px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapTockice = styled.div`
  height: 227px;
  width: 300px;
  background-image: url(${tockice});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: -90px;
  top: 59%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Usluge = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapCard = styled.div`
  position: relative;
  z-index: 2;
  width: 43%;
  min-width: 410px;
  height: 190px;
  display: flex;
  background-color: white;
  border-radius: 20px;
  margin: 8px 16px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 15px -2px #dceef2;
  box-shadow: 5px 5px 15px -2px #dceef2;
  @media screen and (max-width: 1000px) {
    width: 83%;
    margin: 8px auto;
  }
  @media screen and (max-width: 500px) {
    width: 47%;
    height: 208px;
    min-width: 108vw;
    left: -80px;
  }
`
export const WrapTitleText = styled.div`
  width: 60%;
  padding: 23px 35px 0 20px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapPhoto = styled.div`
  width: 40%;
  height: 100%;
  padding: 23px 35px 0 11px;
  background: url(${props => props.photo}) no-repeat center;

  background-size: cover;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const CardTitle = styled.h2`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  color: #000000;
  margin-bottom: 7px;
  @media screen and (max-width: 460px) {
    max-width: 100px;
    font-size: 19px;
  }
`
export const CardText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* or 144% */

  letter-spacing: 0.5px;

  color: #37313c;
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    min-width: 160px;
    font-size: 14px;
  }
`
export const WrapSitneTockice = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

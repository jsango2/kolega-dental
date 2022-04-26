import styled from "styled-components"
import heroimage from "../../../../content/assets/onamahero.png"

export const HeroWrap = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  width: 100vw;
  height: 373px;
  background-color: #c4c4c4;
  /* overflow-x: hidden; */
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TextBox = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 50%;
  height: 366px;

  @media screen and (max-width: 1200px) {
    margin-left: 60px;
    width: 372px;
    height: 430px;
  }
`
export const PhotoBox = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: 67%;
  height: 120%;
  margin-left: auto;
  background-image: url(${heroimage});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 0 0 25px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Title = styled.h1`
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    font-size: 48px;
  }
`
export const Para = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */

  color: #f5f5f5;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapSitneTockice = styled.div`
  position: absolute;
  left: 3%;
  top: 90px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapSitneTockice2 = styled.div`
  position: absolute;
  left: 33%;
  bottom: 130px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapCircle = styled.div`
  position: absolute;
  z-index: 2;
  right: 0%;
  bottom: -30%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

import styled from "styled-components"

export const WrapSekcija = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 100px 70px;
  @media screen and (max-width: 1300px) {
    margin: 0 auto;
    /* flex-direction: column; */
    padding: 100px 30px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    margin: 0 auto;
    flex-direction: column;
    padding: 100px 0px;
  }
`
export const NaciniPlacanja = styled.div`
  position: relative;
  width: 460px;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 100px;
  @media screen and (max-width: 5000px) {
    width: 90%;
  }
`
export const Title = styled.h2`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  /* or 36px */

  text-align: center;

  color: #000000;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

export const Para = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  color: #000000;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapLogo = styled.div`
  position: absolute;
  right: 0%;
  bottom: -120px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

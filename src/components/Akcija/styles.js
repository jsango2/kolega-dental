import styled from "styled-components"

export const WrapAkcija = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 170px;
  background-color: #e14c4c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 20px;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 0;
  }
`
export const WrapTockice = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Naslov = styled.h1`
  position: relative;
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* or 66px */

  color: #ffffff;
  @media screen and (max-width: 1000px) {
    font-size: 48px;
  }
  @media screen and (max-width: 500px) {
    font-size: 42 px;
  }
`
export const Paragraf = styled.h3`
  position: relative;
  /* H3 */
  width: 570px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  /* or 36px */

  color: #ffffff;
  @media screen and (max-width: 1000px) {
    margin-left: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 120%;
    width: 45%;
  }
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`
export const Linija = styled.div`
  position: relative;
  width: 250px;
  height: 2px;
  background-color: white;
  margin-left: -70px;
  @media screen and (max-width: 1000px) {
    width: 150px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`

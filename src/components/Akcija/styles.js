import styled from "styled-components"
import Zrinka from "../../../content/assets/imageZrinka.png"

export const WrapAkcija = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 170px;
  background-color: #ff6433;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 100px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
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
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
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
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Linija = styled.div`
  position: relative;
  width: 250px;
  height: 2px;
  background-color: white;
  margin-left: -70px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

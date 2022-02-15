import styled from "styled-components"
import brojkeBg from "../../../content/assets/brojkeBG.png"

export const WrapBrojke = styled.div`
  position: relative;
  width: 100%;
  height: 465px;
  background-image: url(${brojkeBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #32bde38a;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Box = styled.div`
  position: relative;
  width: 199px;
  height: 216px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  border-radius: 18px;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 23px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Number = styled.h2`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  margin-top: 20px;
  /* identical to box height, or 48px */

  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Text = styled.p`
  /* P */

  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

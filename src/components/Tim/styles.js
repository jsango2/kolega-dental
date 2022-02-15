import styled from "styled-components"
import Zrinka from "../../../content/assets/imageZrinka.png"

export const WrapTim = styled.div`
  position: relative;
  width: 100%;
  height: 608px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  padding-left: 30px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Image = styled.div`
  z-index: auto;
  position: relative;
  width: 694px;
  height: 445px;
  border-radius: 20px;
  background-image: url(${Zrinka});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapText = styled.div`
  width: 485px;
  padding: 0 23px;
  margin-left: 90px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Rectangle = styled.div`
  height: 422px;
  width: 649px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.1;
  position: absolute;
  left: -90px;
  top: 9%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Title = styled.h1`
  /* H1 */

  font-family: Buenard;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 120%;
  margin-bottom: 20px;
  /* or 66px */

  /* SUNRISE / Charcoal */

  color: #37313c;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const ParagraphText = styled.p`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */

  /* SUNRISE / Light Charcoal */

  color: #403845;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

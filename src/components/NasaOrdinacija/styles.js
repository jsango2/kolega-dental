import styled from "styled-components"

export const WrapNasaOrdinacija = styled.div`
  position: relative;
  width: 100%;
  height: 769px;
  padding-top: 80px;
  /* padding-left: 124px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 8px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: #428ff6;
`
export const Text = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const Title = styled.h1`
  font-family: Buenard;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  color: #32bde3;
  margin-bottom: 50px;
  margin-left: 120px;
  @media screen and (max-width: 900px) {
    text-align: center;
    margin-left: 0;
  }
`
export const ImageWrap = styled.div`
  height: 350px;
  width: 350px !important;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`
export const ParagraphText = styled.h1`
  width: 718px;
  height: 110px;
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
export const Kvadrat = styled.div`
  position: absolute;
  right: 0;
  top: -140px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

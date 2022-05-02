import styled from "styled-components"

export const WrapTestimonialsSection = styled.div`
  position: relative;
  width: 100%;
  height: 543px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TestimonailBox = styled.div`
  position: relative;
  width: 100%;
  height: 545px;
  background: #32bde3;
  /* border-radius: 38px; */
  /* padding-top: 160px;
  /* margin-left: 140px; */
  padding-left: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);

  .slick-dots li button:before {
    font-family: "slick";
    font-size: 29px !important;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.25;
    color: rgb(255, 255, 255) !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.95 !important;
    color: white !important;
  }
  .slick-dots {
    text-align: left !important;
    bottom: -50px !important;
    z-index: 10 !important;
  }
  @media screen and (max-width: 1000px) {
    padding-left: 22%;
  }
  @media screen and (max-width: 500px) {
    padding-left: 11%;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 440px) {
    box-shadow: unset;
    .slick-dots {
      text-align: center !important;
      margin-left: -30px;
    }
  }
`
export const Rectangle = styled.div`
  height: 427px;
  width: 550px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.06;
  position: absolute;
  left: 0;
  top: -80px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TestimonialLogo = styled.div`
  position: absolute;
  width: 386px;
  height: 386px;
  bottom: 40px;
  right: 50%;
  transform: translate(50%);
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TestimonialLogo2 = styled.div`
  position: absolute;
  width: 194px;
  height: 194px;
  top: 20px;
  right: 120px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapTockice = styled.div`
  position: absolute;
  left: 35%;
  bottom: 0px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TestimonialPhoto = styled.div`
  position: relative;
  width: 474px;
  height: 451px;
  border-radius: 20px;
  overflow: hidden;
  right: 40px;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Naslov = styled.h3`
  font-family: Avenir Next;
  font-style: italic;
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */
  text-transform: uppercase;
  /* SUNRISE / White */
  margin-bottom: 15px;
  color: #ffffff;
  @media screen and (max-width: 440px) {
    text-align: center;
    margin-left: -50px;
  }
`
export const Header = styled.h3`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  /* or 43px */
  min-width: 300px;
  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  margin: 0 auto 0 0;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Text = styled.h4`
  width: 540px;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */
  /* SUNRISE / White */

  color: #ffffff;
  /* or 25px */

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 88%;
    font-size: 18px;
    text-align: center;
  }
`

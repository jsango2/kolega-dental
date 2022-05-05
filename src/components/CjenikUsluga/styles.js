import styled from "styled-components"
import foto from "../../../content/assets/cjenikcover.png"

export const WrapCjenik = styled.div`
  position: relative;
  width: 100%;
  height: 478px;
  /* padding-top: 40px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${foto});
  background-position: 17%;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Photo = styled.div`
  position: relative;
  z-index: 5;

  height: 435px;
  width: 733px;
  border-radius: 20px;
  left: 60px;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TextBox = styled.div`
  width: 395px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Text = styled.p`
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
export const WrapSitneTockice = styled.div`
  position: absolute;
  right: 2%;
  bottom: 0px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TestimonialLogo = styled.div`
  position: absolute;
  width: 237px;
  height: 237px;
  bottom: -80px;
  right: 30%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapButtonOut = styled.div`
  position: relative;
  top: 150px;
  @media screen and (max-width: 768px) {
  }
`

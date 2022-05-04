import styled from "styled-components"
import Zrinka from "../../../content/assets/imageZrinka.png"

export const WrapTim = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  padding-left: 30px;
  padding-bottom: 90px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    padding-top: 0;
  }
`
export const Image = styled.div`
  z-index: auto;
  position: relative;
  width: 694px;
  height: 445px;
  left: -6%;
  border-radius: 20px;
  background-image: url(${Zrinka});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  transition: all 1s ease-in-out;
  transform: ${props => (props.inView ? `translate(0%)` : `translate(-20%)`)};
  opacity: ${props => (props.inView ? `1` : `0`)};
  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0%;
    border-radius: 0;
    height: 70vw;
  }
`
export const WrapText = styled.div`
  width: 485px;
  padding: 0 23px;
  margin-left: 90px;
  transition: all 1s ease-in-out;
  transform: ${props => (props.inView ? `translate(0%)` : `translate(20%)`)};
  opacity: ${props => (props.inView ? `1` : `0`)};

  @media screen and (max-width: 1000px) {
    width: 650px;
    padding: 0 12px;
    margin-left: 18px;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
    padding: 40px 0;
    left: 0%;
    border-radius: 0;
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
  @media screen and (max-width: 1000px) {
    font-size: 48px;
  }
  @media screen and (max-width: 400px) {
    font-size: 44px;
  }
  @media screen and (max-width: 340px) {
    font-size: 36px;
  }
`
export const ParagraphText = styled.p`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 22px */

  /* SUNRISE / Light Charcoal */

  color: #37313c;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const SaznajVise = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  margin-top: 20px;
  /* SUNRISE/Coral */
  cursor: pointer;
  color: #32bde3;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

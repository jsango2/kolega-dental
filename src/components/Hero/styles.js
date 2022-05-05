import styled from "styled-components"
import heroimage from "../../../content/assets/heroimage.png"

export const HeroWrap = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  width: 100vw;
  height: 660px;
  background-color: #c4c4c4;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    height: auto;
  }
`
export const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 472px;
  height: 366px;
  margin-top: 152px;
  margin-left: 110px;

  @media screen and (max-width: 1200px) {
    margin-left: 60px;
    width: 372px;
    height: 430px;
  }
  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    margin-top: 52px;
    margin-left: 110px;
    margin: 0px auto 0 auto;
    height: auto;
    padding: 50px 0;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    min-width: 330px;
    justify-content: center;
    align-items: center;
    margin-top: 52px;
    margin-left: 0px;
    margin: 0px auto 0 auto;
    height: auto;
    padding: 50px 0;
  }
`
export const PhotoBox = styled.div`
  position: relative;
  display: flex;
  width: 807px;
  height: 646px;

  background-image: url(${heroimage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 65px;
  margin-left: 85px;
  border-radius: 25px 0 0 25px;
  @media screen and (max-width: 1000px) {
    height: 91vw;
    max-height: 650px;
    width: 100%;
    margin-left: 0;
    border-radius: 0;
    margin-top: 0;
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
  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 30px;

    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    /* or 43px */
    width: 75vw;
    min-width: 270px;
    text-align: center;
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
  @media screen and (max-width: 1000px) {
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* or 20px */

    text-align: center;
    margin-bottom: 30px;
    width: 80vw;
  }
`
export const WrapSitneTockice = styled.div`
  position: absolute;
  left: 3%;
  top: 90px;
  transition: all 1.6s ease-in-out;
  transform: ${props => (props.inView ? `translate(0%)` : `translate(40%)`)};
  opacity: ${props => (props.inView ? `1` : `0`)};
  @media screen and (max-width: 768px) {
    top: unset;
    bottom: 0px;
    transform: ${props =>
      props.inView ? `translate(-18%)` : `translate(-30%)`};
  }
`
export const WrapSitneTockice2 = styled.div`
  position: absolute;
  left: 33%;
  bottom: 130px;
  transition: all 1.6s ease-in-out;
  transform: ${props =>
    props.inView ? `translate(0%, 0%)` : `translate(0%, 40%)`};
  opacity: ${props => (props.inView ? `1` : `0`)};
  @media screen and (max-width: 1000px) {
    left: auto;
    right: 0%;
    bottom: 28%;
  }
`
export const WrapCircle = styled.div`
  position: absolute;
  z-index: 2;
  right: 0%;
  bottom: 0%;
  transition: all 1.6s ease-in-out 1s;
  transform: ${props =>
    props.inView ? `translate(0%, 0%)` : `translate(60%, 60%)`};
  opacity: ${props => (props.inView ? `1` : `0`)};
  @media screen and (max-width: 1000px) {
    z-index: 0;
  }
`
export const ButtonMail = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 32px;
  max-height: 53px;
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: ${props => props.width};
  justify-content: center;
  box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
  border-radius: 30px;
  /* Buttons */
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */
  z-index: 2;
  text-align: left;
  cursor: pointer;
  /* SUNRISE / White */
  transition: all 0.5s ease-in-out;

  text-decoration: none;
  color: ${props => props.color};

  &:hover a {
    color: inherit;
  }
  &:hover {
    box-shadow: 3px 3px 15px 0px #2088b3;
    border-radius: 30px;
  }
  @media screen and (max-width: 440px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1000px) {
    /* z-index: 0; */
  }
`

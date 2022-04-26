import styled from "styled-components"
import bg from "../../../content/assets/fotterbg.png"

export const WrapFooter = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #32bde3;
  display: flex;
  flex-direction: column;
  padding: 38px 0 100px 0;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapUp = styled.div`
  position: relative;
  margin-left: 121px;
  display: flex;

  @media screen and (max-width: 1000px) {
    margin-left: 60px;
  }
`
export const WrapPratiteNas = styled.div`
  position: relative;
  width: 334px;
  height: auto;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapPitanja = styled.div`
  position: relative;
  width: 334px;
  height: auto;
  margin-left: 130px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapMreze = styled.div`
  position: relative;
  width: 334px;
  height: auto;
  padding-top: 30px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Title = styled.h1`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  /* identical to box height, or 36px */

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const SubTitle = styled.h4`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  /* identical to box height, or 17px */

  text-transform: uppercase;

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TitleAt = styled.h4`
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  /* identical to box height, or 29px */

  text-align: right;

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const PratiteNas = styled.h4`
  width: 250px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */

  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Text = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE / White */
  margin-top: 30px;
  color: #ffffff;
  text-align: center;
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Line = styled.div`
  width: 75px;
  height: 3px;
  margin-bottom: 15px;
  background-color: #d8f7ff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Linkin = styled.div`
  cursor: pointer;
  margin-right: 12px;
  &::after {
    margin-left: 12px;
    content: "|";
  }
  &:last-child::after {
    content: "";
  }

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapLinks = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px auto 0 auto;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2.5px;

  /* SUNRISE / White */

  color: #ffffff;
  a {
    font-family: "Avenir Next";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    text-decoration: none;
    /* SUNRISE / White */

    color: #ffffff;
    cursor: pointer;
    margin-right: 12px;
    &::after {
      margin-left: 12px;
      content: "|";
    }
    &:last-child::after {
      content: "";
    }
    &:hover {
      color: #ffffff;
    }
  }
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`
export const WrapIcons = styled.div`
  width: 100px;
  display: flex;

  color: #ffffff;
  justify-content: space-between;
  margin: 30px auto;
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Divider = styled.div`
  margin: 20px auto 0 auto;
  width: 300px;
  height: 3px;
  background-color: rgba(256, 256, 256, 0.5);
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Logo = styled.div`
  width: 85px;
  height: 85px;
  margin: 60px auto 0 auto;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Bottom = styled.div`
  width: 85%;
  margin: 120px auto 0 auto;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding-left: 0;
  }

  li {
    margin-left: 3px;
    list-style-type: none;

    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

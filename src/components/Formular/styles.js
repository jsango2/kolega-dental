import styled from "styled-components"
import foto from "../../../content/assets/cvijece.png"

export const WrapFormSection = styled.div`
  position: relative;
  width: 100%;
  height: 1030px;
  padding-top: 60px;
  @media screen and (max-width: 440px) {
    padding-top: 0px;
    height: auto;
  }
`
export const Rectangle = styled.div`
  height: 627px;
  width: 490px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.06;
  position: absolute;
  left: 25%;
  bottom: -60px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Title = styled.h1`
  font-family: "Buenard";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  /* or 43px */

  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Photo = styled.div`
  position: absolute;
  z-index: 5;
  background-image: url(${foto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 691px;
  width: 650px;
  border-radius: 20px;
  left: 140px;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  transition: all 1.3s ease-in-out;
  transform: ${props => (props.inView ? `translate(0%)` : `translate(-40%)`)};
  opacity: ${props => (props.inView ? `1` : `0`)};
  @media screen and (max-width: 1000px) {
    width: 475px;
    border-radius: 20px;
    left: -33px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const WrapFormMob = styled.div`
  width: 100%;
  height: 338px;
  background: #32bde3;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 69px;
  a {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Form = styled.form`
  & form {
    position: absolute;
    z-index: 6;
    right: 70px;
    top: 160px;
    width: 627px;
    height: 713px;
    background: #32bde3;
    border-radius: 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 69px;
    -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
    box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
    transition: all 1.6s ease-in-out;
    transform: ${props => (props.inView ? `translate(0%)` : `translate(50%)`)};
    opacity: ${props => (props.inView ? `1` : `0`)};
    @media screen and (max-width: 1000px) {
      top: 60px;

      position: relative;
      width: 500px;
      right: auto;
      margin: 0 auto;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      border-radius: 0;
      box-shadow: none;

      top: 0;
    }
  }
  & input {
    height: 56px;
    border: none;
    width: 87%;
    margin-bottom: 15px;
    border-radius: 12px;
    padding-left: 30px;
  }
  & textarea:focus,
  input:focus {
    outline: none;
  }
  & textarea {
    max-height: 298px;
    min-height: 298px;
    border: none;
    max-width: 87%;
    min-width: 87%;
    margin-bottom: 15px;
    border-radius: 12px;
    padding-top: 18px;
    padding-left: 30px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    /* Black */

    color: #1e1b1b80;
  }
  & button {
    width: 87%;
    height: 53px;
    background: #ffffff;
    /* Medium Drop */
    border: none;
    box-shadow: 0px 14px 23px rgba(28, 37, 44, 0.08);
    border-radius: 30px;
    font-family: Avenir Next;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 120%;
    /* or 25px */
    margin-top: 30px;
    text-align: center;

    /* SUNRISE/Coral */

    color: #32bde3;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    /* width: 500px; */
  }
`

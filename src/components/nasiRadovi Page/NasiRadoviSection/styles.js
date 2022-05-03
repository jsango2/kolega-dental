import styled from "styled-components"

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100vw;
  height: auto;
  background-color: white;
  overflow: hidden;
  padding-top: 170px;
  padding-bottom: 100px;

  @media screen and (max-width: 1000px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`
export const WrapUsluga = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100vw;
  height: auto;
  background-color: white;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 1000px) {
    padding-top: 0;
    padding-bottom: 50px;
  }
`
export const Dobrodosli = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  /* height: 400px; */
  height: ${props => props.height};
  flex-direction: ${props => (props.index % 2 ? `row` : `row-reverse`)};
  left: ${props => (props.left === true ? `-77px` : `0px`)};
  @media screen and (max-width: 1000px) {
    margin-top: 130px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 0;
    height: auto;
    left: 0;
  }
`
export const Naslov = styled.h1`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;
  margin-bottom: 15px;
  /* SUNRISE/Coral */

  color: #32bde3;
  transition: all 1.6s ease-in-out;
  transform: ${props =>
    props.inView ? `translate(0%, 0%)` : `translate(0%, 40%)`};
  opacity: ${props => (props.inView ? `1` : `0`)};
  @media screen and (max-width: 1000px) {
    font-size: 38px;
  }
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`
export const Text = styled.p`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */
  transition: all 1.6s ease-in-out;

  text-align: center;
  opacity: ${props => (props.inView ? `1` : `0`)};
  /* SUNRISE / Light Charcoal */

  color: #403845;
  width: 70%;
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`
export const Photos = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 30px auto 0 auto;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 500px) {
  }
`

export const Photo = styled.div`
  position: relative;
  height: 261px;
  width: 261px;
  border-radius: 25px;
  overflow: hidden;
  margin: 12px;
  background-image: ${props => `url(${props.photo})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 500px) {
  }
`

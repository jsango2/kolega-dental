import styled from "styled-components"
import foto1 from "../../../content/assets/trioSavjetiFoto.png"

export const WrapSavjetiSection = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 220px 0 30px 124px;

  @media screen and (max-width: 1300px) {
    height: auto;
    padding: 140px 0 140px 0px;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    padding: 140px 0 0px 0px;
  }
`
export const WrapImage1 = styled.div`
  position: absolute;
  width: 600px;
  height: 400px;
  right: 0;
  top: 221px;
  border-radius: 25px;
  overflow: hidden;
  background-image: url(${foto1});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1.6s ease-in-out;
  transform: ${props => (props.inView ? `translate(5%)` : `translate(40%)`)};
  opacity: ${props => (props.inView ? `1` : `0`)};
  @media screen and (max-width: 1300px) {
    display: none;
  }
`
export const WrapImage2 = styled.div`
  position: absolute;
  width: 400px;
  height: auto;
  right: 0;
  bottom: 121px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

import styled from "styled-components"
import mjesto from "../../../content/assets/Mapview.png"

export const WrapRadnoVrijeme = styled.div`
  position: relative;
  width: 100%;
  height: 1215px;
  /* padding-top: 60px; */
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapTimetable = styled.div`
  position: absolute;
  top: 40px;
  left: -31px;
  width: 481px;
  height: 650px;
  background: #32bde3;
  border-radius: 38px;
  display: flex;
  z-index: 5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  padding-left: 32px;
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
`
export const Title = styled.h2`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;
  margin-bottom: 60px;
  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Satnica = styled.div`
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const DnevniRaspored = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 337px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapDanCrta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 167px;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Dan = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  /* white */

  color: #fcfefe;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Crta = styled.div`
  width: 20px;
  height: 2px;
  background-color: white;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapMap = styled.div`
  position: absolute;
  top: 226px;
  left: 27%;
  width: 944px;
  height: 523px;
  border-radius: 20px;
  overflow: hidden;
  -webkit-box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  box-shadow: -2px 18px 24px 5px rgba(6, 25, 31, 0.24);
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Sat = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  /* white */

  color: #fcfefe;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapLogo = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapTockice = styled.div`
  position: absolute;
  left: 35%;
  top: 20px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapSitneTockice = styled.div`
  position: absolute;
  left: 5%;
  bottom: 300px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Lokacija = styled.div`
  width: 85%;
  height: 396px;
  position: absolute;
  z-index: 5;
  bottom: 70px;
  left: 40%;
  overflow: hidden;
  border-radius: 20px;
  transform: translate(-25%);
  background-image: url(${mjesto});
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
export const Adresa = styled.p`
  position: absolute;
  bottom: 30px;
  right: 45px;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* identical to box height, or 22px */

  text-align: right;

  /* SUNRISE / White */

  color: #ffffff;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Button = styled.button`
  width: 252px;
  height: 38px;
  background: #32bde3;
  /* SUNRISE/Coral */
  position: absolute;
  border: 3px solid #32bde3;
  box-sizing: border-box;
  border-radius: 15px;
  bottom: 46px;
  left: 42px;
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    background: #416ca5;
    border: 4px solid #416ca5;
    box-sizing: border-box;
    border-radius: 15px;
  }
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

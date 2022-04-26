import styled from "styled-components"
import foto1 from "../../../../content/assets/fotoDobrodosli.png"
import foto2 from "../../../../content/assets/zrinkazaposleni.png"
import foto3 from "../../../../content/assets/jasminka.png"
import foto4 from "../../../../content/assets/nevena.png"

export const ZaposleniWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100vw;
  height: auto;
  background-color: white;
  overflow: hidden;
  padding-top: 130px;
  padding-bottom: 100px;
  @media screen and (max-width: 1000px) {
    padding-top: 0;
  }
`
export const Dobrodosli = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  @media screen and (max-width: 1000px) {
    margin-top: 130px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`
export const Text = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  padding: 50px 100px 0 140px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE / Charcoal */

  color: #37313c;
  @media screen and (max-width: 1000px) {
    padding: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    padding: 50px 0 20px 0;
  }
`
export const TextZrinka = styled(Text)`
  padding: 50px 120px 0 0px;

  @media screen and (max-width: 1000px) {
    padding: 33px 52px 0 0px;
  }
  @media screen and (max-width: 768px) {
  }
`
export const Zrinka = styled.div`
  position: relative;
  left: -90px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 50px 0px 40px 0px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE / Charcoal */

  color: #37313c;
  @media screen and (max-width: 1000px) {
    width: 106%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    left: 0;
  }
`
export const Nevena = styled.div`
  position: relative;
  left: 50px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 50px 0px 40px 0px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE / Charcoal */

  color: #37313c;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    left: 0;
  }
`
export const Jasminka = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 50px 0px 40px 0px;

  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE / Charcoal */

  color: #37313c;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
export const Photo = styled.div`
  position: relative;
  right: -60px;
  display: flex;
  width: 50%;
  height: 413px;
  background-image: url(${foto1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70vw;
    border-radius: 0;
    right: 0;
  }
`
export const PhotoZrinka = styled.div`
  position: relative;
  left: -70px;
  display: flex;
  width: 70%;
  height: 605px;
  background-image: url(${foto2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  @media screen and (max-width: 1000px) {
    height: 688px;
  }
  @media screen and (max-width: 768px) {
    left: 0;

    width: 100%;
    height: 70vw;
    border-radius: 0;
  }
`
export const PhotoJasminka = styled.div`
  position: relative;
  right: -60px;
  display: flex;
  width: 50%;
  height: 453px;
  background-image: url(${foto3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    right: 0;
    width: 100%;
    height: 70vw;

    border-radius: 0;
  }
`
export const PhotoNevena = styled.div`
  position: relative;
  left: -70px;
  display: flex;
  width: 50%;
  height: 390px;
  background-image: url(${foto4});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    left: unset;
    width: 100%;
    height: 70vw;
    border-radius: 0;
  }
`

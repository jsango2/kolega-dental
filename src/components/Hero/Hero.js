import React from "react"
import Button from "../Button/Button.js"
import sitnetockice from "../../../content/assets/heroTockice.svg"
import sitnetockice2 from "../../../content/assets/Dot.svg"
import circle from "../../../content/assets/heroCircle.svg"

import {
  HeroWrap,
  TextBox,
  PhotoBox,
  Para,
  Title,
  WrapSitneTockice,
  WrapSitneTockice2,
  WrapCircle,
} from "./styles.js"

const Hero = () => {
  return (
    <HeroWrap>
      <WrapCircle>
        <img src={circle} alt="circle" />
      </WrapCircle>
      <WrapSitneTockice>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>
      <WrapSitneTockice2>
        <img src={sitnetockice2} alt="little dots 2" />
      </WrapSitneTockice2>
      <TextBox>
        <Title>Usluge dentalne i estetske medicine</Title>
        <Para>
          Ordinacija dentalne i estetske medicine Kolega Dental je tu za vas u
          svim situacijama: ako vas boli zub ili želite uljepšati osmjeh, čak i
          kada godinama niste posjetili stomatologa. Zajedno možemo postići da
          budete napokon zadovoljni svojim osmjehom.{" "}
        </Para>
        <Button
          text="DOGOVORI SVOJ TERMIN"
          color="#32BDE3"
          bgColor="#FFFFFF"
          width="341px"
          linkTo="/"
        />
      </TextBox>
      <PhotoBox></PhotoBox>
    </HeroWrap>
  )
}

export default Hero

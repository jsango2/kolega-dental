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
  ButtonMail,
} from "./styles.js"
import { useInView } from "react-intersection-observer"

const Hero = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <HeroWrap ref={ref}>
      <WrapCircle inView={inView}>
        <img src={circle} alt="circle" />
      </WrapCircle>
      <WrapSitneTockice inView={inView}>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>
      <WrapSitneTockice2 inView={inView}>
        <img src={sitnetockice2} alt="little dots 2" />
      </WrapSitneTockice2>
      <TextBox>
        <Title>Usluge dentalne i estetske medicine</Title>
        <Para>
          Ordinacija dentalne i estetske medicine dr. Zrinka Kolega je tu za vas
          u svim situacijama: ako vas boli zub ili želite uljepšati osmijeh, čak
          i kada godinama niste posjetili stomatologa. Zajedno možemo postići da
          budete napokon zadovoljni svojim osmijehom.
        </Para>
        <ButtonMail
          href="mailto:hello@kolegadental.com?subject=Kontakt mail"
          color="#32BDE3"
          bgColor="#FFFFFF"
          width="341px"
        >
          DOGOVORI SVOJ TERMIN
        </ButtonMail>
      </TextBox>
      <PhotoBox></PhotoBox>
    </HeroWrap>
  )
}

export default Hero

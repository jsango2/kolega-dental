import React from "react"
import Button from "../../Button/Button.js"
import sitnetockice from "../../../../content/assets/heroTockice.svg"
import circle from "../../../../content/assets/heroCircle.svg"

import {
  HeroWrap,
  TextBox,
  PhotoBox,
  Title,
  WrapSitneTockice,
  WrapCircle,
  WrapCircleMob,
  WrapButton,
  WrapButtonMob,
} from "./styles.js"
import useWindowSize from "../../usewindowsize.js"
import { useInView } from "react-intersection-observer"

const Hero = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    // trigger inView function only once
    triggerOnce: true,
  })
  const size = useWindowSize()
  return (
    <HeroWrap ref={ref}>
      <WrapSitneTockice inView={inView}>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>

      <TextBox>
        <Title>Naši radovi</Title>
      </TextBox>
      <PhotoBox>
        <WrapCircle inView={inView}>
          <img src={circle} alt="circle" />
        </WrapCircle>
        {size.width > 768 ? (
          <WrapButton>
            <Button
              text="DOGOVORI SVOJ TERMIN"
              color="#32BDE3"
              bgColor="#FFFFFF"
              width="341px"
              linkTo=""
            />
          </WrapButton>
        ) : (
          ""
        )}
      </PhotoBox>
      {size.width < 768 ? (
        <WrapButtonMob>
          <Button
            text="DOGOVORI SVOJ TERMIN"
            color="#32BDE3"
            bgColor="#FFFFFF"
            width="341px"
            linkTo=""
          />
        </WrapButtonMob>
      ) : (
        ""
      )}
      <WrapCircleMob inView={inView}>
        <img src={circle} alt="circle" />
      </WrapCircleMob>
    </HeroWrap>
  )
}

export default Hero

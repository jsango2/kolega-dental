import React, { useState } from "react"
import sitnetockice from "../../../../content/assets/heroTockice.svg"
import circle from "../../../../content/assets/heroCircle.svg"

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

const CjenikHero = () => {
  return (
    <HeroWrap>
      <WrapSitneTockice>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>

      <TextBox>
        <Title>Cjenik</Title>
      </TextBox>
      <PhotoBox>
        <WrapCircle>
          <img src={circle} alt="circle" />
        </WrapCircle>
      </PhotoBox>
    </HeroWrap>
  )
}

export default CjenikHero

import React from "react"
import Button from "../../Button/Button.js"
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

const Zaposleni = () => {
  return (
    <HeroWrap>
      <WrapSitneTockice>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>

      <TextBox>
        <Title>Upoznajte nas</Title>
      </TextBox>
      <PhotoBox>
        <WrapCircle>
          <img src={circle} alt="circle" />
        </WrapCircle>
      </PhotoBox>
    </HeroWrap>
  )
}

export default Zaposleni

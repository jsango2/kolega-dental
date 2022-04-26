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
  WrapButton,
  WrapButtonMob,
} from "./styles.js"
import Button from "../../Button/Button"
import useWindowSize from "../../usewindowsize"

const CjenikHero = () => {
  const size = useWindowSize()

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
        {size.width > 768 ? (
          <WrapButton>
            <Button
              text="DOGOVORI SVOJ TERMIN"
              color="#32BDE3"
              bgColor="#FFFFFF"
              width="341px"
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
          />
        </WrapButtonMob>
      ) : (
        ""
      )}
    </HeroWrap>
  )
}

export default CjenikHero

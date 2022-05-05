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
import { ButtonMail } from "../../Hero/styles.js"

const Zaposleni = () => {
  const size = useWindowSize()
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
        {size.width > 768 ? (
          <WrapButton>
            <ButtonMail
              href="mailto:hello@kolegadental.com?subject=Kontakt mail"
              text="DOGOVORI SVOJ TERMIN"
              color="#32BDE3"
              bgColor="#FFFFFF"
              width="341px"
            >
              DOGOVORI SVOJ TERMIN
            </ButtonMail>
          </WrapButton>
        ) : (
          ""
        )}
      </PhotoBox>
      {size.width < 768 ? (
        <WrapButtonMob>
          <ButtonMail
            href="mailto:hello@kolegadental.com?subject=Kontakt mail"
            text="DOGOVORI SVOJ TERMIN"
            color="#32BDE3"
            bgColor="#FFFFFF"
            width="341px"
          >
            DOGOVORI SVOJ TERMIN
          </ButtonMail>
        </WrapButtonMob>
      ) : (
        ""
      )}
      <WrapCircleMob>
        <img src={circle} alt="circle" />
      </WrapCircleMob>
    </HeroWrap>
  )
}

export default Zaposleni

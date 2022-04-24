import React, { useState } from "react"
import EstetskaLista from "../cjenikLista/estetskaLista.js"
import OpcaLista from "../cjenikLista/opcaLista.js"
import logo from "../../../../content/assets/cjeniksectionlogo.svg"

import { WrapSekcija, NaciniPlacanja, Title, Para, WrapLogo } from "./styles.js"

const SekcijaCjenik = () => {
  return (
    <>
      <WrapSekcija>
        <OpcaLista />
        <EstetskaLista />{" "}
        <WrapLogo>
          <img src={logo} alt="little dots" />
        </WrapLogo>
      </WrapSekcija>
      <NaciniPlacanja>
        <Title>Načini plaćanja:</Title>
        <Para>
          Plaćanja su moguća gotovinski i karticama. Obročno možete platiti:
          Visa premium i Diners, Maestro PBZ, Mastercard karticama beskamatno do
          12 rata.
        </Para>
      </NaciniPlacanja>
    </>
  )
}

export default SekcijaCjenik

import React from "react"
import { WrapAkcija, WrapTockice, Naslov, Paragraf, Linija } from "./styles.js"
import tockice from "../../../content/assets/tockiceAkcija.svg"

const Akcija = () => {
  return (
    <WrapAkcija>
      <WrapTockice>
        <img src={tockice} alt="little dots" />
      </WrapTockice>
      <Linija />
      <Naslov>Naslovni text</Naslov>
      <Paragraf>
        Popust na usluge ugradnje implatanta od 16.6. do 31.7. 2022.
      </Paragraf>
    </WrapAkcija>
  )
}

export default Akcija

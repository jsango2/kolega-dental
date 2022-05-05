import React from "react"
import { WrapAkcija, WrapTockice, Naslov, Paragraf, Linija } from "./styles.js"
import tockice from "../../../content/assets/tockiceAkcija.svg"

const Akcija = ({ data }) => {
  console.log(data)
  return (
    <WrapAkcija>
      <WrapTockice>
        <img src={tockice} alt="little dots" />
      </WrapTockice>
      <Linija />
      <Naslov>{data.akcija.naslov}</Naslov>
      <Paragraf>{data.akcija.tekst}</Paragraf>
    </WrapAkcija>
  )
}

export default Akcija

import React from "react"
import { OpcaStomatologija } from "./data.js"

import { WrapSekcija, Title, WrapPrice } from "./styles.js"

const OpcaLista = () => {
  return (
    <WrapSekcija>
      <Title>Opća stomatologija</Title>
      {OpcaStomatologija.map((opca, index) => (
        <WrapPrice key={index}>
          <div>{opca.usluga}</div>
          <div>{opca.cijena}</div>
        </WrapPrice>
      ))}
    </WrapSekcija>
  )
}

export default OpcaLista

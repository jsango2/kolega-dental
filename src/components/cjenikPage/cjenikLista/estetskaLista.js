import React, { useState } from "react"
import { EstetskaMedicina, OpcaStomatologija } from "./data.js"

import { WrapSekcija, Title, WrapPrice } from "./styles.js"

const EstetskaLista = () => {
  return (
    <WrapSekcija>
      <Title>Estetska medicina</Title>
      {EstetskaMedicina.map((opca, index) => (
        <WrapPrice key={index}>
          <div>{opca.usluga}</div>
          <div>{opca.cijena}</div>
        </WrapPrice>
      ))}
    </WrapSekcija>
  )
}

export default EstetskaLista

import React from "react"
import { WrapUsluga, Naslov, Text, Photos, Photo } from "./styles.js"
import { useInView } from "react-intersection-observer"

import foto1 from "../../../../content/assets/fotoDobrodosli.png"

import sitnetockice2 from "../../../../content/assets/tockiceOrdinacija1.svg"
import { Radovi } from "./listaRadova.js"

const Usluga = ({ naslov, text, photo, id }) => {
  return (
    <WrapUsluga id={id}>
      <Naslov>{naslov}</Naslov>
      <Text>{text}</Text>
      <Photos>
        {photo.map(e => (
          <Photo photo={e} />
        ))}
      </Photos>
    </WrapUsluga>
  )
}

export default Usluga

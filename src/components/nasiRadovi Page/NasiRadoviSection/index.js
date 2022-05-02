import React from "react"
import { Wrap } from "./styles.js"
import { useInView } from "react-intersection-observer"

import foto1 from "../../../../content/assets/fotoDobrodosli.png"

import sitnetockice2 from "../../../../content/assets/tockiceOrdinacija1.svg"
import { Radovi } from "./listaRadova.js"
import Usluga from "./Usluga.js"

const Section = () => {
  return (
    <Wrap>
      {Radovi.map((rad, index) => (
        <Usluga
          key={index}
          id={rad.naslov}
          naslov={rad.naslov}
          text={rad.text}
          photo={rad.photo}
        />
      ))}
    </Wrap>
  )
}

export default Section

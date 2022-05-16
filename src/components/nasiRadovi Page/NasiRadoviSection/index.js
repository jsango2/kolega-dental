import React from "react"
import { Wrap } from "./styles.js"

import Usluga from "./Usluga.js"

const Section = ({ data }) => {
  return (
    <Wrap>
      {data.edges.map((rad, index) => (
        <Usluga
          key={index}
          id={rad.node.title}
          naslov={rad.node.title}
          text={rad.node.content}
          photo={rad.node.naseUslugeFoto.fotoNaseUsluge}
        />
      ))}
    </Wrap>
  )
}

export default Section

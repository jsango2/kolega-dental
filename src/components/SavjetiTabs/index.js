import React, { useState } from "react"
import { WrapSavjeti, Title } from "./styles.js"
import { savjetiList } from "./savjetiList"
import Accordion from "./Accordion.js"

const Savjeti = () => {
  const [isOpen, setIsOpen] = useState(null)

  const toggleOpen = id => () =>
    setIsOpen(isOpen => (isOpen === id ? null : id))
  return (
    <WrapSavjeti>
      <Title>SAVJETI NAŠIH STRUČNJAKA</Title>
      {savjetiList.map((pitanje, index) => (
        <Accordion
          key={index}
          title={pitanje.pitanje}
          content={pitanje.odgovor}
          isOpen={isOpen === index}
          toggle={toggleOpen(index)}
        />
      ))}
    </WrapSavjeti>
  )
}

export default Savjeti

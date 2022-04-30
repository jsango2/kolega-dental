import React from "react"
import { Overlay, WrapBrojke, Box, Number, Text, Wrap } from "./styles.js"
import people from "../../../content/assets/bi_people.svg"
import clock from "../../../content/assets/cil_clock.svg"
import calendar from "../../../content/assets/calendar.svg"
import zub from "../../../content/assets/zub.svg"
import { useInView } from "react-intersection-observer"

const Brojka = ({ photo, number, text, delay }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <Box ref={ref} inView={inView} delay={delay}>
      <img src={photo} alt={number} />
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Box>
  )
}

export default Brojka

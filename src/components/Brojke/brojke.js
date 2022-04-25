import React from "react"
import { Overlay, WrapBrojke, Box, Number, Text, Wrap } from "./styles.js"
import people from "../../../content/assets/bi_people.svg"
import clock from "../../../content/assets/cil_clock.svg"
import calendar from "../../../content/assets/calendar.svg"
import zub from "../../../content/assets/zub.svg"

const brojke = () => {
  return (
    <WrapBrojke>
      <Overlay />
      <Wrap>
        <Box>
          <img src={people} alt="people icon" />
          <Number>3000</Number>
          <Text>Pacijenata u 2021. godini</Text>
        </Box>
        <Box>
          {" "}
          <img src={clock} alt="people icon" />
          <Number>1690</Number>
          <Text>Sati rada u 2021. godini</Text>
        </Box>
      </Wrap>
      <Wrap>
        <Box>
          {" "}
          <img src={calendar} alt="people icon" />
          <Number>30</Number>
          <Text>Godina iskustva</Text>
        </Box>
        <Box>
          {" "}
          <img src={zub} alt="people icon" />
          <Number>197</Number>
          <Text>Pohađanih tečajeva</Text>
        </Box>
      </Wrap>
    </WrapBrojke>
  )
}

export default brojke

import React from "react"
import {
  WrapTimetable,
  Title,
  Satnica,
  DnevniRaspored,
  WrapDanCrta,
  Dan,
  Crta,
  Sat,
} from "./styles.js"
import { useInView } from "react-intersection-observer"

const Timetable = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <WrapTimetable ref={ref} inView={inView}>
      <Title>RADNO VRIJEME</Title>
      <Satnica>
        <DnevniRaspored>
          <WrapDanCrta>
            <Dan>Ponedjeljak</Dan>
            <Crta />
          </WrapDanCrta>
          <Sat>09:00 - 17:00</Sat>
        </DnevniRaspored>
        <DnevniRaspored>
          <WrapDanCrta>
            <Dan>Utorak</Dan>
            <Crta />
          </WrapDanCrta>
          <Sat>09:00 - 17:00</Sat>
        </DnevniRaspored>
        <DnevniRaspored>
          <WrapDanCrta>
            <Dan>Srijeda</Dan>
            <Crta />
          </WrapDanCrta>
          <Sat>09:00 - 17:00</Sat>
        </DnevniRaspored>
        <DnevniRaspored>
          <WrapDanCrta>
            <Dan>Četvrtak</Dan>
            <Crta />
          </WrapDanCrta>
          <Sat>09:00 - 17:00</Sat>
        </DnevniRaspored>
        <DnevniRaspored>
          <WrapDanCrta>
            <Dan>Petak</Dan>
            <Crta />
          </WrapDanCrta>
          <Sat>09:00 - 17:00</Sat>
        </DnevniRaspored>
        <DnevniRaspored>
          <WrapDanCrta>
            <Dan>Subota</Dan>
            <Crta />
          </WrapDanCrta>
          <Sat>po dogovoru</Sat>
        </DnevniRaspored>
        <DnevniRaspored>
          <WrapDanCrta>
            <Dan>Nedjelja</Dan>
            <Crta />
          </WrapDanCrta>
          <Sat>po dogovoru</Sat>
        </DnevniRaspored>
      </Satnica>
    </WrapTimetable>
  )
}

export default Timetable

import React from "react"
import { Overlay, WrapBrojke, Wrap } from "./styles.js"
import people from "../../../content/assets/bi_people.svg"
import clock from "../../../content/assets/cil_clock.svg"
import calendar from "../../../content/assets/calendar.svg"
import zub from "../../../content/assets/zub.svg"
import { useInView } from "react-intersection-observer"
import Brojka from "./brojka.js"

const Brojke = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <WrapBrojke ref={ref}>
      <Overlay />
      <Wrap inView={inView}>
        <Brojka
          photo={people}
          number="3000"
          text="Pacijenata u 2021. godini"
          delay={0.3}
        />
        <Brojka
          photo={clock}
          number="1690"
          text="Sati rada u 2021. godini"
          delay={0.6}
        />
        <Brojka
          photo={calendar}
          number="25"
          text="Godina iskustva"
          delay={0.9}
        />
        <Brojka
          photo={zub}
          number="197"
          text="Pohađanih tečajeva"
          delay={1.2}
        />
      </Wrap>
    </WrapBrojke>
  )
}

export default Brojke

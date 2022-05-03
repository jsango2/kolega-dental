import React from "react"
import Savjeti from "../SavjetiTabs/index.js"
import { WrapSavjetiSection, WrapImage1 } from "./styles.js"
import { useInView } from "react-intersection-observer"

const SavjetiSection = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <WrapSavjetiSection id="savjeti">
      <Savjeti />
      <WrapImage1 ref={ref} inView={inView}></WrapImage1>
      {/* <WrapImage2>
        <img src={foto2} alt="" />
      </WrapImage2> */}
    </WrapSavjetiSection>
  )
}

export default SavjetiSection

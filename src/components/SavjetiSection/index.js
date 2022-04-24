import React, { useState } from "react"
import Savjeti from "../SavjetiTabs/index.js"
import { WrapSavjetiSection, WrapImage1, WrapImage2 } from "./styles.js"
import foto1 from "../../../content/assets/trioSavjetiFoto.png"
import foto2 from "../../../content/assets/savjetiFoto2.png"

const SavjetiSection = () => {
  return (
    <WrapSavjetiSection>
      <Savjeti />
      <WrapImage1>
        <img src={foto1} alt="" />
      </WrapImage1>
      {/* <WrapImage2>
        <img src={foto2} alt="" />
      </WrapImage2> */}
    </WrapSavjetiSection>
  )
}

export default SavjetiSection

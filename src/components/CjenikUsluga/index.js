import React from "react"
import Button from "../Button/Button"
import { WrapCjenik, WrapButtonOut } from "./styles.js"

const Cjenik = () => {
  return (
    <WrapCjenik>
      <WrapButtonOut>
        <Button
          text="CJENIK NAŠIH USLUGA"
          color="#fff"
          bgColor="#32BDE3"
          width="315px"
          linkTo="/Cjenik"
        />
      </WrapButtonOut>
    </WrapCjenik>
  )
}

export default Cjenik

import { Link } from "gatsby"
import React from "react"
import Button from "../Button/Button"
import { WrapCjenik, WrapButton } from "./styles.js"

const Cjenik = () => {
  return (
    <WrapCjenik>
      <WrapButton>
        <Button
          text="CJENIK NAŠIH USLUGA"
          color="#fff"
          bgColor="#32BDE3"
          width="315px"
          linkTo="/Cjenik"
        />
      </WrapButton>
    </WrapCjenik>
  )
}

export default Cjenik

import { Link } from "gatsby"
import React from "react"
import Button from "../Button/Button"
import { WrapCjenik } from "./styles.js"

const Cjenik = () => {
  return (
    <WrapCjenik>
      <Button
        text="CJENIK NAŠIH USLUGA"
        color="#fff"
        bgColor="#32BDE3"
        width="315px"
        linkTo="/Cjenik"
      />
    </WrapCjenik>
  )
}

export default Cjenik

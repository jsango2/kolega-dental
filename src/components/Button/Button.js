import { Link } from "gatsby"
import React from "react"
import { WrapButton } from "./styles.js"

const Button = ({ text, color, bgColor, width, linkTo }) => {
  return (
    <WrapButton color={color} bgColor={bgColor} width={width}>
      <Link to={linkTo}> {text}</Link>
    </WrapButton>
  )
}

export default Button

import React from "react"
import { WrapButton } from "./styles.js"

const Button = ({ text, color, bgColor, width }) => {
  return (
    <WrapButton color={color} bgColor={bgColor} width={width}>
      {text}
    </WrapButton>
  )
}

export default Button

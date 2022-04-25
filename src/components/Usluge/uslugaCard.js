import React from "react"
import {
  WrapCard,
  WrapTitleText,
  CardText,
  CardTitle,
  WrapPhoto,
} from "./styles.js"

const uslugaCard = ({ photo, text, title }) => {
  return (
    <WrapCard>
      <WrapPhoto photo={photo}></WrapPhoto>
      <WrapTitleText>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </WrapTitleText>
    </WrapCard>
  )
}

export default uslugaCard

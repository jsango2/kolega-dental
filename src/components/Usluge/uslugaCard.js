import React from "react"
import {
  WrapCard,
  WrapTitleText,
  CardText,
  CardTitle,
  WrapPhoto,
} from "./styles.js"
import { useInView } from "react-intersection-observer"

const UslugaCard = ({ photo, text, title }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <WrapCard ref={ref} inView={inView}>
      <WrapPhoto photo={photo}></WrapPhoto>
      <WrapTitleText>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </WrapTitleText>
    </WrapCard>
  )
}

export default UslugaCard

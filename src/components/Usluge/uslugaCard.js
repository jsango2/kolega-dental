import React from "react"
import {
  WrapCard,
  WrapTitleText,
  CardText,
  CardTitle,
  WrapPhoto,
} from "./styles.js"
import { useInView } from "react-intersection-observer"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const UslugaCard = ({ photo, text, title, link }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <WrapCard ref={ref} inView={inView}>
      <WrapPhoto photo={photo}></WrapPhoto>
      {link ? (
        <AnchorLink to={`/NasiRadovi/#${link}`}>
          <WrapTitleText>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
          </WrapTitleText>
        </AnchorLink>
      ) : (
        <WrapTitleText>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </WrapTitleText>
      )}
    </WrapCard>
  )
}

export default UslugaCard

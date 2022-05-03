import React from "react"
import { WrapUsluga, Naslov, Text, Photos, Photo } from "./styles.js"
import { useInView } from "react-intersection-observer"

const Usluga = ({ naslov, text, photo, id }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <WrapUsluga id={id} ref={ref}>
      <Naslov inView={inView}>{naslov}</Naslov>
      <Text dangerouslySetInnerHTML={{ __html: text }} inView={inView} />
      <Photos inView={inView}>
        {photo && <Photo photo={photo.mediaItemUrl} />}
      </Photos>
    </WrapUsluga>
  )
}

export default Usluga

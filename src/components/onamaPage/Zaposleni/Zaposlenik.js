import React, { useState, useRef, useEffect } from "react"
import { ZaposleniWrap, Dobrodosli, Text, Photo } from "./styles.js"
import { useInView } from "react-intersection-observer"

const Zaposlenik = ({ text, photo, index, left, trans }) => {
  const [contentHeight, setContentHeight] = useState(200)
  const content = useRef(null)
  useEffect(() => {
    setContentHeight(content.current.scrollHeight)
  }, [])

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <ZaposleniWrap ref={content}>
      <Dobrodosli
        height={`${contentHeight}px`}
        index={index}
        left={left}
        ref={ref}
      >
        <Text dangerouslySetInnerHTML={{ __html: text }} inView={inView}></Text>
        <Photo photo={photo} inView={inView} index={index} trans={trans} />
      </Dobrodosli>
    </ZaposleniWrap>
  )
}

export default Zaposlenik

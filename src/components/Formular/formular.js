import React from "react"
import { WrapFormSection, Form, Photo, Rectangle } from "./styles.js"
import { useInView } from "react-intersection-observer"

const Formular = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <WrapFormSection ref={ref}>
      <Photo inView={inView} />
      <Rectangle inView={inView} />
      <Form inView={inView}>
        <form>
          <input type="text" name="Ime" placeholder="Ime" />
          <input type="email" name="Email" placeholder="Email" />
          <textarea name="Text" rows="5" cols="33" placeholder="Poruka" />
          <button type="submit">POŠALJI UPIT</button>
        </form>
      </Form>
    </WrapFormSection>
  )
}

export default Formular

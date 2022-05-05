import React from "react"
import {
  WrapFormSection,
  Form,
  Photo,
  Rectangle,
  Title,
  WrapFormMob,
} from "./styles.js"
import { useInView } from "react-intersection-observer"
import useWindowSize from "../usewindowsize"
import Button from "../Button/Button.js"

const Formular = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
    // trigger inView function only once
    triggerOnce: true,
  })

  const size = useWindowSize()
  return (
    <WrapFormSection ref={ref}>
      <Photo inView={inView} />
      <Rectangle inView={inView} />
      <Form inView={inView}>
        {size.width > 440 ? (
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />

            <input type="text" name="Ime" placeholder="Ime" />
            <input type="email" name="Email" placeholder="Email" />
            <textarea name="Text" rows="5" cols="33" placeholder="Poruka" />
            <button type="submit">POŠALJI UPIT</button>
          </form>
        ) : (
          <WrapFormMob>
            <Title>Obratite nam se s povjerenjem</Title>
            {/* <a href="mailto:hello@kolegadental.com?subject=Kontakt mail"> */}
            <Button
              text="POŠALJI UPIT"
              color="#32BDE3"
              bgColor="#FFFFFF"
              width="341px"
              linkTo="/"
            />
            {/* </a> */}
          </WrapFormMob>
        )}
      </Form>
    </WrapFormSection>
  )
}

export default Formular

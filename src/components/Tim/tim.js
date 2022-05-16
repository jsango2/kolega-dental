import React from "react"
import {
  WrapTim,
  Title,
  WrapText,
  Image,
  ParagraphText,
  Rectangle,
  SaznajVise,
} from "./styles.js"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"

const Tim = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <WrapTim ref={ref}>
      <Rectangle />
      <Image inView={inView} />
      <WrapText inView={inView}>
        <Title>Preko 25 godina iskustva</Title>
        <ParagraphText>
          Dobrodošli u Ordinaciju dentalne medicine dr. Zrinka Kolega. Želja nam
          je u ugodnoj i prijateljskoj atmosferi pružiti Vam najbolju moguću
          skrb iz područja dentalne stomatologije i estetske medicine.
          <br />
          <br /> Znamo da je posjet stomatologu nekim pacijentima uzrok stresa i
          baš zato se trudimo biti izrazito pažljivi i nježni u pristupu. Sa
          preko 25 godina iskustva u brizi za zdravlje čitave obitelji i
          maksimalno poštivanje zakazanih termina, riješite svoje probleme na
          obostrano zadovoljstvo.
          <br />
          <br />
          Veliku važnost pridajemo preventivi te Vas zato neumorno educiramo u
          održavanju oralne higijene kako bi u buduće imali što zdraviji i
          ljepši osmijeh.
        </ParagraphText>
        <SaznajVise>
          <Link to="/Onama">SAZNAJ VIŠE</Link>
        </SaznajVise>
      </WrapText>
    </WrapTim>
  )
}

export default Tim

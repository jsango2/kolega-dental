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
import blurbg from "../../../content/assets/blurbg.png"

const tim = () => {
  return (
    <WrapTim>
      <Rectangle />
      <Image></Image>
      <WrapText>
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
          obostrano zadovoljstvo. <br />
          <br />
          Veliku važnost pridajemo preventivi te Vas zato neumorno educiramo u
          održavanju oralne higijene kako bi u buduće imali što zdraviji i
          ljepši osmijeh.
        </ParagraphText>
        <SaznajVise>SAZNAJ VIŠE</SaznajVise>
      </WrapText>
    </WrapTim>
  )
}

export default tim

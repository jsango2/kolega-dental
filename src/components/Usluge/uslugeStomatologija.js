import React from "react"
import {
  NaslovUsluge,
  Rectangle,
  Usluge,
  ParagraphText,
  WrapSitneTockice,
} from "./styles.js"
import UslugaCard from "./uslugaCard.js"
import p1 from "../../../content/assets/photo1usluge.png"
import p2 from "../../../content/assets/photo2usluge.png"
import p3 from "../../../content/assets/photo3usluge.png"
import p4 from "../../../content/assets/photo4usluge.png"
import p5 from "../../../content/assets/photo5usluge.png"
import p6 from "../../../content/assets/photo6usluge.png"
import p7 from "../../../content/assets/photo7usluge.png"
import p8 from "../../../content/assets/photo8usluge.png"
import tockice from "../../../content/assets/tockiceNaseUsluge.svg"
import { useInView } from "react-intersection-observer"

const UslugeStomatologija = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <>
      <WrapSitneTockice>
        <img src={tockice} alt="little dots" />
      </WrapSitneTockice>
      <NaslovUsluge ref={ref} inView={inView}>
        Naše usluge / opća stomatologija
      </NaslovUsluge>
      <ParagraphText inView={inView}>
        Vjerujemo da je glavni preduvjet za uspješan posjet stomatologu
        razvijanje uzajamnog povjerenja između liječnika i pacijenta. Naš fokus
        je na edukaciji o oralnom zdravlju i osobnom pristupu svakom pacijentu.
        Ostvarujemo odlične rezultate u radu s djecom, gdje je edukacija i
        izgradnja odnosa povjerenja pravi zalog za budućnost.
      </ParagraphText>
      <Rectangle />
      <Usluge>
        <UslugaCard
          photo={p1}
          title="Estetska stomatologija"
          text="Digital smile design, CAM/CAD tehnologija"
          link="Restorativna i estetska stomatologija"
        />
        <UslugaCard
          photo={p2}
          title="Dentalna Patologija"
          text="Saniranje karijesa najboljim materijalima minimalno invazivnim metodama"
        />
        <UslugaCard
          photo={p3}
          title="Protetika"
          text="Ljuskice, krunice, mostovi, mobilna protetika"
          link="Protetika"
        />
        <UslugaCard
          photo={p4}
          title="Dječija stomatologija"
          text="Preventiva i liječenje karijesa,odlični rezultati u uklanjanju dentalnih fobija"
        />
        <UslugaCard
          photo={p5}
          title="Oralna kirurgija"
          text="Vađenja zubi i implantati uz suradnju oralnog kirurga"
          link="Oralna kirurgija i implantoprotetika"
        />
        <UslugaCard
          photo={p6}
          title="Paradontologija"
          text="Održavanje zdravlja potpornih struktura zuba,liječenje desni i čišćenje kamenca te pjeskarenje"
          link="Paradontologija"
        />
        <UslugaCard
          photo={p7}
          title="Endodoncija"
          text="Liječenje zubne pulpe i opskrba kanala, ručno ili strojnom tehnikom"
          link="Endodoncija"
        />
        <UslugaCard
          photo={p8}
          title="Preventiva"
          text="Postupci usmjereni ka očuvanju zdravlja cijele usne šupljine, praćenje prekanceroza i edukacija u održavanju oralne higijene"
        />
      </Usluge>
    </>
  )
}

export default UslugeStomatologija

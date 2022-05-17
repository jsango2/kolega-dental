import React from "react"
import {
  NaslovUsluge,
  Usluge,
  ParagraphText,
  Rectangle2,
  Rectangle3,
  WrapTockice,
} from "./styles.js"
import UslugaCard from "./uslugaCard.js"
import p1 from "../../../content/assets/photo9usluge.png"
import p2 from "../../../content/assets/photo10usluge.png"
import p3 from "../../../content/assets/photo11usluge.png"
import p4 from "../../../content/assets/photo12usluge.png"
import p5 from "../../../content/assets/photo13usluge.png"
import { useInView } from "react-intersection-observer"

const UslugeEstetika = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <>
      <NaslovUsluge ref={ref} inView={inView}>
        Naše usluge / estetska medicina
      </NaslovUsluge>
      <WrapTockice></WrapTockice>
      <Rectangle2 />
      <ParagraphText>
        Kolega Dental & Aesthetic medicine više od pet godina nudi usluge
        neinvazivne estetske medicine poput injekcijskih dermalnih filera,
        botoxa i terapija krvnom plazmom (PRP). Usluge su na visokom
        profesionalnom nivou i prilagođene induvidualnim potrebama.
      </ParagraphText>
      <Usluge>
        <UslugaCard
          photo={p1}
          title="Mikroneedling"
          text="Osvježenje izgleda i smanjivanje ožiljaka i bora, poticanje stvaranja kolagena"
        />
        <UslugaCard
          photo={p2}
          title="Botox"
          text="Brisanje bora čela, smanjivanje pušačkih bora i bora oko očiju"
          link="Botox"
        />
        <UslugaCard
          photo={p3}
          title="Hijaluronski fileri"
          text="Minimalno invazivni tretmani kože i povećanje usana"
          link="Dermalni filer"
        />
        <UslugaCard
          photo={p4}
          title="PRP"
          text="Plazma tretmani za pomlađivanje kože i pooljšanje gustoće kose"
          link="PRP tretman"
        />
        <UslugaCard
          photo={p5}
          title="Mezoterapija"
          text="Neumreženi hijaluron u terapiji raznih oštećenja kože i pomlađivanje"
          link="Mezoterapija"
        />
        <Rectangle3 />
      </Usluge>
    </>
  )
}

export default UslugeEstetika

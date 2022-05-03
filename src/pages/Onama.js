import React, { useState } from "react"
import Layout from "../components/layout"
import Zaposleni from "../components/onamaPage/Zaposleni"
import OnamaHero from "../components/onamaPage/OnamaHero"
import Seo from "../components/seo"
import Cjenik from "../components/CjenikUsluga"
import NasaOrdinacija from "../components/NasaOrdinacija/NasaOrdinacija"
import Akcija from "../components/Akcija"

const Onama = () => {
  const [isAction, setIsAction] = useState(true)

  return (
    <Layout title="Kolega dental">
      <Seo title="O nama" />
      <OnamaHero />
      {/* {isAction ? <Akcija /> : ""} */}
      <Zaposleni />
      <Cjenik />
      <NasaOrdinacija />
    </Layout>
  )
}

export default Onama

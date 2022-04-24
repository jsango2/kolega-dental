import React, { useState } from "react"
import Layout from "../components/layout"
import Zaposleni from "../components/onamaPage/Zaposleni"
import OnamaHero from "../components/onamaPage/OnamaHero"
import Seo from "../components/seo"
import Cjenik from "../components/CjenikUsluga"
import NasaOrdinacija from "../components/NasaOrdinacija/NasaOrdinacija"

const Onama = () => {
  return (
    <Layout title="Kolega dental">
      <Seo title="O nama" />
      <OnamaHero />
      <Zaposleni />
      <Cjenik />
      <NasaOrdinacija />
    </Layout>
  )
}

export default Onama

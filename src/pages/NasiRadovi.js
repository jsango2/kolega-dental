import React, { useState } from "react"
import Layout from "../components/layout"
import Zaposleni from "../components/onamaPage/Zaposleni"
import OnamaHero from "../components/onamaPage/OnamaHero"
import Seo from "../components/seo"
import Hero from "../components/nasiRadovi Page/nasiRadovi Hero"
import Section from "../components/nasiRadovi Page/NasiRadoviSection"

const NasiRadovi = () => {
  return (
    <Layout title="Kolega dental">
      <Seo title="Naši radovi" />
      <Hero />
      <Section />
    </Layout>
  )
}

export default NasiRadovi

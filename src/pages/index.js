import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"

import { graphql } from "gatsby"
import Usluge from "../components/Usluge/usluge"
import Brojke from "../components/Brojke/brojke"
import Tim from "../components/Tim/tim"
import RadnoVrijeme from "../components/RadnoVrijeme/radnoVrijeme"
import Formular from "../components/Formular/formular"
import Testimonials from "../components/Testimonials/testimonials"
import FAQ from "../components/FAQ/faq"
import NasaOrdinacija from "../components/NasaOrdinacija/NasaOrdinacija"
import Cjenik from "../components/CjenikUsluga"
import SavjetiSection from "../components/SavjetiSection"
import Akcija from "../components/Akcija"
import Footer from "../components/Footer"
import FooterMobile from "../components/FooterMobile"
import NasiRadovi from "../components/NasiRadovi/NasiRadovi"

const BlogIndex = ({ data }) => {
  const [isAction, setIsAction] = useState(true)
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle}>
      <Seo title="Početna stranica" />
      <Hero />
      {isAction ? <Akcija /> : ""}

      <Usluge />
      <Brojke />
      <Tim />
      <RadnoVrijeme />
      <Formular />
      <Testimonials />
      <Cjenik />
      <SavjetiSection />
      {/* <FAQ /> */}
      <NasaOrdinacija />
      <NasiRadovi />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

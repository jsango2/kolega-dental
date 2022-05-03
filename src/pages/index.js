import React, { useState, useEffect } from "react"
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
// import FAQ from "../components/FAQ/faq"
import NasaOrdinacija from "../components/NasaOrdinacija/NasaOrdinacija"
import Cjenik from "../components/CjenikUsluga"
import SavjetiSection from "../components/SavjetiSection"
import Akcija from "../components/Akcija"
// import Footer from "../components/Footer"
// import FooterMobile from "../components/FooterMobile"
import NasiRadovi from "../components/NasiRadovi/NasiRadovi"

const BlogIndex = ({ data }) => {
  const [isAction, setIsAction] = useState(false)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  useEffect(() => {
    setIsAction(data.wpgraphql.pages.edges[0].node.akcija.prikaz)
  }, [])

  return (
    <Layout title={siteTitle}>
      <Seo title="Početna stranica" />
      <Hero />
      {isAction ? (
        <Akcija data={data.wpgraphql.pages.edges[0].node.akcija} />
      ) : (
        ""
      )}

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
      <NasiRadovi data={data.wpgraphql.naseUsluga} />
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
    wpgraphql {
      naseUsluga {
        edges {
          node {
            id
            title
            content
            naseUslugeFoto {
              fotoNaseUsluge {
                mediaItemUrl
              }
            }
          }
        }
      }
      pages {
        edges {
          node {
            contentType {
              node {
                id
              }
            }
            akcija {
              akcija {
                naslov
                tekst
              }
              prikaz
            }
          }
        }
      }
    }
  }
`

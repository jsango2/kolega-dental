import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// import Zaposleni from "../components/onamaPage/Zaposleni"
// import OnamaHero from "../components/onamaPage/OnamaHero"
import Seo from "../components/seo"
import Hero from "../components/nasiRadovi Page/nasiRadovi Hero"
import Section from "../components/nasiRadovi Page/NasiRadoviSection"

const NasiRadovi = ({ data }) => {
  return (
    <Layout title="Kolega dental">
      <Seo title="Naši radovi" />
      <Hero />
      <Section data={data.wpgraphql.naseUsluga} />
    </Layout>
  )
}

export default NasiRadovi

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
    }
  }
`

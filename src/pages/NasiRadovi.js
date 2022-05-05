import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"

// import Zaposleni from "../components/onamaPage/Zaposleni"
// import OnamaHero from "../components/onamaPage/OnamaHero"
import Seo from "../components/seo"
import Hero from "../components/nasiRadovi Page/nasiRadovi Hero"
import Section from "../components/nasiRadovi Page/NasiRadoviSection"
import Akcija from "../components/Akcija"

const NasiRadovi = ({ data }) => {
  const [isAction, setIsAction] = useState(false)
  useEffect(() => {
    setIsAction(data.wpgraphql.pages.edges[0].node.akcija.prikaz)
  }, [])
  return (
    <Layout title="Kolega dental">
      <Seo title="Naši radovi" />
      <Hero />
      {isAction ? (
        <Akcija data={data.wpgraphql.pages.edges[0].node.akcija} />
      ) : (
        ""
      )}
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
      naseUsluga {
        edges {
          node {
            id
            naseUslugeFoto {
              fotoNaseUsluge {
                mediaItemUrl
              }
            }
            content
            title
          }
        }
      }
    }
  }
`

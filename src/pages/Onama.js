import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Zaposleni from "../components/onamaPage/Zaposleni"
import OnamaHero from "../components/onamaPage/OnamaHero"
import Seo from "../components/seo"
import Cjenik from "../components/CjenikUsluga"
import NasaOrdinacija from "../components/NasaOrdinacija/NasaOrdinacija"
import Akcija from "../components/Akcija"

const Onama = ({ data }) => {
  const [isAction, setIsAction] = useState(false)
  useEffect(() => {
    setIsAction(data.wpgraphql.pages.edges[0].node.akcija.prikaz)
  }, [])

  return (
    <Layout title="Kolega dental">
      <Seo title="O nama" />
      <OnamaHero />
      {isAction ? (
        <Akcija data={data.wpgraphql.pages.edges[0].node.akcija} />
      ) : (
        ""
      )}
      <Zaposleni />
      <Cjenik />
      <NasaOrdinacija />
    </Layout>
  )
}

export default Onama
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
          }
        }
      }
    }
  }
`

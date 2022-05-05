import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Seo from "../components/seo"
import CjenikHero from "../components/cjenikPage/cjenikHero"
import Akcija from "../components/Akcija"
import SekcijaCjenik from "../components/cjenikPage/cjenikSection"

const Cjenik = ({ data }) => {
  const [isAction, setIsAction] = useState(true)
  useEffect(() => {
    setIsAction(data.wpgraphql.pages.edges[0].node.akcija.prikaz)
  }, [])

  return (
    <Layout title="Kolega dental">
      <Seo title="Cjenik" />
      <CjenikHero />
      {isAction ? <Akcija /> : ""}
      <SekcijaCjenik />
    </Layout>
  )
}

export default Cjenik

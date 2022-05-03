import React, { useState } from "react"
import Layout from "../components/layout"
// import Zaposleni from "../components/onamaPage/Zaposleni"
// import OnamaHero from "../components/onamaPage/OnamaHero"
import Seo from "../components/seo"
import CjenikHero from "../components/cjenikPage/cjenikHero"
import Akcija from "../components/Akcija"
// import OpcaLista from "../components/cjenikPage/cjenikLista/opcaLista"
import SekcijaCjenik from "../components/cjenikPage/cjenikSection"

const Cjenik = () => {
  const [isAction, setIsAction] = useState(true)

  return (
    <Layout title="Kolega dental">
      <Seo title="Cjenik" />
      <CjenikHero />
      {/* {isAction ? <Akcija /> : ""} */}
      <SekcijaCjenik />
    </Layout>
  )
}

export default Cjenik

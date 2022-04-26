import React from "react"
import {
  WrapFooter,
  Logo,
  Divider,
  WrapUp,
  WrapPratiteNas,
  WrapPitanja,
  WrapMreze,
  SubTitle,
  Title,
  Line,
  Text,
  TitleAt,
  PratiteNas,
  WrapLinks,
  Linkin,
  Bottom,
  WrapIcons,
} from "./styles.js"
import blurbg from "../../../content/assets/blurbg.png"
import facebook from "../../../content/assets/facebook.svg"
import instagram from "../../../content/assets/instagram.svg"
import logo from "../../../content/assets/FooterMOBLOGO.svg"
import { Links } from "../Navigation/links.js"
import { Link } from "gatsby"

const FooterMobile = () => {
  return (
    <WrapFooter>
      <WrapLinks>
        {Links.map((e, index) => (
          <Link key={index} to={e.link}>
            {e.veza}
          </Link>
        ))}
      </WrapLinks>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <WrapMreze>
        <PratiteNas>PRATITE NAS NA DRUŠTVENIM MREŽAMA @KOLEGADENTAL</PratiteNas>

        <WrapIcons>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </WrapIcons>
      </WrapMreze>
      <Divider />
      <Text>
        Put Murvice 12c 23000 Zadar <br />
        <br /> hello@kolegadental.com 023 214854
        <br />
        <br /> Radno vrijeme: <br />
        Pon., Sri. 13:00 - 20:30
        <br />
        Uto., Čet., Pet. 07:00 - 14:30
      </Text>

      <Bottom>
        <ul>
          <li>© 2022 KOLEGA DENTAL · </li>
          <li>Uvjeti korištenja · </li>
          <li>Izjava o privatnosti · </li>
          <li>Web design SUTRA</li>
        </ul>
      </Bottom>
    </WrapFooter>
  )
}

export default FooterMobile

import React from "react"
import {
  WrapFooter,
  Logo,
  Divider,
  WrapMreze,
  Text,
  PratiteNas,
  WrapLinks,
  Bottom,
  WrapIcons,
} from "./styles.js"
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
          <a href="https://www.facebook.com/kolegamedicine">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/kolegamedicinezadar/">
            <img src={instagram} alt="instagram" />
          </a>
        </WrapIcons>
      </WrapMreze>
      <Divider />
      <Text>
        Put Murvice 12c 23000 Zadar <br />
        <br />
        <a href="mailto:hello@kolegadental.com?subject=Kontakt mail">
          hello@kolegadental.com{" "}
        </a>{" "}
        <br />
        <br />
        <a href="tel:+385 98835312">098 835312</a>
        <br />
        <br /> Radno vrijeme: <br />
        Pon., Sri. 13:00 - 20:30
        <br />
        Uto., Čet., Pet. 07:00 - 14:30
        <br />
        Sub., Ned. po dogovoru
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

import React from "react"
import {
  WrapFooter,
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
  Link,
  Bottom,
  WrapIcons,
} from "./styles.js"
import blurbg from "../../../content/assets/blurbg.png"
import facebook from "../../../content/assets/facebook.svg"
import instagram from "../../../content/assets/instagram.svg"
import { Links } from "../Navigation/links.js"

const Footer = () => {
  return (
    <WrapFooter>
      <WrapUp>
        <WrapPratiteNas>
          <SubTitle>PRATITE NAS</SubTitle>
          <Title>KOLEGA DENTAL</Title>
          <Line />
          <Text>
            Ordinacija dentalne i estetske medicine Kolega Dental je tu za vas u
            svim situacijama. Ako vas boli zub ili želite uljepšati osmjeh, čak
            i kada godinama niste posjetili stomatologa. Zajedno možemo postići
            da budete napokon zadovoljni svojim osmjehom.{" "}
          </Text>
        </WrapPratiteNas>
        <WrapPitanja>
          <SubTitle>IMATE PITANJA</SubTitle>
          <Title>KONTAKT</Title>
          <Line />
          <Text>
            Put Murvice 12c 23000 Zadar <br />
            <br /> hello@kolegadental.com 023 214854
            <br />
            <br /> Radno vrijeme: <br />
            Pon., Sri. 13:00 - 20:30
            <br />
            Uto., Čet., Pet. 07:00 - 14:30
          </Text>
        </WrapPitanja>
        <WrapMreze>
          <TitleAt>@KOLEGADENTAL</TitleAt>
          <PratiteNas>PRATITE NAS NA DRUŠTVENIM MREŽAMA</PratiteNas>
          <WrapIcons>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </WrapIcons>
        </WrapMreze>
      </WrapUp>
      <WrapLinks>
        {Links.map(e => (
          <Link to={e.link} activeStyle={{ color: "#32BDE3" }}>
            {e.veza}
          </Link>
        ))}
      </WrapLinks>
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

export default Footer

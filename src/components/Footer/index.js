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
  Bottom,
  WrapIcons,
  EU,
  WrapEU,
} from "./styles.js"
import facebook from "../../../content/assets/facebook.svg"
import instagram from "../../../content/assets/instagram.svg"
import eu1 from "../../../content/assets/eu1.png"
import eu2 from "../../../content/assets/eu2.png"
import { Links } from "../Navigation/links.js"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <WrapFooter id="kontakt">
      <WrapUp>
        <WrapPratiteNas>
          <SubTitle>PRATITE NAS</SubTitle>
          <Title>KOLEGA DENTAL</Title>
          <Line />
          <Text>
            Ordinacija dentalne i estetske medicine dr. Zrinka Kolega je tu za
            vas u svim situacijama: ako vas boli zub ili želite uljepšati
            osmijeh, čak i kada godinama niste posjetili stomatologa. Zajedno
            možemo postići da budete napokon zadovoljni svojim osmijehom.
          </Text>
        </WrapPratiteNas>
        <WrapPitanja>
          <SubTitle>IMATE PITANJA</SubTitle>
          <Title>KONTAKT</Title>
          <Line />
          <Text>
            Put Murvice 12c <br /> 23000 Zadar <br />
            <br />{" "}
            <a href="mailto:hello@kolegadental.com?subject=Kontakt mail">
              hello@kolegadental.com{" "}
            </a>{" "}
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
        </WrapPitanja>
        <WrapMreze>
          <TitleAt>@KOLEGADENTAL</TitleAt>
          <PratiteNas>PRATITE NAS NA DRUŠTVENIM MREŽAMA</PratiteNas>
          <WrapIcons>
            <a href="https://www.facebook.com/kolegamedicine">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/kolegamedicinezadar/">
              <img src={instagram} alt="instagram" />
            </a>
          </WrapIcons>
        </WrapMreze>
      </WrapUp>
      <WrapLinks>
        {Links.map((e, index) => (
          <Link key={index} to={e.link}>
            {e.veza}
          </Link>
        ))}
      </WrapLinks>
      <Bottom>
        <ul>
          <li>© 2022 KOLEGA DENTAL · </li>
          <li>Uvjeti korištenja · </li>
          <li>Izjava o privatnosti · </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="http://www.sutra.hr"
            >
              Web design SUTRA
            </a>{" "}
          </li>
        </ul>
      </Bottom>
      <EU>
        <WrapEU>
          <img src={eu1} alt="eu" />
        </WrapEU>
        <WrapEU>
          <img src={eu2} alt="eu" />
        </WrapEU>
        <WrapEU>
          KOLEGA DENTAL sudjeluje u provedbi financijskog instrumenta
          sufinanciranog iz Europskog fonda za regionalni razvoj u sklopu
          Operativnog programa "Konkurentnost i kohezija”.
        </WrapEU>
      </EU>
    </WrapFooter>
  )
}

export default Footer

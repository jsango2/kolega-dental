import React from "react"
import {
  WrapRadnoVrijeme,
  Lokacija,
  Button,
  WrapMap,
  WrapLogo,
  WrapTockice,
  WrapSitneTockice,
} from "./styles.js"
import Timetable from "./timetable.js"
import arrow from "../../../content/assets/arrow.svg"
import logobox from "../../../content/assets/logobox.svg"
import tockice from "../../../content/assets/tockice.svg"
import sitnetockice from "../../../content/assets/sitnetockice.svg"
import { useInView } from "react-intersection-observer"

const RadnoVrijeme = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <WrapRadnoVrijeme>
      {" "}
      <Timetable />
      <Lokacija>
        <Button>
          Upute Google Maps
          <img src={arrow} alt="arrow" />
        </Button>
        {/* <Adresa>Put Murvice 12c (kod Mirovinskog)</Adresa> */}
      </Lokacija>
      <WrapMap ref={ref} inView={inView}>
        <iframe
          width="100%"
          height="523px"
          src="https://api.mapbox.com/styles/v1/lovreperaic/ckzmnbuh1000s14qphnptume0.html?title=false&access_token=pk.eyJ1IjoibG92cmVwZXJhaWMiLCJhIjoiY2t5NDR3eXlsMDNqZjJwczE5bnBnbTVveSJ9.iNSjOEyPMGOmAWGeWOdPRA&zoomwheel=false#13.68/44.11102/15.23839/12.2/9"
          title="Kolega dentalk stil + lokacija"
          style={{ border: "none" }}
        ></iframe>
      </WrapMap>
      <WrapTockice>
        <img src={tockice} alt="dots" />
      </WrapTockice>
      <WrapSitneTockice>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>
      <WrapLogo>
        <img src={logobox} alt="logo" />
      </WrapLogo>
    </WrapRadnoVrijeme>
  )
}

export default RadnoVrijeme

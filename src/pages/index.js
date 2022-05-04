import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
// import axios from "axios"
import { graphql } from "gatsby"
import Usluge from "../components/Usluge/usluge"
import Brojke from "../components/Brojke/brojke"
import Tim from "../components/Tim/tim"
import RadnoVrijeme from "../components/RadnoVrijeme/radnoVrijeme"
import Formular from "../components/Formular/formular"
import Testimonials from "../components/Testimonials/testimonials"
// import FAQ from "../components/FAQ/faq"
import NasaOrdinacija from "../components/NasaOrdinacija/NasaOrdinacija"
import Cjenik from "../components/CjenikUsluga"
import SavjetiSection from "../components/SavjetiSection"
import Akcija from "../components/Akcija"
// import Footer from "../components/Footer"
// import FooterMobile from "../components/FooterMobile"
import NasiRadovi from "../components/NasiRadovi/NasiRadovi"

const BlogIndex = ({ data }) => {
  const [isAction, setIsAction] = useState(false)
  // const [countryName, setCountryName] = useState("")
  // const [countryCode, setCountryCode] = useState("")
  const siteTitle = data.site.siteMetadata?.title || `Title`
  useEffect(() => {
    setIsAction(data.wpgraphql.pages.edges[0].node.akcija.prikaz)
  }, [])

  // const getGeoInfo = () => {
  //   axios
  //     .get("https://ipapi.co/json/")
  //     .then(response => {
  //       let data = response.data
  //       // this.setState({
  //       //   countryName: data.country_name,
  //       //   countryCode: ,
  //       // })
  //       setCountryCode(data.country_calling_code)
  //       setCountryName(data.country_name)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getGeoInfo()
  // }, [])

  // function geoFindMe() {
  //   if (!navigator.geolocation) {
  //     console.log("Geolocation is not supported by your browser")
  //     return
  //   }
  //   function success(position) {
  //     var latitude = position.coords.latitude
  //     var longitude = position.coords.longitude
  //     // reverseGeocodingWithGoogle(longitude, latitude)
  //     console.log(latitude, longitude)
  //   }
  //   function error() {
  //     console.log("Unable to retrieve your location")
  //   }
  //   navigator.geolocation.getCurrentPosition(success, error)
  // }
  // geoFindMe()

  // function getBrowserLocales(options = {}) {
  //   const defaultOptions = {
  //     languageCodeOnly: false,
  //   }
  //   const opt = {
  //     ...defaultOptions,
  //     ...options,
  //   }
  //   const browserLocales =
  //     navigator.languages === undefined
  //       ? [navigator.language]
  //       : navigator.languages
  //   if (!browserLocales) {
  //     return undefined
  //   }
  //   return browserLocales.map(locale => {
  //     const trimmedLocale = locale.trim()
  //     return opt.languageCodeOnly
  //       ? trimmedLocale.split(/-|_/)[0]
  //       : trimmedLocale
  //   })
  // }

  // const el = getBrowserLocales()
  // if (el.some(s => s === "hr")) {
  //   console.log("ima")
  // } else {
  //   console.log("nema")
  // }

  // var req = new XMLHttpRequest()
  // req.open("GET", document.location, false)
  // req.send(null)
  // var headers = req.getAllResponseHeaders().toLowerCase()
  // var contentLanguage = headers.match(/^content-language\:(.*)$/gm)
  // // if (contentLanguage[0]) {
  // //   return contentLanguage[0].split(":")[1].trim().toUpperCase()
  // // }

  return (
    <Layout title={siteTitle}>
      <Seo title="Početna stranica" />
      <Hero />
      {isAction ? (
        <Akcija data={data.wpgraphql.pages.edges[0].node.akcija} />
      ) : (
        ""
      )}

      <Usluge />
      <Brojke />
      <Tim />
      <RadnoVrijeme />
      <Formular />
      <Testimonials />
      <Cjenik />
      <SavjetiSection />
      {/* <FAQ /> */}
      <NasaOrdinacija />
      <NasiRadovi data={data.wpgraphql.naseUsluga} />
    </Layout>
  )
}

export default BlogIndex

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
    }
  }
`

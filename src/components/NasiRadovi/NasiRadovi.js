import React, { useState } from "react"
import Slider from "react-slick"
import Lightbox from "react-image-lightbox"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-image-lightbox/style.css"
import Images from "./images.js"
import sitnetockice from "../../../content/assets/tockiceOrdinacija1.svg"
import sitnetockice2 from "../../../content/assets/tockiceOrdinacija2.svg"
import kvadratOrd from "../../../content/assets/kvadratOrdinacija.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import AnchorLink from "react-anchor-link-smooth-scroll"
// import { HashLink } from 'react-router-hash-link';

import {
  WrapNasaOrdinacija,
  Title,
  Text,
  ImageWrap,
  WrapSitneTockice,
  WrapSitneTockice2,
  Kvadrat,
  Usluge,
  Usluga,
} from "./styles.js"

const NasiRadovi = ({ data }) => {
  const [current, setCurrent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  // const [photoIndex, setPhotoIndex] = useState(0)
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    className: "testimonialSlider",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: true,
          fade: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: true,
          speed: 500,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: false,
          speed: 500,
        },
      },
    ],
  }

  const handleClickImage = (e, image) => {
    e && e.preventDefault()
    setCurrent(image)
    setIsOpen(true)
  }

  const handleCloseModal = e => {
    e && e.preventDefault()

    setCurrent(0)
    setIsOpen(false)
  }
  return (
    <WrapNasaOrdinacija>
      <WrapSitneTockice>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>
      <WrapSitneTockice2>
        <img src={sitnetockice2} alt="little dots 2" />
      </WrapSitneTockice2>
      <Kvadrat>
        <img src={kvadratOrd} alt="kvadrat" />
      </Kvadrat>
      <Text>
        <Title>Naši radovi</Title>
        {/* <ParagraphText>
          Kolega Dental & Aesthetic medicine više od pet godina nudi usluge
          neinvazivne estetske medicine poput injekcijski dermalni fileri, botox
          i terapija krvnom plazmom (PRP). Usluge su na visokom profesionalnom
          nivou i prilagođene induvidualnim potrebama.
        </ParagraphText> */}
        <Usluge>
          {data.edges.map((e, index) => (
            <Usluga key={index}>
              <AnchorLink to={`/NasiRadovi/#${e.node.title}`}>
                {e.node.title}
              </AnchorLink>
            </Usluga>
          ))}
        </Usluge>
      </Text>
      <Slider {...settings}>
        {Images.map(image => (
          <ImageWrap
            key={image.in}
            onClick={e => handleClickImage(e, image.in)}
          >
            <img
              src={image.photo}
              alt="logo"
              height="350px"
              width="350px"
              style={{ objectFit: "cover" }}
            />
          </ImageWrap>
        ))}
      </Slider>
      {isOpen && (
        <Lightbox
          mainSrc={Images[current].photo}
          onCloseRequest={handleCloseModal}
          nextSrc={Images[(current + 1) % Images.length].photo}
          prevSrc={Images[(current + Images.length - 1) % Images.length].photo}
          onMovePrevRequest={() =>
            setCurrent((current + Images.length - 1) % Images.length)
          }
          onMoveNextRequest={() => setCurrent((current + 1) % Images.length)}
        />
      )}
    </WrapNasaOrdinacija>
  )
}

export default NasiRadovi

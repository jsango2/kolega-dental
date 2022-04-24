import React from "react"
import {
  WrapTestimonialsSection,
  TestimonailBox,
  TestimonialLogo,
  TestimonialLogo2,
  Naslov,
  Text,
  TestimonialPhoto,
  Rectangle,
  WrapTockice,
} from "./styles.js"
import logo from "../../../content/assets/LogoZnak.svg"
import logo2 from "../../../content/assets/testimonialLogo.svg"
import photo from "../../../content/assets/testimonialPhoto.png"
import tockice from "../../../content/assets/tockice.svg"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { testimonialList } from "./testimonialList"

const testimonials = () => {
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 2000,
    autoplaySpeed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: false,
    //       speed: 500,
    //     },
    //   },
    // ],
  }
  return (
    <WrapTestimonialsSection>
      <Rectangle />
      <TestimonialLogo2>
        <img src={logo2} alt="logo2" />
      </TestimonialLogo2>
      <WrapTockice>
        <img src={tockice} alt="dots" />
      </WrapTockice>
      <TestimonailBox>
        <Slider {...settings}>
          {testimonialList.map(testimonial => (
            <React.Fragment key={testimonial.ime}>
              <Naslov>{testimonial.ime}</Naslov>
              <Text>{testimonial.testimonial}</Text>
            </React.Fragment>
          ))}
        </Slider>
        <TestimonialLogo>
          <img src={logo} alt="logo" />
        </TestimonialLogo>
      </TestimonailBox>
      {/* <TestimonialPhoto>
        <img src={photo} alt="logo" />
      </TestimonialPhoto> */}
    </WrapTestimonialsSection>
  )
}

export default testimonials

import React, { useState } from "react"
import Logo from "../../../content/assets/LogoNavbar.svg"
import { Link } from "gatsby"
import {
  NavbarWrap,
  LogoWrap,
  LinkWrap,
  SingleLink,
  Hamburger,
  Line,
  CloseIcon,
  LineX1,
  LineX2,
} from "./styles.js"
import { Links } from "./links"
import MobileMenu from "../MobileMenu"
import { useInView } from "react-intersection-observer"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  // console.log(isOpen)
  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log("clicked")
  }
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    // trigger inView function only once
    triggerOnce: true,
  })

  return (
    <NavbarWrap ref={ref}>
      <MobileMenu isOpen={isOpen} handleClick={handleClick} />
      {/* {isOpen ? (
        <CloseIcon onClick={handleClick}>
          <LineX1 />
          <LineX2 />
        </CloseIcon>
      ) : (
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <Line />
          <Line />
          <Line />
        </Hamburger>
      )} */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <LogoWrap isOpen={isOpen} inView={inView}>
        <Link to="/">
          <img src={Logo} width="100%" alt="" />
        </Link>
      </LogoWrap>
      <LinkWrap>
        {Links.map((e, index) => (
          <SingleLink key={index}>
            <Link to={e.link} activeStyle={{ color: e.color }}>
              {e.veza}
            </Link>
          </SingleLink>
        ))}
      </LinkWrap>
    </NavbarWrap>
  )
}

export default Navbar

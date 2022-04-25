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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  // console.log(isOpen)
  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log("clicked")
  }
  return (
    <NavbarWrap>
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
      <LogoWrap>
        <img src={Logo} width="100%" alt="" />
      </LogoWrap>
      <LinkWrap>
        {Links.map(e => (
          <SingleLink key={e.link}>
            <Link to={e.link} activeStyle={{ color: "#32BDE3" }}>
              {e.veza}
            </Link>
          </SingleLink>
        ))}
      </LinkWrap>
    </NavbarWrap>
  )
}

export default Navbar

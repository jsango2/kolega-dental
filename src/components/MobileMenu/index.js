import { Link } from "gatsby"
import React, { useState } from "react"
import { Links } from "../Navigation/links.js"
import {
  WrapMobileMenu,
  SingleLink,
  CloseIcon,
  LineX1,
  LineX2,
} from "./styles.js"

const MobileMenu = ({ isOpen, handleClick }) => {
  return (
    <WrapMobileMenu isOpen={isOpen}>
      <CloseIcon onClick={handleClick}>
        <LineX1 />
        <LineX2 />
      </CloseIcon>
      {Links.map(e => (
        <SingleLink key={e.link}>
          <Link to={e.link} activeStyle={{ color: "#32BDE3" }}>
            {e.veza}
          </Link>{" "}
        </SingleLink>
      ))}
    </WrapMobileMenu>
  )
}

export default MobileMenu
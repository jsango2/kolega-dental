import { Link } from "gatsby"
import React from "react"
import { Links } from "../Navigation/links.js"
import { WrapMobileMenu, SingleLink } from "./styles.js"

const MobileMenu = ({ isOpen }) => {
  return (
    <WrapMobileMenu isOpen={isOpen}>
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

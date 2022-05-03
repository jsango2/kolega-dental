import { Link } from "gatsby"
import React from "react"
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
      {Links.map((e, index) => (
        <SingleLink key={index}>
          <Link
            to={e.link}
            activeStyle={{ color: e.color }}
            onClick={handleClick}
          >
            {e.veza}
          </Link>{" "}
        </SingleLink>
      ))}
    </WrapMobileMenu>
  )
}

export default MobileMenu

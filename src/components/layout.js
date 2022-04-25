import * as React from "react"
import Footer from "./Footer"
import FooterMobile from "./FooterMobile"
import Navbar from "./Navigation/navbar"
import useWindowSize from "./usewindowsize"

const Layout = ({ title, children }) => {
  const size = useWindowSize()

  return (
    <div className="WrapLayout">
      <Navbar />
      {children}
      {size.width < 1000 ? <FooterMobile /> : <Footer />}
    </div>
  )
}

export default Layout

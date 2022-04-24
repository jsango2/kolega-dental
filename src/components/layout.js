import * as React from "react"
import Footer from "./Footer"
import Navbar from "./Navigation/navbar"

const Layout = ({ title, children }) => {
  return (
    <div className="WrapLayout">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

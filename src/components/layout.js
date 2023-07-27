import * as React from "react"
// import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.scss"


const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar siteTitle={null || `Title`} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
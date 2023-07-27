import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faEnvelope, faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ siteTitle }) => {
  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small><FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />Sinamangal, Kathmandu</small>
          <small className="ms-4"><FontAwesomeIcon className="me-2" icon={faEnvelope} />salamwelfaresocietynepal@gmail.com</small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <a className="text-white-50 ms-3" target="_blank"
            href="https://www.facebook.com/profile.php?id=100094030991798&mibextid=LQQJ4d"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a className="text-white-50 ms-3" target="_blank" href="https://www.instagram.com/salam_welfare_society/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="text-white-50 ms-3" target="_blank"
            href="https://www.youtube.com/channel/UC3LVwhVzwg4v2L_GnIdOHHQ"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">

        <StaticImage loading="lazy" className="ms-2 me-lg-2" src="../images/logo/logo.png" style={{ width: "50px", height: "50px" }} alt="main-logo" />
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="fw-bold text-primary m-0">Salam<span className="text-white">Welfare</span></h1>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link">About</a>
            <a href="#contact" className="nav-item nav-link">Contact</a>
          </div>
          <div className="d-none d-lg-flex ms-2">
            <a className="btn btn-outline-primary py-2 px-3" href="" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              Donate Now
              <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
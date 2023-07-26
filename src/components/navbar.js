import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navbar = ({ siteTitle }) => {
  return (
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      <div class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
        <div class="col-lg-6 px-5 text-start">
          <small><i class="fa fa-map-marker-alt me-2"></i>Sinamangal, Kathmandu</small>
          <small class="ms-4"><i class="fa fa-envelope me-2"></i>salamwelfaresocietynepal@gmail.com</small>
        </div>
        <div class="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <a class="text-white-50 ms-3" target="_blank"
            href="https://www.facebook.com/profile.php?id=100094030991798&mibextid=LQQJ4d"><i
              class="fab fa-facebook-f"></i></a>
          <a class="text-white-50 ms-3" target="_blank" href="https://www.instagram.com/salam_welfare_society/"><i
            class="fab fa-instagram"></i></a>
          <a class="text-white-50 ms-3" target="_blank"
            href="https://www.youtube.com/channel/UC3LVwhVzwg4v2L_GnIdOHHQ"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <img loading="lazy" class="ms-2 me-lg-2" src="/img/logo.png" width="50" height="50" alt="main-logo" />
        <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
          <h1 class="fw-bold text-primary m-0">Salam<span class="text-white">Welfare</span></h1>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#" class="nav-item nav-link active">Home</a>
            <a href="#about" class="nav-item nav-link">About</a>
            <a href="causes.html" class="nav-item nav-link">Causes</a>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div class="dropdown-menu m-0">
                <a href="service.html" class="dropdown-item">Service</a>
                <a href="donate.html" class="dropdown-item">Donate</a>
                <a href="team.html" class="dropdown-item">Our Team</a>
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <a href="404.html" class="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="#contact" class="nav-item nav-link">Contact</a>
          </div>
          <div class="d-none d-lg-flex ms-2">
            <a class="btn btn-outline-primary py-2 px-3" href="" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              Donate Now
              <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                <i class="fa fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faMapMarkerAlt,
  faPhone, faEnvelope, faE
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <div class="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" id="contact">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h1 class="fw-bold text-primary mb-4">Salam<span class="text-white">Welfare</span></h1>
              <p>Salam Welfare Society: Empowering lives through compassion. We provide assistance, education
                support, healthcare, and
                preserve cultural heritage for a better future</p>
              <div class="d-flex pt-2">
                <a class="btn btn-square me-1" target="_blank"
                  href="https://www.facebook.com/profile.php?id=100094030991798&mibextid=LQQJ4d"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a class="btn btn-square me-1" target="_blank"
                  href="https://www.youtube.com/channel/UC3LVwhVzwg4v2L_GnIdOHHQ"><FontAwesomeIcon icon={faYoutube} /></a>
                <a class="btn btn-square me-1" target="_blank"
                  href="https://www.instagram.com/salam_welfare_society/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a class="btn btn-square me-1" target="_blank" href="https://wa.me/9779826293823"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="text-light mb-4">Address</h5>
              <p><FontAwesomeIcon className="me-3" icon={faMapMarkerAlt} />Sinamangal, Kathmandu</p>
              <p><FontAwesomeIcon className="me-3" icon={faPhone} /><a class="text-muted"
                href="tel:014475976">+977-01-4475976</a></p>
              <p><FontAwesomeIcon className="me-3" icon={faWhatsapp} /><a class="text-muted" target="_blank"
                href="https://wa.me/9779826293823">+977-9826293823</a></p>
              <p><FontAwesomeIcon className="me-3" icon={faEnvelope} />salamwelfaresocietynepal@gmail.com</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Quick Links</h5>
              <a class="btn btn-link" href="#about">About Us</a>
              <a class="btn btn-link" href="#footer">Contact Us</a>
              <a class="btn btn-link" href="#service">Our Services</a>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <a href="#">Salam Welfare Society</a>, All Right Reserved.
              </div>
              <div class="col-md-6 text-center text-md-end">
                Creator <a href="https://aakibshah.com.np">Aakib</a>
              </div>
            </div>
          </div>
        </div>
      </div >

      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </>
  )
}
export default Footer
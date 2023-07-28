import * as React from "react"
import Layout from "../components/layout"
import WhatWeDo from "../components/WhatWeDo";
import { StaticImage } from "gatsby-plugin-image"

import Slider from "react-slick";

const IndexPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Layout>

      {/* Caraousel  */}
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <StaticImage loading="lazy" className="w-100" src="../images/carousel-2.jpg" alt="car-one" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">Empowering Lives,
                        Nurturing Hope</h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">Transforming Communities
                        through Compassionate Action</p>
                      <a className="btn btn-primary py-2 px-3 animated slideInDown text-uppercase"
                        href="#contact">
                        Contact Us
                        <div
                          className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <StaticImage className="w-100" src="../images/helping-hands.jpg" alt="car-two" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">Unleashing Hope,
                        Inspiring Change</h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">Creating Opportunities for a
                        Brighter Future</p>
                      <a className="btn btn-primary py-2 px-3 animated slideInDown text-uppercase"
                        href="#contact">
                        Contact Us
                        <div
                          className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Car End  */}



      {/* About Start  */}
      <div className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400" }}>
                <StaticImage loading="lazy" className="position-absolute w-100 h-100 pt-5 pe-5" src="../images/team.jpg" alt="team-hands"
                  style={{ objectFit: "cover" }} />
                <StaticImage loading="lazy" className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src="../images/about-2.jpg" alt="about-hands" style={{ width: "200px", height: "200px" }} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</div>
                <h1 className="display-6 mb-5">Transforming Lives: Empowering Communities for a Better Tomorrow</h1>

                <p>Welcome to Salam Welfare Society, a beacon of hope and positive change.
                  With a steadfast commitment to uplifting
                  the lives of the underprivileged, we are dedicated to making a profound impact on our
                  community. </p>
                <p>
                  Through a diverse range of initiatives, we provide vital assistance to families in need,
                  improve living conditions, and
                  ensure access to education and healthcare. From building and renovating homes to sponsoring
                  orphans, from establishing
                  medical camps to training young men and women in trades and professions, we leave no stone
                  unturned in our pursuit of
                  social welfare.
                </p>
                <p>
                  Join us as we build a better future, one compassionate act at a time. Together, we can
                  empower lives, nurture hope, and
                  create a society where everyone has the opportunity to thrive.</p>

                <a className="btn btn-outline-primary py-2 px-3" href="#contact">
                  Contact Us
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End  */}

      {/* Features Start  */}
      <div className="container-xxl py-5" id="service">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">What We Do</div>
            <h1 className="display-6 mb-5">Learn More What We Do And Get Involved</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <Slider {...settings}>
              <>
                <WhatWeDo />
              </>
            </Slider>
          </div>
        </div>
      </div>
      {/* Features End  */}

    </Layout >
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

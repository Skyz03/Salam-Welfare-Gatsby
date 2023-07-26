import * as React from "react"
import Layout from "../components/layout"
import Car1 from "../images/carousel-2.jpg"
import Car2 from "../images/helping-hands.jpg"
import team from "../images/team.jpg"
import about from "../images/about-2.jpg"

const IndexPage = () => {
  return (
    <Layout>
      {/* Caraousel  */}
      <div class="container-fluid p-0 mb-5">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img loading="lazy" class="w-100" src={Car1} alt="Car 1" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7 pt-5">
                      <h1 class="display-4 text-white mb-3 animated slideInDown">Empowering Lives,
                        Nurturing Hope</h1>
                      <p class="fs-5 text-white-50 mb-5 animated slideInDown">Transforming Communities
                        through Compassionate Action</p>
                      <a class="btn btn-primary py-2 px-3 animated slideInDown text-uppercase"
                        href="#contact">
                        Contact Us
                        <div
                          class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i class="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img loading="lazy" class="w-100" src={Car2} alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7 pt-5">
                      <h1 class="display-4 text-white mb-3 animated slideInDown">Unleashing Hope,
                        Inspiring Change</h1>
                      <p class="fs-5 text-white-50 mb-5 animated slideInDown">Creating Opportunities for a
                        Brighter Future</p>
                      <a class="btn btn-primary py-2 px-3 animated slideInDown text-uppercase"
                        href="#contact">
                        Contact Us
                        <div
                          class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i class="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Car End  */}

      {/* About Start  */}
      <div class="container-xxl py-5" id="about">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img loading="lazy" class="position-absolute w-100 h-100 pt-5 pe-5" src={team} alt=""
                  style={{ objectFit: "cover" }} />
                <img loading="lazy" class="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src={about} alt="" style={{ width: "200px", height: "200px" }} />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</div>
                <h1 class="display-6 mb-5">Transforming Lives: Empowering Communities for a Better Tomorrow</h1>

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

                <a class="btn btn-outline-primary py-2 px-3" href="#contact">
                  Contact Us
                  <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i class="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End  */}

    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

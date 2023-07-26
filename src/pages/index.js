import * as React from "react"
import Layout from "../components/layout"
import Car1 from "../images/carousel-2.jpg"
import Car2 from "../images/helping-hands.jpg"

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


    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

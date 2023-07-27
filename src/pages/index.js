import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
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
            <div className="owl-carousel owl-theme">
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-headset fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Family Support: Changing Lives</h4>
                <p className="mb-4">Providing comprehensive assistance to needy families, improving their living
                  conditions, and empowering them for a
                  brighter future.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-home fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Safe Homes: Building Hope</h4>
                <p className="mb-4">Constructing and renovating homes for underprivileged families, creating safe
                  and nurturing environments.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-hospital fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Healing Hands: Hospital Aid</h4>
                <p className="mb-4">Supporting patients in hospitals through financial aid and emotional care,
                  ensuring access to necessary treatment.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-user-graduate fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Education for All: Empowering Minds</h4>
                <p className="mb-4">Enabling underprivileged students to continue their studies through scholarships
                  and educational support.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-user-plus fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Love Bonds: Marriage Assistance</h4>
                <p className="mb-4">Helping couples in need with financial and logistical support to celebrate their
                  special day.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-mosque fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Restoring Faith: Sacred Spaces</h4>
                <p className="mb-4">Building and restoring mosques and maintaining cemeteries to preserve our
                  religious heritage.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-child fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Bright Futures: Supporting Orphans</h4>
                <p className="mb-4">Sponsoring orphans and providing them with comprehensive support for a brighter
                  future.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-donate fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Seasons of Giving: Sharing Joy</h4>
                <p className="mb-4">Conducting charitable projects such as school bag distribution, Iftar meals, Eid
                  clothing, and winter clothing drives.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-first-aid fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Rebuilding Lives: Emergency Relief</h4>
                <p className="mb-4">Providing immediate aid to individuals affected by accidents or disasters,
                  helping them rebuild their lives.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-running fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Skills for Success: Vocational Training</h4>
                <p className="mb-4">Empowering young men and women through vocational training, equipping them with
                  valuable skills for employment.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-campground fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Healthcare on the Move: Medical Camps</h4>
                <p className="mb-4">Bringing essential healthcare services to underserved areas through mobile
                  medical camps.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-water fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Water for Life: Wells of Hope</h4>
                <p className="mb-4">Drilling wells to provide clean and sustainable water sources to communities in
                  need.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-chalkboard-teacher fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Inspiring Speakers: Preacher Training</h4>
                <p className="mb-4">Training individuals to become effective speakers and preachers, empowering them
                  to inspire others.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-book-reader fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Guiding Voices: Empowering Preachers</h4>
                <p className="mb-4">Nurturing and supporting preachers to spread messages of peace, love, and unity.
                </p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-university fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Education for Tomorrow: Modern Schools</h4>
                <p className="mb-4">Building modern schools that provide quality education combined with moral
                  values.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-female fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Empowering Minds: Girls' Institutes</h4>
                <p className="mb-4">Creating religious institutes exclusively for girls, empowering them with
                  knowledge and life skills.</p>

              </div>
              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-seedling fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Acts of Kindness: Spreading Goodness</h4>
                <p className="mb-4">Undertaking various charitable initiatives to make a positive impact and spread
                  kindness in our community.</p>

              </div>

              <div className="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
                <i className="fas fa-quran fa-5x mb-3 text-primary"></i>
                <h4 className="mb-3">Memorize to Illuminate: Quran Centers</h4>
                <p className="mb-4">Establishing centers for memorizing the Holy Quran, fostering a deep connection
                  with spirituality.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End  */}

    </Layout >
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

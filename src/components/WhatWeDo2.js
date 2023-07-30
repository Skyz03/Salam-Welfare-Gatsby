import * as React from "react"
import Slider from "react-slick";
const WhatWeDo = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
  };

  const whatItem = [
    {
      id: 1,
      title: "Family Support: Changing Lives1",
      description: "Providing comprehensive assistance to needy families, improving their living conditions, and empowering them for a brighter future."
    },
    {
      id: 2,
      title: "Family Support: Changingggggg Lives2",
      description: "Providing comprehensive assistance to needy families, improving their living conditions, and empowering them for a brighter future."
    },
    {
      id: 3,
      title: "Family Support: Changingggggg Lives3",
      description: "Providing comprehensive assistance to needy families, improving their living conditions, and empowering them for a brighter future."
    },
    {
      id: 3,
      title: "Family Support: Changingggggg Lives3",
      description: "Providing comprehensive assistance to needy families, improving their living conditions, and empowering them for a brighter future."
    },
  ]

  return (
    <Slider className="rare" {...settings}>
      {
        whatItem.map((item) => (
          <div class="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
            <i class="fas fa-headset fa-5x mb-3 text-primary"></i>

            <h4 class="mb-3">{item.title}</h4>
            <p class="mb-4">{item.description}</p>
          </div>
        ))
      }
    </Slider >
  )
}

export default WhatWeDo
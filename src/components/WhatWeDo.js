import * as React from "react"
const WhatWeDo = () => {

  const whatItem = [
    {
      id: 1,
      title: "Family Support: Changing Lives",
      description: "Providing comprehensive assistance to needy families, improving their living conditions, and empowering them for a brighter future."
    },
    {

    },
  ]

  return (
    <div class="service-item bg-white text-center h-100 p-4 m-4 p-xl-5">
      <i class="fas fa-headset fa-5x mb-3 text-primary"></i>
      <h4 class="mb-3">Family Support: Changing Lives</h4>
      <p class="mb-4">Providing comprehensive assistance to needy families, improving their living
        conditions, and empowering them for a
        brighter future.</p>
    </div>
  )
}

export default WhatWeDo
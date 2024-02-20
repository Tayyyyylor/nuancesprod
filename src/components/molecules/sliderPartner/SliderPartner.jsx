import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { brandData } from './SliderPartner.utlis'

export default function SliderPartner() {
  useGSAP(() => {
    gsap.fromTo(
      '.sliderPartner',
      {
        xPercent: 200,
      },
      {
        xPercent: -200,
        duration: 20,
        repeat: -1,
        delay: 1,
      }
    )
  })

  return (
    <article className="sliderPartner">
      <div className="sliderPartner__img_container">
        {brandData.map((brand, index) => (
          <Image
            width={70}
            height={30}
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="sliderPartner__img"
          />
        ))}
      </div>
    </article>
  )
}

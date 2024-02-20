import LinkButton from '@/components/atoms/buttons/linkButton/LinkButton'
import Contact from '@/components/molecules/contact/Contact'
import SliderPartner from '@/components/molecules/sliderPartner/SliderPartner'
import React from 'react'
import { linkButtonData } from './Homepage.utils'

export default function HomepageTemplate() {
  return (
    <main className="homepage">
      <section className="homepage__button_container">
      {linkButtonData.map((data, index) => (
        <LinkButton key={index} label={data.label} pictures={data.pictures}/>
      ))}
      </section>
      <section className="homepage__slider">
        <SliderPartner />
      </section>
      <section className="homepage__contact">
        <Contact />
      </section>
    </main>
  )
}

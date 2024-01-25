import LinkButton from '@/components/atoms/buttons/linkButton/LinkButton'
import Contact from '@/components/molecules/contact/Contact'
import SliderPartner from '@/components/molecules/sliderPartner/SliderPartner'
import React from 'react'

export default function HomepageTemplate() {
  return (
    <main className="homepage">
      <section className="homepage__button_container">
        <LinkButton label="tournage vidéos" />
        <LinkButton label="votre évènement" />
        <LinkButton label="réalisations" />
        <LinkButton label="création graphique" />
        <LinkButton label="location matériel" />
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

import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <Image src="/nuanceLogoBlack.png" alt="" width={200} height={70} />
      <p className="footer__text">Suivez-nous</p>
      <div className="footer__rs">
        <Image src="/Instagram_icon.png" alt="" width={30} height={30} />
        <Image src="/youtube_icon.png" alt="" width={30} height={30} />
        <Image src="/facebook_icon.webp" alt="" width={30} height={30} />
      </div>
    </footer>
  )
}

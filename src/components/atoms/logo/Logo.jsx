import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Logo() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  return (
    <Image
      className="logo"
      src={'/nuanceLogoMobile.png'}
      width={isMobile ? 100 : 270}
      height={isMobile ? 30 : 78}
      alt="logo"
    />
  )
}

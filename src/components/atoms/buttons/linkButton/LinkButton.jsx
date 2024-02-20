import React, { useState } from 'react'

export default function LinkButton({ label, pictures }) {
  const [isHover, setIsHover] = useState(false)

  console.log('isHover', isHover)

  return <div className="linkButton"   
  onMouseEnter={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
  style={{
    backgroundImage: isHover ? `url(${pictures})` : 'none',
    backgroundSize: 'cover', // Ajustez si nécessaire
    backgroundRepeat: 'no-repeat', // Ajustez si nécessaire
  }}
  >{label}</div>
}

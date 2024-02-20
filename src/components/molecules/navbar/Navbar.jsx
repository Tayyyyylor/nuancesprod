import Link from 'next/link'
import { useEffect, useState } from 'react'

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleClick = () => {
    setMenuIsOpen(false)
  }

  return (
    <>
      {isMobile ? (
        <nav
          className={`nav-mobile ${menuIsOpen ? 'active' : ''}`}
          style={{ background: 'white', transition: 'all 0.5s ease-in-out' }}
        >
          <Link
            href="/services"
            className="navbar-link margin-top"
            onClick={handleClick}
          >
            services
          </Link>
          <Link href="/devis" className="navbar-link" onClick={handleClick}>
            demande de devis
          </Link>
          <Link href="/apropos" className="navbar-link" onClick={handleClick}>
            à propos
          </Link>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <Link href="/services" className="navbar-link">
            services
          </Link>
          <Link href="/devis" className="navbar-link">
            demande de devis
          </Link>
          <Link href="/apropos" className="navbar-link">
            à propos
          </Link>
        </nav>
      )}

      {isMobile ? (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
        </button>
      ) : (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
        </button>
      )}
    </>
  )
}

export default Navbar

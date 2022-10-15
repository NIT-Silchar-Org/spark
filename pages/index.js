import { useState, useRef } from 'react'
import Ham_icon from '../components/elements/ham_icon'
import Hamburger_menu from '../components/elements/hamburger_menu'
import Head from 'next/head'
import Hero from '../components/sections/hero'
import Main from '../components/sections/Main'
import Footer from '../components/Footer/footer'

function Hs() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="hs backgroundcolor">
      <Head>
        <title>NITS SPARKS</title>
      </Head>
      <div className="hero_bg min-h-[100vh] w-[100vw] flex">
        <Hamburger_menu showMenu={showMenu} setShowMenu={setShowMenu} />

        <Ham_icon showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div>
        <Hero showMenu={showMenu} />
        <Main />
      </div>
      <Footer/>
    </div>
  )
}

export default Hs

import { useState, useRef } from 'react'
import Ham_icon from '../components/elements/ham_icon'
import Hamburger_menu from '../components/elements/hamburger_menu'
import Head from 'next/head'
import Artist from '../components/Artist/Artist'

function Hs() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="hs">
      <Head>
        <title>NITS SPARKS</title>
      </Head>
      {/* <div
        className="hero_bg min-h-[100vh] w-[100vw] flex"
      >
        <Hamburger_menu showMenu={showMenu} setShowMenu={setShowMenu} />

        <Ham_icon showMenu={showMenu} setShowMenu={setShowMenu} />

      </div> */}
      <Artist/>
    </div>
  )
}

export default Hs

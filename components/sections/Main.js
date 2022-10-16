// import Hero from './hero'
import Artist2 from "../Artist/Artist2"
import Footer from "../Footer/footer"
import AboutSpark from "./aboutSpark"
import AboutTecno from './aboutTecno'
import Gallery from "./Gallery"

const Main = ({}) => {
  return (
    <div className="relative overflow-y-hidden overflow-x-hidden">
      <div className="absolute"></div>
      <AboutSpark />
      <AboutTecno />
      <Artist2 />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Main

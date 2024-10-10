import Header from './Components/Header.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'
import Menu from './Components/Menu.jsx'
import Skills from './Components/Skills.jsx'
import About from './Components/About.jsx'
import Experience from './Components/Experience.jsx'
import PortoGrid from './Components/PortoGrid.jsx'

function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* <PortoGrid/> */}
      <About />
      <Experience />
      <Skills />
      <Footer />
      <Menu />
    </>
  );
}

export default App
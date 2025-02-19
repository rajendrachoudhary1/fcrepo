import Hero from './component/hero/Hero'
import Navbar from './component/navbar/Navbar'
import Benefit from './component/benefits/Benefit'
import Card from './component/card/Card'
import Faq from './component/FAQ/Faq'
import Footer from './component/footer/Footer'
import Slider from './component/slider/Slider'
 
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/> 
     <Slider/>
     <Benefit/> 
     <Card/>
     <Faq/>
     <Footer/>
    </>
  )
}

export default App

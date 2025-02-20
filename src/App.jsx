import Hero from './component/hero/Hero'
import Navbar from './component/navbar/Navbar'
import Benefit from './component/benefits/Benefit'
import Card from './component/card/Card'
import Faq from './component/FAQ/Faq'
import Footer from './component/footer/Footer'
import Slider from './component/slider/Slider'
import Titlefeature from './component/titlefeature/Titlefeature'
 
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/> 
      <Titlefeature/>
     <Slider/>
     <Benefit/> 
     <Card/>
     <Faq/>
     <Footer/>
    </>
  )
}

export default App

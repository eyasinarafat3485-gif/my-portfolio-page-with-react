import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import CraftedProjects from './components/Crafted Projects/CraftedProjects'
import Experience from './components/Experience/Experience'
import Service from './components/Services/Service'
import LetsWork from './components/Let\'s Work/LetsWork'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
     <header>
      <Navbar></Navbar>
      <Banner></Banner>
      </header>
      <main>
      <About></About>
      <CraftedProjects></CraftedProjects>
      <Experience></Experience>
      <Service></Service>
      <LetsWork></LetsWork>
      </main>
      <Footer></Footer>
      
    

    
    </>
  )
}

export default App

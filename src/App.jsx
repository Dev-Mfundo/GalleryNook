import './App.css'
import AuthUser from './components/AuthUser';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Portrait from './components/Portrait';
import Footer from './Footer';
import Header from './Header';


const App =()=>{
  return(
    <div className='container'>
        <Header/>
        <AuthUser/>
      <main>
        <Hero/>
        <Gallery/>
        <Portrait/>
        <Contact/>
      </main>
        <Footer/>
    </div>
  )
}
export default App;
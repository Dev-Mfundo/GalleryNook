import './App.css'
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Portrait from './components/Portrait';
import Footer from './Footer';
import Header from './Header';

const App =()=>{
  return(
    <div className='container'>
        <Header/>
      <main>
        <Hero/>
        <Gallery/>
        <Portrait/>
      </main>
        <Footer/>
    </div>
  )
}
export default App;
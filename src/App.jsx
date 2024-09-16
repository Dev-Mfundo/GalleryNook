import './App.css'
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Portrait from './components/Portrait';

const App =()=>{
  return(
    <div className='container'>
      <header></header>
      <main>
        <Hero/>
        <Gallery/>
        <Portrait/>
      </main>
      <footer></footer>
    </div>
  )
}
export default App;
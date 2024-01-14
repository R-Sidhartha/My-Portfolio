import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Services/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import SocialIcons from "./components/SocialIcons.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Grid from "./components/grid.jsx";
import Footer from "./components/Footer.jsx";
import './styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
       <SocialIcons />
      <Services />
      <Portfolio />
      <Grid/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

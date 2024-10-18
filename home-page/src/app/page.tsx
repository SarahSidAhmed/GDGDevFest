
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Dash from './components/Dash';

const App = () => {
  return (
    <div className="App">
      <section className="head">
        <Navbar />
      </section>
      <section className="hero">
        <HeroSection />
      </section>
      <section className="Dash">
        <Dash />
      </section>
      
    </div>
  );
};

export default App;

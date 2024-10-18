
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div className="App">
      <section className="head">
        <Navbar />
      </section>
      <section className="hero">
        <HeroSection />
      </section>
    </div>
  );
};

export default App;

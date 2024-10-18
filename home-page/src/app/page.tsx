<<<<<<< HEAD
import Footer from '../compounents/Footer';
import QA from '../compounents/Q&A';

const HomePage = () => {
  return (
    <div>
      {/* QA */}
      <QA />
      {/* Footer */}
      <Footer />
=======

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
      
>>>>>>> origin/lyna
    </div>
  );
};

<<<<<<< HEAD
export default HomePage;
=======
export default App;
>>>>>>> origin/lyna

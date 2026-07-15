import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BriefingForm from "./components/BriefingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Gallery />
        <BriefingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

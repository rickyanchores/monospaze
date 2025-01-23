
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Banner from "./Components/Banner/Banner";

export default function App() {
  return (
    <div className="App font-mono">
      <Nav />
      <Home />
      <Banner />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

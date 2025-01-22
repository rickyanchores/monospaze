import Image from "next/image";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";

export default function App() {
  return (
    <div className="App font-mono">
      <Nav />
      <Home />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import Gallery from "./Pages/Gallery/Gallery";

export default function App() {
  return (
    <div className="App font-mono">
      <Nav />
      <Home />
      <Gallery />
      
    </div>
  );
}

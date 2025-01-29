
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Banner from "./Components/Banner/Banner";

export default function App() {

  let bannerImage = [
    {
      key: 0,
      name: "Hello",
      url: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwbW9kZWwlMjB8ZW58MHx8fHwxNzM3NjMwNTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      key:1,
      name: "",
      url: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwbW9kZWwlMjB8ZW58MHx8fHwxNzM3NjMwNTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
    }
  ]


  return (
    <div className="App font-mono">
      <Nav />
      <Home />
      <Banner image={bannerImage.name}/>
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

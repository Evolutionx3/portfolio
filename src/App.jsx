import "./App.css";
import { Routes, Link } from "react-router-dom";
import MainTemplate from "./template/MainTemplate";
import Hero from "./organisms/Hero/Hero";
import About from "./organisms/About/About";

function App() {
  // return (
  //   <Routes>
  //     <Route index element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/contact" element={<Contact />} />
  //   </Routes>
  // )

  return (
    <div className="App mx-auto">
      <MainTemplate>
        <Hero />
        <About />
      </MainTemplate>
    </div>
  );
}

export default App;

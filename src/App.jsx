import "./App.css";
import { Routes, Link } from "react-router-dom";
import MainTemplate from "./template/MainTemplate";
import Hero from "./organisms/Hero/Hero";

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
        <section
          id="about"
          className="px-6 md:px-24 container md:max-w-screen-lg xl:px-0 mx-auto"
        >
          <div>
            <div>
              <img />
            </div>
            <div>
              <h2>About me</h2>
              <h3>React & Wordpress Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                ducimus perferendis excepturi, libero deleniti, nesciunt earum
                beatae tenetur exercitationem architecto nulla laboriosam ipsam.
                Nulla officiis recusandae omnis dolor! Provident, voluptatem.
              </p>
              <div></div>
            </div>
          </div>
        </section>
      </MainTemplate>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Login /> */}

        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* <section className=" snap-start snap-always scroll-pt-20 ">
        <Home />
      </section>
      <section className=" snap-center snap-always scroll-smooth">
        <About />
      </section>
      <section className=" snap-center snap-always">
        <Projects />
      </section>
      <section className=" snap-center snap-always">
        <Blog />
      </section>
      <section className=" snap-center snap-always">
        <Contact />
      </section>
      <section className=" snap-start snap-always">
      <Footer />
      </section>

       */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

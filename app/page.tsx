import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Assignment from "./components/Assignment";
import Help from "./components/Help";
import Register from "./components/Register";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
    return (
        <>
            <div className="wrapper">
                <Navbar />
            </div>

            <Hero />

            <div className="wrapper" id="about">
                <About />
            </div>

            <div className="wrapper">
                <Assignment />
            </div>

            <div className="wrapper" id="demo">
                <Register />
            </div>

            <div className="wrapper">
                <Comments />
            </div>

            <div className="wrapper" id="contact">
                <Contact />
            </div>

            <div className="wrapper">
                <Footer />
            </div>
        </>
    );
}

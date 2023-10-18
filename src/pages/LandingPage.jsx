import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { Footer } from "flowbite-react";
import logo from "../assets/logo.png";
const LandingPage = () => {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer container className="bg-slate-900">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img src={logo} className="w-20 inline-block items-center" />
                <span className="text-neutralSilver">AC</span>
              </a>
            </div>
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Our Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="http://www.example.com">Website</Footer.Link>
                <Footer.Link href="http://www.facebook.com/example">
                  Facebook
                </Footer.Link>
                <Footer.Link href="http://www.twitter.com/example">
                  Twitter
                </Footer.Link>
                <Footer.Link href="http://www.instagram.com/example">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Get in Touch" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:+11234567890">
                  +1 (123) 456-7890
                </Footer.Link>
                <Footer.Link href="mailto:info@example.com">
                  info@example.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-center">
            <Footer.Copyright by="AC™" href="#" year={2023} />
          </div>
        </div>
      </Footer>
    </>
  );
};

export default LandingPage;

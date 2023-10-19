import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { Footer } from "flowbite-react";
import logo from "../assets/logo2.png";
const LandingPage = () => {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer container className="bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img src={logo} className="w-20 inline-block items-center" />
                <span className="text-neutralGray">AC photovoltaic</span>
              </a>
            </div>
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Company</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Support" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">Testimonials</Footer.Link>
                <Footer.Link href="#">Pricing</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Get in Touch" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:+21620856475">
                  +216 20 85064075
                </Footer.Link>
                <Footer.Link href="mailto:societenour28@gmail.com">
                  societenour28@gmail.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default LandingPage;

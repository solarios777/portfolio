
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Certificate from "../components/Certificate"



const Home = () => {
  return (
    <>
      <section id="home" className=" flex flex-col justify-center items-center">
        <div className=" container mx-auto  ">
          <Hero />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col justify-center items-center">
        <div className="container mx-auto">
          <About />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="flex flex-col justify-center items-center "
      >
        <div className="container mx-auto ">
          {/* <Services /> */}
          <Services />
        </div>
      </section>

      {/* work Section */}
      <section id="work" className=" flex flex-col justify-center items-center">
        <div className="container mx-auto lg:mb-40 mt-40">
          <Work />
        </div>
      </section>
      {/* certificate Section */}
      <section
        id="certificate"
        className=" flex flex-col justify-center items-center"
      >
        <div className="container mx-auto my-40">
          <Certificate />
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="flex flex-col justify-center items-center"
      >
        <div className="container mx-auto z-40 mb-40">
          {/* <Contact /> */}
          <Contact />
          {/* <Footer/> */}
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col justify-center items-center"
      >
        <div className="container mx-auto z-40 mb-16">
          {/* footer */}
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;

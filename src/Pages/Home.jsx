import ImageCarousel from "../Components/Home/Carousel/ImageCarousel";
import Navbar from "@Components/Global/Navbar/Navbar";
import Footer from "@Components/Global/Footer/Footer";
import { carouselData } from "@Data/Carousel/Carousel";
import TypewriterComponent from "@Components/Home/About/About";
import { projects } from "../Data/ProjectsCards/ProjectsCardsCata";
import ProjectsCarousel from "../Components/Home/ProjectsCarousel/ProjectsCarousel";
import SponsorSection from "@Components/Home/Sponsors/Sponsor";
function Home() {
  return (
    <section>
      <section>
        <Navbar />
      </section>
      <section>
        <ImageCarousel carouselData={carouselData} />
      </section>
      <section>
        <TypewriterComponent />
      </section>
      <section className="text-center">
        <ProjectsCarousel projects={projects} />
      </section>
      <section>
        <SponsorSection />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

export default Home;

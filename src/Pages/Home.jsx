import Navbar from "@Components/Global/Navbar";
import ImageCarousel from "../Components/Home/Carousel/ImageCarousel";
import { carouselData } from "@Data/Carousel/Carousel";
import TypewriterComponent from "@Components/Home/About/About";
import { projects } from "../Data/ProjectsCards/ProjectsCardsCata";
import ProjectsCarousel from "../Components/Home/ProjectsCarousel/ProjectsCarousel";
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
    </section>
  );
}

export default Home;

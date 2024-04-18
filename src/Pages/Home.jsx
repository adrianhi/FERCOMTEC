import ImageCarousel from "../Components/Home/Carousel/ImageCarousel";
import Header from "@Components/Global/Header/Header";
import Footer from "@Components/Global/Footer/Footer";
import { carouselData } from "@Data/Carousel/Carousel";
import TypewriterComponent from "@Components/Home/About/About";
import { projects } from "../Data/ProjectsCards/ProjectsCardsCata";
import ProjectsCarousel from "../Components/Home/ProjectsCarousel/ProjectsCarousel";
function Home() {
  return (
    <section>
      <section>
        <Header />
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
        <Footer />
      </section>
    </section>
  );
}

export default Home;

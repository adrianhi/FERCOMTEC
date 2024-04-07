import Header from "@Components/Global/Header";
import Carousel from "@Components/Home/Carousel/Carousel";
import { carouselData } from "@Data/Carousel/Carousel";
import TypewriterComponent from "../Components/Home/About/About";
function Home() {
  return (
    <section>
      <section>
        <Header />
      </section>
      <section>
        <Carousel carouselData={carouselData} />
      </section>
      <section>
        <TypewriterComponent />
      </section>
    </section>
  );
}

export default Home;

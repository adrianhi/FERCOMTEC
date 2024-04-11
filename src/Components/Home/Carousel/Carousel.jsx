import { Carousel } from "primereact/carousel";

const CustomCarousel = ({ carouselData }) => {
  const itemTemplate = (item) => {
    return (
      <div className="carousel-item">
        <img src={item.image} alt={item.title} />
        <div className="carousel-caption">
          <h5>{item.title}</h5>
          <p>{item.caption}</p>
        </div>
      </div>
    );
  };

  return <Carousel value={carouselData} itemTemplate={itemTemplate} />;
};

export default CustomCarousel;

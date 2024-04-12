import { Carousel } from "primereact/carousel";

const MyCarousel = ({ carouselData }) => {
  const itemTemplate = (item) => {
    return (
      <div className="p-5 d-flex ">
        <img
          src={item.image}
          alt={item.title}
          className="rounded mx-auto d-block img-fluid "
          style={{width: '1000px'}}
        />
        <div className="carousel-caption">
          <h4>{item.title}</h4>
          <p>{item.caption}</p>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={carouselData}
      itemTemplate={itemTemplate}
      circular
      autoplayInterval={3000}
      indicators
    />
  );
};

export default MyCarousel;

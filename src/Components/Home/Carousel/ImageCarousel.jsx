import { Carousel } from "primereact/carousel";

const MyCarousel = ({ carouselData }) => {
  const itemTemplate = (item) => {
    return (
      <div className="p-5 d-flex align-items-center justify-content-center">
        <img
          src={item.image}
          alt={item.title}
          className="rounded mx-auto d-block img-fluid"
          style={{ maxWidth: "100%" }}
        />
       
      </div>
    );
  };

  return (
    <Carousel
      value={carouselData}
      itemTemplate={itemTemplate}
      circular
      autoplayInterval={5000}
    />
  );
};

export default MyCarousel;

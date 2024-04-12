import useTypewriter from "@Hooks/useTypeWritter";
import "./About.css";

const TypewriterComponent = () => {
  const text = "¿Qué es FERCOMTEC?";
  const speed = 200;
  const { displayText, containerRef } = useTypewriter(text, speed);

  return (
    <section className="about-section mb-5 ">
      <div className="typewriter-container text-center" ref={containerRef}>
        <p className="typewriter-text fercomtec-text">{displayText}</p>
      </div>
      <div className="content mx-auto">
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          distinctio explicabo quibusdam numquam soluta nulla? Tenetur odit enim
          repellat commodi totam nam libero in. Nihil totam modi autem ex id?
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A q\uidem
          iure animi molestiae, fugit cum quasi facere architecto, magni itaque
          beatae, possimus minima voluptate vitae fugiat tempora reiciendis ea
          velit?
        </p>
      </div>
    </section>
  );
};

export default TypewriterComponent;

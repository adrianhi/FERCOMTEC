// TypewriterComponent.js
import useTypewriter from "@Hooks/Typewritter";
import "./About.css";
const TypewriterComponent = () => {
  const text = "¿Qué es FERCOMTEC?";
  const speed = 200;
  const { displayText, containerRef } = useTypewriter(text, speed);

  return (
    <section className="bg-body-tertiary my-2">
      <div className="fercomtec-text text-center" ref={containerRef}>
        <p className="fs-2 fw-bold">{displayText}</p>
      </div>
      <div>
        <p className="fs-5 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          distinctio explicabo quibusdam numquam soluta nulla? Tenetur odit enim
          repellat commodi totam nam libero in. Nihil totam modi autem ex id?
        </p>
      </div>
    </section>
  );
};

export default TypewriterComponent;

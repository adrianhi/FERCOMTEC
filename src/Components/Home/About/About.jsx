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
        La Feria de Competencias Técnicas (FERCOMTEC) concentra el resultado de los trabajos desarrollados en los diferentes módulos técnicos de los estudiantes finalistas.
        </p>
      </div>
    </section>
  );
};

export default TypewriterComponent;

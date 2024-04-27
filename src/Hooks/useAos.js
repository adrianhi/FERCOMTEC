import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (duration) => {
  useEffect(() => {
    AOS.init({ duration });

    return () => {
      AOS.refresh();
    };
  }, [duration]);

  return AOS;
};

export default useAOS;

import "./Sponsor.css"
import priceSmart from "@Images/Sponsor/priceSmart.png";
import onapi from "@Images/Sponsor/onapi.png";
import cmr from "@Images/Sponsor/cmr.png";

const SponsorSection = () => {
  return (
    <div className=" w-100 my-5 ">
      <h2 className="text-center mb-4">Nuestros Patrocinadores</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 col-sm-6 col-8 mb-4 sponsor-style">
          <img src={priceSmart} alt="PriceSmart" className="img-fluid" />
        </div>
        <div className="col-md-4 col-sm-6 col-8 mb-4 sponsor-style">
          <img src={onapi} alt="ONAPI" className="img-fluid" />
        </div>
        <div className="col-md-4 col-sm-6 col-8 mb-4 sponsor-style">
          <img src={cmr} alt="CMR" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;

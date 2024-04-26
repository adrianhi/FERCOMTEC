import "./Sponsor.css"
import priceSmart from "@Images/Sponsor/priceSmart.png"
import onapi from "@Images/Sponsor/onapi.png"
import cmr from "@Images/Sponsor/cmr.png"
import { Image } from "./Image.jsx"

export const Sponsor = () => {
  return(
    <div className="w-100 bg-sponsor ">
<h3 className="text-center"> Nuestros Sponsors</h3>
<div className="container">
<div className="row justify-content-center ">
<Image image={priceSmart} width="400px"  />
<Image image={onapi} width="210px"/>
<Image image={cmr} width="130px"/>

</div>

</div>

    </div>
  )
}

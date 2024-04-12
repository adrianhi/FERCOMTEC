import "./Footer.css";
import ig from "@Images/Footer/ig.png"

export default function Footer ()  {
 
  return(
    <footer class="bg-footer footer-bold text-center text-lg-start text-white fixed-bottom ">
    <section class="container py-4">
        <div class="d-flex justify-content-center justify-content-lg-between align-items-center">
            <div class="me-lg-5 mb-0 mb-lg-0">
                <span>Copyright © 6to Desarrollo 2023-2024</span>
            </div>
            <div>
                <a href="https://www.instagram.com/politecnicomariadelaaltagracia/" target="_blank" className="me-4 text-reset">
                    <img src={ig} alt="Instagram" />
                </a>
            </div>
        </div>
    </section>
</footer>

 
  )}

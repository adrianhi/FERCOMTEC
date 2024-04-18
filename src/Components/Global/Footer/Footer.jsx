import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-footer footer-bold text-center text-lg-start text-white  ">
      <section className="container py-4">
        <div className="d-flex justify-content-center justify-content-lg-between align-items-center">
          <div className="me-lg-5 mb-0 mb-lg-0">
            <span>Copyright © 6to Desarrollo 2023-2024</span>
          </div>
          <div>
            <a
              href="https://www.instagram.com/politecnicomariadelaaltagracia/"
              target="_blank"
              className="me-4 text-reset"
            >
              <i className="pi pi-instagram bg-footer"></i>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

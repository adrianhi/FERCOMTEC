import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-footer footer-bold  text-white  ">
      <section className="container py-4">
        <div className="d-flex  justify-content-between ">
          <div>
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

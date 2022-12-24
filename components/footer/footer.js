import logo from "../../public/img/logo.png";
import Link from "next/link";
import Image from "next/image";

function footer() {
  return (
    <footer>
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <i>
                <Image src={logo} alt="logo" width={60} />
              </i>

              <h1 className="text-white mb-4 fs-2">
                Iglesia Evangélica de Vilassar de Mar
              </h1>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Dirección</h4>
              <address>
                <i className="fa fa-map-marker-alt me-3"></i> <address>C/ de lAngel, 8 -
                08340 Vilassar de Mar , Barcelona</address> 
              </address>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+34 777 555 444
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Accesos Directos</h4>
              <Link href="misionVision" className="btn btn-link">
                Sobre Nosotros
              </Link>
              <Link href="contacto" className="btn btn-link">
                Contacta
              </Link>
              <Link href="media" className="btn btn-link">
                Media
              </Link>
              <Link href="actividades" className="btn btn-link">
                Actividades
              </Link>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-primary me-1"
                  href="https://www.facebook.com/eevilassardemar"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-primary me-1"
                  href="https://www.youtube.com/user/Jesusviu/featured"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p>Església de Vilassar de Mar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </footer>
  );
}

export default footer;

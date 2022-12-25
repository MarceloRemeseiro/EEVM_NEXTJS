import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]); // Esto hace que el efecto se ejecute cada vez que el usuario navega a otra página

  return (
    <nav
      className="navbar navbar-expand-xl navbar-light bg-light "

    >
      
      <Link href="/">
        <Image
          className="mx-5"
          src="/img/logo.png"
          alt="Logo"
          width={60}
          height={60}
        />
      </Link>
      <button
        className="navbar-toggler navbar-toggler-left"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto navbar-nav-left nav-font-size fs-4 nav-bg-color nav-pills">
          <li className="nav-item active">
            <Link href="/" className="nav-link nav-font-color">
              INICIO
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/actividades" className="nav-link nav-font-color">
              ACTIVIDADES
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle nav-font-color"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SOBRE NOSOTROS
            </a>
            <div
              className="dropdown-menu nav-bg-color fs-4 bg-light py-4 px-3"
              aria-labelledby="navbarDropdown"
            >
              <Link
                href="/misionVision"
                className="dropdown-item nav-font-color"
              >
                Mision y Visión
              </Link>
              <Link href="/pastores" className="dropdown-item nav-font-color">
                Pastores
              </Link>
              <Link href="/historia" className="dropdown-item nav-font-color">
                Nuestra Historia
              </Link>
              <Link href="/evangelio" className="dropdown-item nav-font-color">
                El Evangelio
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link href="/media" className="nav-link nav-font-color">
              MEDIA
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/donar" className="nav-link nav-font-color">
              DONAR
            </Link>
          </li>
        </ul>
        <Link href="/contacto" className="btn btn-primary mx-5 fs-3">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

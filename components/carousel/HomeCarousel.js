import Link from "next/link";
import Spinner from "../spinner/spinner";
import Image from "next/image";

const ancho="1800"
const alto ="800"
              

export function HomeCarousel({ data }) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="#" target="_blank" rel="noreferrer">
            <Image
              src={data[0].properties.imagen.files[0].file.url}
              className="d-block w-100 img-fluid"
              alt=""
              width={ancho}
              height={alto}
            />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#" target="_blank" rel="noreferrer">
          <Image
              src={data[1].properties.imagen.files[0].file.url}
              className="d-block w-100 img-fluid"
              alt=""
              width={ancho}
              height={alto}
            />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#" target="_blank" rel="noreferrer">
          <Image
              src={data[2].properties.imagen.files[0].file.url}
              className="d-block w-100 img-fluid"
              alt=""
              width={ancho}
              height={alto}
            />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#" target="_blank" rel="noreferrer">
          <Image
              src={data[3].properties.imagen.files[0].file.url}
              className="d-block w-100 img-fluid"
              alt=""
              width={ancho}
              height={alto}
              
            />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Spinner from "../spinner/spinner";
import Image from "next/image";

export default function Slider({ data }) {
  const [loading, setLoading] = useState(true);

  const visible1 =
    data[0].properties.boton.checkbox === true
      ? "btn btn-primary btn-smpy-2 px-3 "
      : "d-none";
  const visible2 =
    data[1].properties.boton.checkbox === true
      ? "btn btn-primary btn-smpy-2 px-3 "
      : "d-none";

  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide position-relative" // Añade la clase position-relative aquí
        data-bs-ride="carousel"
      >
        {loading && <Spinner />}

        {/* Rest of the carousel code */}
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              className="d-block  mx-auto altoCarrousel "
              src={data[0].properties.imagen.files[0].file.url}
              alt="ImagenFondo1"
              width="100%"
              height="auto"
              sizes="fill"
              onLoad={() => setLoading(false)}
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="carousel-content mt-1">
                    <h5 className="text-light text-uppercase mb-1 animated slideInDown fs-6 ">
                      {data[0].properties.subtitulo.rich_text[0].plain_text}
                    </h5>
                    <h1 className="fs-1 text-light mb-1 animated slideInDown">
                      {data[0].properties.titulo.title[0].plain_text}
                    </h1>

                    <a
                      href={data[0].properties.url.url}
                      target="_blank"
                      rel="noreferrer"
                      className={"" + visible1 + ""}
                    >
                      Mas detalles
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block altoCarrousel mx-auto"
              src={data[1].properties.imagen.files[0].file.url}
              alt="ImagenFondo1"
              width="100%"
              height="auto"
              sizes="fill"
              onLoad={() => setLoading(false)}
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <h5 className="text-light text-uppercase mb-1 animated slideInDown fs-6">
                      {data[1].properties.subtitulo.rich_text[0].plain_text}
                    </h5>
                    <h1 className="fs-1 text-light mb-1 animated slideInDown">
                      {data[1].properties.titulo.title[0].plain_text}
                    </h1>
                    <a
                      href={data[0].properties.url.url}
                      target="_blank"
                      rel="noreferrer"
                      className={"" + visible2 + ""}
                    >
                      Mas detalles
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

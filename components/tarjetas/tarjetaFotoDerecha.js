import Image from "next/image";

function TarjetaFotoDerecha({ data }) {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">
                {data[0].properties.subtitulo.rich_text[0].plain_text}
              </h6>
              <h1 className="display-6 mb-0">
                {data[0].properties.titulo.title[0].plain_text}
              </h1>
            </div>
            <p className="mb-5">
              {data[0].properties.descripcion.rich_text[0].plain_text}
            </p>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="Tarjeta-1 position-relative overflow-hidden w-100"
              /* style="min-height: 400px" */
            >
              <Image
                className="position-absolute w-100 h-100"
                src={data[0].properties.imagen.files[0].file.url}
                alt=""
                width={800} height={800}
                /* style="object-fit: cover" */
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarjetaFotoDerecha;

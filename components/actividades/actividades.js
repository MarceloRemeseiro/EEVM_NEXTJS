import Link from "next/link";

export function Actividades({ data }) {
  return (
    <div className="container-xxl py-5 actividades">
      <div className="container">
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h1 className="display-6 mb-0">Nuestras Actividades</h1>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {data?.map((actividad) => {
            return (
              <div
                key={actividad.properties.titulo.title[0].plain_text}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.c1s"
              >
                <div className="service-item bg-light overflow-hidden h-100">
                  <img
                    className="img-fluid"
                    src={actividad.properties.imagen.files[0].file.url}
                    alt={actividad.properties.titulo.title[0].plain_text}
                  />
                  <Link
                    href={actividad.properties.link.url}
                    className="small"
                  >
                    <div className="service-text position-relative text-center h-100 p-4">
                      <h5 className="mb-3">
                        {actividad.properties.titulo.title[0].plain_text}
                      </h5>
                      <p>
                        {
                          actividad.properties.descripcion.rich_text[0]
                            .plain_text
                        }
                      </p>
                      <p className="link ">
                        Leer mas<i className="fa fa-arrow-right ms-3"></i>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

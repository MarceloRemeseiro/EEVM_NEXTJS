import Image from "next/image";
import GetDatos from "./api/getActividades";

export const getServerSideProps = GetDatos("e7806c8e356f4449bb2a0a9260f9508b").getServerSideProps;

function pastores({datos}) {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Pastores
          </h1>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="Tarjeta-1 position-relative overflow-hidden ">
                <Image
                  className="position-absolute w-100 h-500"
                  src={datos[2].properties.foto.files[0].file.url}
                  alt=""
                  width={500}
                  height={600}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="border-start border-5 border-primary ps-4 mb-5">
                  <h6 className="text-body text-uppercase mb-2">Pastor</h6>
                  <h1 className="display-6 mb-0">{datos[2].properties.nombre.title[0].plain_text}</h1>
                </div>
                <p>
                  {datos[2].properties.descripcion.rich_text[0]
                            .plain_text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-5" />
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="Tarjeta-1 position-relative overflow-hidden ">
                <Image
                  className="position-absolute w-100 h-500"
                  src={datos[1].properties.foto.files[0].file.url}
                  alt=""
                  width={500}
                  height={600}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="border-start border-5 border-primary ps-4 mb-5">
                  <h6 className="text-body text-uppercase mb-2">Pastor</h6>
                  <h1 className="display-6 mb-0">{datos[1].properties.nombre.title[0].plain_text}</h1>
                </div>
                <p>
                {datos[1].properties.descripcion.rich_text[0]
                            .plain_text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-5" />
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="Tarjeta-1 position-relative overflow-hidden">
                <Image
                  className="position-absolute w-100 h-500"
                  src={datos[0].properties.foto.files[0].file.url}
                  alt=""
                  width={200}
                  height={600}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="border-start border-5 border-primary ps-4 mb-5">
                  <h6 className="text-body text-uppercase mb-2">Pastor</h6>
                  <h1 className="display-6 mb-0">{datos[0].properties.nombre.title[0].plain_text}</h1>
                </div>
                <p>
                {datos[0].properties.descripcion.rich_text[0]
                            .plain_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pastores;

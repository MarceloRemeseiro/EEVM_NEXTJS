import Image from "next/image";

function pastores() {
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
                  src="/img/team-1.jpg"
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
                  <h1 className="display-6 mb-0">Isaac Martinez</h1>
                </div>
                <p>
                  Nació en Barcelona en 1986 y actualmente reside en Vilassar de
                  Mar. Está casado con Anna desde el año 2014 y tienen 2 hijos,
                  Mateo y Mia. Es licenciado en Criminología por la Universidad
                  de Barcelona (UB) y actualmente está finalizando su grado en
                  Teología en la Facultad IBSTE (Castelldefels). Desde el año
                  2022 desempeña el oficio de pastor a tiempo completo en la
                  EEVDM, siendo el encargado principal del ministerio de
                  enseñanza en la iglesia.
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
                  src="/img/team-2.jpg"
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
                  <h1 className="display-6 mb-0">Matthew Leighton</h1>
                </div>
                <p>
                  Proviene de Colorado (EEUU), y actualmente reside en Cabrils.
                  Él y su esposa, Núria, tienen cinco hijos. Se licenció en
                  Westminster Seminary de California, y tiene un doctorado en
                  teología de la Universidad de Salamanca. Matt es profesor en
                  la Facultad de Teología IBSTE. Ha sido pastor/anciano en la
                  EEVDM desde 2005.
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
                  src="/img/team-3.jpg"
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
                  <h1 className="display-6 mb-0">Jose Vazquez</h1>
                </div>
                <p>
                  Nació en Sevilla y reside en Mataró desde 2011 junto a su
                  esposa y sus 3 hijos. Es Técnico Superior en Dirección de
                  Obras y compagina su trabajo como diseñador con el pastorado
                  de la Iglesia en Vilassar de Mar. Durante años ha trabajado
                  con jóvenes y ha servido en el ministerio de la predicación.
                  Una de sus pasiones es la música, editó en 2019 su primer
                  album "El Dios de ayer" y es uno de los componentes del equipo
                  de alabanza de la EEVDM. En 2021 comenzó sus estudios de
                  teología en Southern Baptist Theological Seminary.
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

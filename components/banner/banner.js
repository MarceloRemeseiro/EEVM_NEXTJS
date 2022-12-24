import Link from "next/link";
import Image from "next/image";

function Banner() {
  return (
    <div className="container-fluid my-5 p-0">
      <div className="row g-0">
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="position-relative">
            <Image
              className="img-fluid w-100"
              src="/img/misionyvision.png"
              alt="mision"
              width={800}
              height={500}
            />
            <div className="facts-overlay">
              <h1 className="display-1 ">01</h1>
              <h4 className="text-white mb-3">Misión y Visión</h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link href="misionVision" className="text-white small">
                Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
          <div className="position-relative">
            <Image className="img-fluid w-100" src="/img/PASTORES.png" alt="" width={800}
              height={500} />
            <div className="facts-overlay">
              <h1 className="display-1">02</h1>
              <h4 className="text-white mb-3">Pastores</h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link href="pastores" className="text-white small">
                Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="position-relative">
            <Image
              className="img-fluid w-100"
              src="/img/historiavilassar.png"
              alt=""
              width={800}
              height={500}
            />
            <div className="facts-overlay">
              <h1 className="display-1">03</h1>
              <h4 className="text-white mb-3">Nuestra Historia </h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link href="historia" className="text-white small">
                Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
          <div className="position-relative">
            <Image className="img-fluid w-100" src="/img/EVANGELIO.png" alt="" width={800}
              height={500} />
            <div className="facts-overlay">
              <h1 className="display-1">04</h1>
              <h4 className="text-white mb-3">El Evangelio</h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link href="evangelio" className="text-white small">
                Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

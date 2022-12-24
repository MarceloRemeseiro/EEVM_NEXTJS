function Testimonios() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Testimonios</h6>
              <h1 className="display-6 mb-0">Dios hace grandes cosas!</h1>
            </div>
            <p className="mb-4">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              dolore erat amet <br />
              <br />
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              dolore erat amet <br /> <br />
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              dolore erat amet Diam dolor diam ipsum sit. Aliqu diam amet diam
              et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
              duo justo magna dolore erat amet Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            {/* <div className="row g-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0">123+</h1>
                </div>
                <h5 className="mb-0">Happy Clients</h5>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0">123+</h1>
                </div>
                <h5 className="mb-0">Projects Done</h5>
              </div>
            </div> */}
          </div>
          <div
            className="col-lg-7 wow fadeInUp overflow-scroll"
            data-wow-delay="0.5s"
          >
            <div className="scroll " style={{ height: "200px" }}>
              <div>
                <h5>Nombre</h5>
                <span>Profesión</span>
                <div>
                  <img src="img/testimonial-1.jpg" alt="" />
                </div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  iusto animi, molestiae doloremque expedita perferendis
                  nesciunt nobis minima nihil nam magni necessitatibus, natus
                  sapiente. Repellat enim quae minima nisi voluptas?
                </div>
              </div>
              <hr />
              <div>
                <h5>Nombre</h5>
                <span>Profesión</span>
                <div>
                  <img src="img/testimonial-2.jpg" alt="" />
                </div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  iusto animi, molestiae doloremque expedita perferendis
                  nesciunt nobis minima nihil nam magni necessitatibus, natus
                  sapiente. Repellat enim quae minima nisi voluptas?
                </div>
              </div>
              <hr />
              <div>
                <h5>Nombre</h5>
                <span>Profesión</span>
                <div>
                  <img src="img/testimonial-1.jpg" alt="" />
                </div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  iusto animi, molestiae doloremque expedita perferendis
                  nesciunt nobis minima nihil nam magni necessitatibus, natus
                  sapiente. Repellat enim quae minima nisi voluptas?
                </div>
              </div>
              <hr />
            </div>

            {/* <div className="carousel testimonial-carousel">
              <div className="testimonial-item">
                <img
                  className="img-fluid mb-4"
                  src="img/testimonial-1.jpg"
                  alt=""
                />
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat.
                </p>
                <div
                  className="bg-primary mb-3"
                  style={{width: "60px", height: "5px"}}
                ></div>
                <h5>Nombre</h5>
                <span>Profesión</span>
              </div>
              <div className="testimonial-item">
                <img
                  className="img-fluid mb-4"
                  src="img/testimonial-2.jpg"
                  alt=""
                />
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat.
                </p>
                <div
                  className="bg-primary mb-3"
                  style={{width: "60px", height: "5px"}}
                ></div>
                <h5>Nombre</h5>
                <span>Profesión</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;

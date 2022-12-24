/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9d2axns",
        "template_z87wv5i",
        form.current,
        "Gxhk5bb9zZGNRRsZb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Tu mensaje ha sido enviado!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Contacto
          </h1>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <img className="img-fluid" src="img/team-1.jpg" alt="" />
                </div>
                <div className="col-sm-6">
                  <h3 className="mb-0">Isaac Martinez</h3>
                  <p>Pastor</p>
                  <h6>Contacto</h6>
                  <p>
                    Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.
                  </p>
                  <p className="mb-0">Tel: +034 345 6789</p>
                  <p className="mb-0">Email: isaac@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <img className="img-fluid" src="img/team-2.jpg" alt="" />
                </div>
                <div className="col-sm-6">
                  <h3 className="mb-0">Mat Leigthon</h3>
                  <p>Pastor</p>
                  <h6>Contacto</h6>
                  <p>
                    Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.
                  </p>
                  <p className="mb-0">Tel: +034 345 6789</p>
                  <p className="mb-0">Email: isaac@example.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              /* style="min-height: 450px" */
            >
              <div className="position-relative h-100">
                <iframe
                  className="position-relative w-100 h-100 mw-450 border-none"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.9714269397923!2d2.385381315673201!3d41.504893996664734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b40492348163%3A0x47eac7db88622b88!2sEsgl%C3%A9sia%20Evang%C3%A8lica%20de%20Vilassar%20de%20Mar!5e0!3m2!1ses!2ses!4v1658946758935!5m2!1ses!2ses"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">Contacta</h6>
                <h1 className="display-6 mb-0">
                  Si tienes cualquier inquietud contacta con nosotros
                </h1>
              </div>
              <p className="mb-4">
                Nulla sit amet elit eleifend, efficitur diam quis, finibus eros.
                Etiam elit nunc, tempor quis sodales vel, posuere quis neque.
                Nulla congue mollis ex ac posuere. Donec eu pulvinar ante.
                Vivamus malesuada euismod gravida. className aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Nullam pharetra, quam sit amet blandit eleifend,
                felis arcu euismod libero, nec suscipit libero enim dapibus
                purus.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="name"
                        placeholder="Your Name"
                        name="user_name"
                      />
                      <label for="name">Nombre</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0 bg-light"
                        id="email"
                        placeholder="Your Email"
                        name="user_email"
                      />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label for="subject">Asunto</label>
                    </div>
                  </div> */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0 bg-light h-150"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                      ></textarea>
                      <label for="message">Mensaje</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                      value="Send"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

function top() {
  return (
    <div className="container-fluid bg-light p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 ps-5 text-start">
          <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
            <small className="fa fa-phone-alt me-2"></small>
            <small>+34 777 555 222</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center border-end px-3">
            <small className="far fa-envelope-open me-2"></small>
            <small>info@example.com</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center border-end px-3">
            <small className="far fa-clock me-2"></small>
            <small>Cultos todos los Domingos : 11:00</small>
          </div>
        </div>
        <div className="col-lg-5 pe-5 text-end">
          <div className="h-100 d-inline-flex align-items-center">
            <a
              className="btn btn-square border-end border-start"
              href="https://www.facebook.com/eevilassardemar"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-square border-end border-start"
              href="https://www.youtube.com/user/Jesusviu/featured"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default top;

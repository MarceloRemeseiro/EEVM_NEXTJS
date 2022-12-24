import { Link } from "react-router-dom";

function pastores() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h1 className="display-6 mb-0">Nuestros Pastores</h1>
            </div>
          </div>
          
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <img className="img-fluid" src="img/team-1.jpg" alt="" />
              <Link href="pastores" className="team-text bg-white p-4">
                <h5>Isaac Martinez</h5>
                <span>Pastor</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative">
              <img className="img-fluid" src="img/team-2.jpg" alt="" />
              <Link href="pastores" className="team-text bg-white p-4">
                <h5>Matt Leigthon</h5>
                <span>Pastor</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <img className="img-fluid" src="img/team-3.jpg" alt="" />
              <Link href="pastores" className="team-text bg-white p-4">
                <h5>Jose Vazquez</h5>
                <span>Pastor</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pastores;

function Spinner() {
  return (
    <div
      id="spinner"
      className="show bg-white position-absolute top-50 start-50 translate-middle w-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 10 }}
    >
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
}

export default Spinner;

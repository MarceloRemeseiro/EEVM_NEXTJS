function Spinner() {
  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
}

export default Spinner;

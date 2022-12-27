

function Directo({data}) {
  
  const visible =
    data[0].properties.directo.checkbox === true ? "container" : "d-none";
    
  const video = ""+"https://www.youtube.com/embed/"+data[0].properties.link.url.slice(17)+""
  return (
    <div className={""+visible+""}>
      <div className="container text-center">
        <h1 className="directo text-start ps-4">
          <i className="fa fa-circle"></i> DIRECTO
        </h1>
        <h1 className="text-start ps-4">{data[0].properties.nombre.title[0].plain_text}</h1>
        <div className="container ratio ratio-16x9">
          <iframe
            className="container"
            src={video}
            title="Una Iglesia en la que Dios está obrando | 1 Tesalonicenses 1:1-3 | Ps. Sugel Michelén"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            width={1000}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Directo;

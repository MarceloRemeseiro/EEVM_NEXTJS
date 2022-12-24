import {Datos} from "../API/Datos";
import {Dominio} from "../API/Datos";
import Spinner from "../spinner/spinner";

function directo() {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/directo");
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  const visible =
    data?.data.attributes.Activo === true ? "container" : "d-none";
    

  return (
    <div className={""+visible+""}>
      <div className="container text-center">
        <h1 className="directo text-start ps-4">
          <i className="fa fa-circle"></i> LIVE
        </h1>
        <h1 className="text-start ps-4">{data?.data.attributes.Titulo}</h1>
        <div className="container ratio ratio-16x9">
          <iframe
            className="container"
            src={""+"https://www.youtube.com/embed/"+data?.data.attributes.Link.slice(17)+""}
            title="Una Iglesia en la que Dios está obrando | 1 Tesalonicenses 1:1-3 | Ps. Sugel Michelén"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            width={1000}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default directo;

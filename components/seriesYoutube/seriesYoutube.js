/* eslint-disable react/jsx-no-duplicate-props */
import { Datos } from "../API/Datos";
import { Dominio } from "../API/Datos";
import Spinner from "../spinner/spinner";

function SeriesYoutube({ data }) {
  return (
    <div>
      <div className="mt-5 container text-center">
        <hr />
        <h3 className="mt-5">Series</h3>
        <p>
          Aqui encontrarás listas de reproduccion de las diferentes
          <br /> series de predicaciones que se han hecho
        </p>

        <div className="row pt-5">
          {data?.map((video) => (
            <div
              key={video.properties.titulo.title[0].plain_text}
              className="col-md-4"
            >
              <h5 className="mt-4">
                {video.properties.titulo.title[0].plain_text}
              </h5>
              <p className="mb-1">
                {video.properties.descripcion.rich_text[0].plain_text}
              </p>
              <div>
                <a
                  href={video.properties.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="">
                    <img
                      src={video.properties.imagen.files[0].file.url}
                      alt={video.properties.titulo.title[0].plain_text}
                      className="img-thumbnail rounded"
                      width="800"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeriesYoutube;

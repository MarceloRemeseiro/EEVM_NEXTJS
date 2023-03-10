import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export function Videos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCIC3BBTqJLN8axplZm2gXog&maxResults=7&order=date&key=AIzaSyDFkaQ0hLqA8nAyaNrZGt_u6VniFSsF6fw`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
}

const ApiYoutube = () => {
  const { data, loading, error } = Videos();

  if (loading === "loading") {
    return <p>Cargando</p>;
  }
  if (error === "error") {
    return <h2>No hemos encontrado videos</h2>;
  }
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Media
          </h1>
        </div>
      </div>
      <div className="container text-center">
        <h3>{decodeURIComponent(data?.items[0].snippet.title)}</h3>
        <Link
          href={"https://www.youtube.com/watch?v=" + data?.items[0].id.videoId}
          target="_blank "
          rel="noreferrer"
        >
          <Image
            src={data?.items[0].snippet.thumbnails.high.url}
            className="img-thumbnail rounded mb-2"
            width={800}
            height={800}
            alt=""
          />
        </Link>
        <p>{data?.items[0].snippet.description.slice(0, 94)}</p>
      </div>

      <div className="mt-5 container text-center">
        <hr />
        <h3 className="mt-5">Videos anteriores</h3>
        <div className="row">
          {data?.items.slice(1).map((video) => (
            <div key={video.id.videoId} className="col-md-4">
              <p className="mt-5 fw-bold">
                {decodeURIComponent(video.snippet.title)}
              </p>
              <Link
                href={"https://www.youtube.com/watch?v=" + video.id.videoId}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={video.snippet.thumbnails.high.url}
                  className="img-thumbnail rounded"
                  width={800}
                  height={800}
                  alt=""
                />
              </Link>
              <p>{video.snippet.description.slice(0, 94)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiYoutube;

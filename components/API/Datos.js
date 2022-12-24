import axios from "axios";
import { useEffect, useState } from "react";

export function Dominio() {
  return "https://strapi-production-67bf.up.railway.app";
}

export function Datos(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
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

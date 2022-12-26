import Head from "next/head";
import ScrollToTop from "../components/scrolltop/scrollTop";
import { Client } from "@notionhq/client";
import Slider from "../components/carousel/carousel";
import { Actividades } from "../components/actividades/actividades";
import TarjetaFotoIzquierda from "../components/tarjetas/tarjetaFotoIzquierda";
import TarjetaFotoDerecha from "../components/tarjetas/tarjetaFotoDerecha";
import Testimonios from "../components/testimonios/testimonios";
import Banner from "../components/banner/banner";
import { HomeCarousel } from "../components/carousel/HomeCarousel";




export async function getServerSideProps() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });
  const data1 = await notion.databases.query({
    database_id: "1c490ab3e6de40489254a298a66c9ab8",
  });
  const data2 = await notion.databases.query({
    database_id: "73c4c7e345734e3c8ba2e3e3198f7b11",
    filter: {
      property: "web",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "orden",
        direction: "descending",
      },
    ],
  });
  const data3 = await notion.databases.query({
    database_id: "c20f8128f5404b69a87adf7ff388c4f3",
  });
  const data4 = await notion.databases.query({
    database_id: "7b9e371bcd6a4021b5b72c31a1484a13",
  });
  const data5 = await notion.databases.query({
    database_id: "f32c52badf9048838edd377294de9f7a",
  });

  return {
    props: {
      dataSlider: data1.results,
      dataActividades: data2.results,
      dataHomeSlider: data3.results,
      dataTarjetaDerecha: data4.results,
      dataTarjetaIzquierda: data5.results,
    },
  };
}

export default function Home({
  dataSlider,
  dataActividades,
  dataHomeSlider,
  dataTarjetaDerecha,
  dataTarjetaIzquierda,
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Església de Vilassar de Mar</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link href="img/logo.png" rel="icon" />
      </Head>
      <Slider data={dataSlider} />
      <TarjetaFotoDerecha data={dataTarjetaDerecha} />
      <Banner />
      <Actividades data={dataActividades} />
      <TarjetaFotoIzquierda data={dataTarjetaIzquierda} />
      <HomeCarousel data={dataHomeSlider} />
      <Testimonios />

      <div className="App">
        <div>
          
        </div>
      </div>
    </>
  );
}

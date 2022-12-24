import { Actividades } from "../components/actividades/actividades";
import { Client } from "@notionhq/client";

export async function getServerSideProps() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const data = await notion.databases.query({
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

  return {
    props: {
      dataActividades: data.results,
    },
  };
}

function PageActividades({ dataActividades }) {
  console.log();
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Actividades
          </h1>
        </div>
      </div>
      <Actividades data={dataActividades} />
    </div>
  );
}

export default PageActividades;

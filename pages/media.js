import ApiYoutube from "./api/apiYoutube";
import SeriesYoutube from "../components/seriesYoutube/seriesYoutube";
import { Client } from "@notionhq/client";

export async function getServerSideProps() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const data = await notion.databases.query({
    database_id: "3fdfd907b41f492fbe0b5f525b9b326e",
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
      dataSeries: data.results,
    },
  };
}

export default function media({ dataSeries }) {
  return (
    <div>
      <ApiYoutube />
      <SeriesYoutube data={dataSeries} />
    </div>
  );
}

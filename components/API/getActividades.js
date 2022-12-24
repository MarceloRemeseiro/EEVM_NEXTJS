import { Client } from "@notionhq/client";

export default function GetActividades(actividad) {
    return {
      getServerSideProps: async () => {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
        const respuesta = await notion.databases.query({
          database_id: actividad,
          });
    
        return {
          props: {
            datos: respuesta.results,
          },
        };
      }
    }
  }
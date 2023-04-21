
import React from 'react'

export default function GetPaginas(pagina) {
    return {
      async getServerSideProps() {
        const data = await fetch(
          `https://notion-api.splitbee.io/v1/page/${pagina}`
        ).then((res) => res.json());
  
        return {
          props: {
            blockMap: data,
          },
        };
      },
    };
  }
  





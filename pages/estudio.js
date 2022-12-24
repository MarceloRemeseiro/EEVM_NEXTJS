import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import GetPaginas from "../components/API/getPaginas";

export const getServerSideProps = GetPaginas("e5ca83e667fc430993e2a9609a771bae").getServerSideProps;


export default function Actividad({ blockMap }) {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            ESTUDIO BIBLICO
          </h1>
        </div>
      </div>
      <div className="container">
        <NotionRenderer blockMap={blockMap} />
      </div>
      
    </div>
  );
}

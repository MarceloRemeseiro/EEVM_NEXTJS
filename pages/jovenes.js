import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import GetPaginas from "../components/API/getPaginas";

export const getServerSideProps = GetPaginas("ffbfbbadc81c4daaa8c32ff649d58f6c").getServerSideProps;


export default function Actividad({ blockMap }) {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            JOVENES EEVM
          </h1>
        </div>
      </div>
      <div className="container">
        <NotionRenderer blockMap={blockMap} />
      </div>
      
    </div>
  );
}

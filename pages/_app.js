import Navigation from "../components/Navigation/Navigation";
import Top from "../components/top/top";
import "../styles/bootstrap.min.css";
import "../styles/animate/animate.min.css";
import "../styles/style.css";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Top />
      <div style={{ position: "sticky", top: 0, left: 0, zIndex: 999 }}>
        {/* <Navbar/> */}
        <Navigation/>
      </div>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
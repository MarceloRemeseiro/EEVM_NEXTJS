import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
          async
        />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" async />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          async
        />
        <script src="lib/wow/wow.min.js" async />
        <script src="lib/easing/easing.min.js" async />
        <script src="lib/waypoints/waypoints.min.js" async />
        <script src="lib/owlcarousel/owl.carousel.min.js" async />
        <script src="js/main.js" async />
      </body>
    </Html>
  );
}

{
}

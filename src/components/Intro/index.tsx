import Image from "next/image";
import logo from "./logo.png";
import background from "./background.jpeg";
import localFont from "@next/font/local";

const MigraExtralight = localFont({
  src: "../../../fonts/Migra/MigraItalic-ExtralightItalic.otf",
});
const InterBold = localFont({ src: "../../../fonts/Inter/Inter-Bold.otf" });

export default function Intro() {
  return (
    <div className="Intro root">
      <Image
        src={background}
        alt=""
        fill
        style={{ zIndex: -1, objectFit: "cover" }}
      />
      <div className="content">
        <header>
          <h1 className={MigraExtralight.className}>
            <Image src={logo} alt="" width={980} />
          </h1>
        </header>
        <footer>
          <small className={InterBold.className}>
            Ekeka © 2022. Powered by the Badia Nordenstahl Collection.
          </small>
          <nav>
            <a>Enter Ekeka</a>
            <a>Skip Intro</a>
          </nav>
        </footer>
      </div>
      <style jsx>
        {`
          .root {
            position: relative;
            height: 100vh;
            max-height: -webkit-fill-available;
          }
          .content {
            display: flex;
            flex-direction: column;
            height: 100%;
            max-width: 1000px;
            margin: 0 auto;
          }
          header {
            flex: 1;
            display: flex;
            justify-content: center;
            margin-top: 80px;
          }
          footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 60px 60px;
          }
          small {
            color: white;
          }
          nav {
            display: flex;
            gap: 10px;
          }
          nav a {
            padding: 4px 18px;
            border: 3px solid white;
            border-radius: 40px;
            font-size: 1.6rem;
            color: white;
            text-transform: uppercase;
            font-family: sans-serif;
            font-weight: 200;
          }
          @media (max-width: 768px) {

          }
        `}
      </style>
    </div>
  );
}

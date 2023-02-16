import Image from "next/image";
import logo from "./logo.png";
import background from "./background.jpeg";
import localFont from "@next/font/local";

const MigraExtralight = localFont({
  src: "../../../fonts/Migra/Migraitalic-ExtralightItalic.otf",
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
            <span>Ekeka.space</span> Coming Soon
          </h1>
        </header>
        <footer>
          <small className={InterBold.className}>
            Ekeka © 2022. Powered by the Badia Nordenstahl Collection.
          </small>
          <Image src={logo} alt="" width={190} />
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
            align-items: center;
            justify-content: center;
          }
          footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:  0 20px 20px;
          }
          h1 {
            font-size: 6rem;
            text-align: center;
          }
          h1 span {
            color: white;
            padding-right: 2rem;
          }
          small {
            color: white;
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 4rem;
            }
          }
        `}
      </style>
    </div>
  );
}

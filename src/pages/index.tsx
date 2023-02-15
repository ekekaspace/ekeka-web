import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>EKEKA</h1>
        <video loop autoPlay>
          <source src="/intro.webm" type="video/webm" />
        </video>

        <footer>
          <small>EKEKA © 2022 Powered by the X Y Z Collection</small>
          <nav>
            <a href="https://instagram.com/ekkakamusic">Instagram</a>
            <a href="https://twitter.com/ekkakamusic">Twitter</a>
          </nav>
        </footer>
        <style jsx>
          {`
            :global(html, body) {
              min-height: 100%;
            }
            :global(body) {
              background-image: url("https://getwallpapers.com/wallpaper/full/0/7/a/344517.jpg");
              background-position: center;
              background-size: cover;
            }
            main {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              min-height: -webkit-fill-available;
            }
            footer {
              display: flex;
              gap: 6rem;
              align-items: center;
            }
            nav {
              display: flex;
              gap: 1rem;
            }
          `}
        </style>
      </main>
    </>
  )
}
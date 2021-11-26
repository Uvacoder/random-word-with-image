import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Random word with Image"
        description="Get a random word with a related image 🎉"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Random word with Image",
          description: "Get a random word with a related image 🎉",
          images: [
            {
              url: "https://res.cloudinary.com/didkcszrq/image/upload/v1637931051/Screenshot_2021-11-26_182040_ohevcv.png",
              width: 561,
              height: 767,
              alt: "Random word with Image",
              type: "image/png",
            },
          ],
          site_name: "Random word with Image",
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

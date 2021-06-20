import Head from "next/head";
import Image from "next/image";
import randomWords from "random-words";
import { useState } from "react";

export default function Home() {
  const [word, setword] = useState(randomWords());
  const [image, setImage] = useState();
  const [showWord, setShowWord] = useState("GET A WORD BY CLICKING ME");
  const [loading, setLoading] = useState(true);

  const fetchImage = async () => {
    await fetch(
      `https://api.unsplash.com/search/photos/?page=1&query=${word}&per_page=1&client_id=${process.env.unsplash_api_key}`
    )
      .then((res) => res.json())
      .then((data) => setImage(data));
    setShowWord(word);
    setLoading(false);
  };

  const handleClick = () => {
    setword(randomWords());
    fetchImage();
    console.log(image);
    setLoading(true);
  };

  return (
    <div className="bg-indigo-100 flex h-screen w-screen items-center justify-center px-16">
      <Head>
        <title>Random words</title>
        <meta
          name="description"
          content="This is an app where you get random words and an image associated with that word. If you want to improve it feel free to make a pull request."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-5 md:-left-10 w-32 h-32 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
        <div className="absolute top-0 -right-5 md:-right-10 w-32 h-32 md:w-96 md:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
        <div className="absolute left-20 md:-bottom-12 w-32 h-32 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
        <div className="backdrop-filter justify-between backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative  flex flex-col m-5 w-11/12 h-[70vh] items-center cursor-pointer">
          {loading ? (
            <div className="loading"></div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              {image?.results && (
                <Image
                  src={image.results[0].urls.regular}
                  alt=""
                  width={500}
                  height={400}
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              )}
              <p className="text-center">
                Captured by
                <a
                  target="blank"
                  href={image.results[0].user.links.html}
                  className="border-b-2 mx-1 border-black"
                >
                  {image.results[0].user.name}
                </a>
                on
                <a
                  target="blank"
                  href={image.results[0].links.html}
                  className="border-b-2 mx-1 border-black"
                >
                  Unsplash
                </a>
              </p>
            </div>
          )}
          <h1 onClick={handleClick} className="text-2xl font-bold">
            {showWord.charAt(0).toUpperCase()}
            {showWord.slice(1)}
          </h1>
          <button
            className="w-full flex items-center justify-center shadow-xl bg-white bg-opacity-25 rounded-lg p-2 font-semibold  backdrop-filter backdrop-blur-xl focus:outline-none "
            onClick={handleClick}
          >
            GET NEW WORD
          </button>
        </div>
      </div>
    </div>
  );
}

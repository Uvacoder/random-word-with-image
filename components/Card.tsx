import Image from "next/image";
import randomWords from "random-words";
import { useState } from "react";
import defaultImage from "../public/defaultImage.json";

const Card = () => {
  const [word, setWord] = useState<String>("Start here");
  const [image, setImage] = useState(defaultImage);
  const [loading, setLoading] = useState(false);

  const fetchImage = async (newWord: string) => {
    await fetch(
      `https://api.unsplash.com/search/photos/?page=1&query=${newWord}&per_page=1&client_id=${process.env.unsplash_api_key}`
    )
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((err) => alert(err.data.message));
    setLoading(false);
  };

  const handleClick = () => {
    const newWord = randomWords();
    setWord(newWord);
    fetchImage(newWord);
    setLoading(true);
  };
  return (
    <div className="backdrop-filter justify-between backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative  flex flex-col m-5 w-11/12 h-[70vh] items-center cursor-pointer">
      {loading ? (
        <div className="loading rounded-t-xl"></div>
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
          <p className="mt-2 text-center">
            Captured by
            <a
              target="blank"
              href={`${image.results[0].user.links.html}?utm_source=your_app_name&utm_medium=referral`}
              className="mx-1 border-b-2 border-black"
            >
              {image.results[0].user.name}
            </a>
            on
            <a
              target="blank"
              href="https://unsplash.com/?utm_source=random-words&utm_medium=referral"
              className="mx-1 border-b-2 border-black"
            >
              Unsplash
            </a>
          </p>
        </div>
      )}
      <h1 onClick={handleClick} className="text-2xl font-bold">
        {word.charAt(0).toUpperCase()}
        {word.slice(1)}
      </h1>
      <button
        className="flex items-center justify-center w-full p-2 font-semibold bg-white bg-opacity-25 rounded-lg shadow-xl backdrop-filter backdrop-blur-xl focus:outline-none "
        onClick={handleClick}
      >
        GET NEW WORD
      </button>
    </div>
  );
};

export default Card;

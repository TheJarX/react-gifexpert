import { API_KEY } from "../utils";

const getGifs = async (query) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      query
    )}&limit=10&api_key=${API_KEY}`
  );

  const { data } = await response.json();

  return data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });
};

export default getGifs;

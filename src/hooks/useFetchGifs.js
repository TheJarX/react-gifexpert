import { useEffect, useState } from "react";
import getGifs from "../helpers/GetGifs";

function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    done: false,
  });

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setState({ done: true, data: gifs });
    });
  }, [category]);

  return state;
}

export default useFetchGifs;

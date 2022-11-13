import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import { Gif } from "../components/GifGrid";
export default function (category: string) {
  const [state, setState] = useState<{data: Gif[], loading: boolean}>({
    data: [],
    loading: true
  });


  useEffect(()=> {
    getGifs(category)
        .then(imgs => setState({
            data: imgs,
            loading: false
        }))
  },[])
  return state;
}
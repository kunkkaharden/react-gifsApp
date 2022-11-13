import { Gif } from "../components/GifGrid";

async function getGifs(category: string): Promise<Gif[]> {
    const api = import.meta.env.VITE_GIFS_API;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=2&api_key=${api}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.data);
    const gifs = data.data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });
    return gifs;
}

export default getGifs


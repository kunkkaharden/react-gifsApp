import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid ({category}: {category: string})  {
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
             { loading &&  <p>Cargando...</p> }   
            {
                images.map((img: Gif)=>{
                    return <GifGridItem key={img.id} img={img}></GifGridItem>
                })
                }
            </div>
                
        </>
    )
}

export interface Gif {
    id: string;
    title: string;
    url: string
}
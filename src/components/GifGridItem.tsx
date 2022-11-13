import { Gif } from "./GifGrid";

export default function GifGridItem ({ img }: { img: Gif; }) {
    return (
        <div className="card">
            <img src={img.url} alt={img.title} />
            <p> { img.title }</p>
        </div>
    )
} 
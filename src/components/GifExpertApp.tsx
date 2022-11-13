import { useState } from 'react'
import AddCategory from './AddCategory';
import './GifExpertApp.css'
import GifGrid from './GifGrid';
function GifExpertApp() {
   const [categories, setCategories] =  useState(['One punch']);
           
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} ></AddCategory>
            <hr />
             <ol>
                {
                categories.map((cat) => (
                    <GifGrid category={cat} key={cat}></GifGrid>
                ))
                }
        
             </ol>
        </div>
    )
}

export default GifExpertApp
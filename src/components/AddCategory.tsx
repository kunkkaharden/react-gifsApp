import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
// import PropTypes from "prop-types"
export default function AddCategory({setCategories}: {setCategories: any}) {
    const [inputValue, setInputValue] = useState("");
    const cambio = (e: any) => {
        setInputValue(e.target.value);
    }
    const submit = (e: FormEvent) => {
            e.preventDefault() 
            setCategories((l: string) => [inputValue, ...l] );
            setInputValue("");
    }
    return (
        <form action="" onSubmit={submit}>
            <input 
                type="text" 
                name="" id="" 
                value={inputValue}
                onChange={ cambio }
                />
        </form>
            
       
    )
} 

// AddCategory.prototype = {
//     setCategories: PropTypes.func.isRequired,
// }
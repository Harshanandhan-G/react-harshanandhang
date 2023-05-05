import { useState } from "react"
const countApp =()=>{
    const [add, setAdd]= useState(0)
    const handleChange =()=>{
        setAdd(add+1)
    }
    const handleChange2 =()=>{
        setAdd(add-1)
    }
    return(
        <div>
            <h1>count</h1>
            <button onClick={handleChange}>Addnumber</button>
            <button onClick={handleChange2}>Subnumber</button>
        </div>
    )
}
export default countApp
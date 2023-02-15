import React, {useState} from "react";
import './Comment.css';


function Comment({onCreate}){
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
        }
    }
    return(
        <form onSubmit={submitHandler}>
        <input type='text' className="comment" value={value} onChange = {event => setValue(event.target.value)}/>
        <button type='submit' className="button">Add</button>
        </form>
    )
}

export default Comment


import React, {useState} from "react";
import '../App.css';

function CheckBox(){

    const [flag, setCount] = useState(false);

    return(
        <div className="button">
        <input type='checkbox' onChange={() => setCount(!flag)}></input>
        Значение чек-бокса {flag.toString()}
        </div>
    )
    }
    
export default CheckBox


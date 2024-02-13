import { useState } from "react";
export default Shouter;

function Shouter() {

const [textContent, setTextContent] = useState("");

function updateText(event) {
    event.preventDefault();
    setTextContent(event.target.textContent.value);
}


    return (
        
        <form onSubmit={updateText}>
        <input type="text" name="textContent" />
        <output>{textContent}</output>
        </form>
        
    )
}
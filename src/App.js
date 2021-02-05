import React,{useState} from "react";
import './shivam.css';



function App() {

    const [value,setValue] = useState("");

    //8ih3rIf8HXDNuscbkvWx2-1Kj3VboKAoeWXVy13KlX4

    const fetchImages = () => {
        fetch("https://api.unsplash.com/search/photos?client_id=8ih3rIf8HXDNuscbkvWx2-1Kj3VboKAoeWXVy13KlX4")
    }

    return( 
    <div className="App">
        <div className="mydiv">
            <span>Search</span>
            <input style={{width:"60%"}} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button>Send</button>
        </div>
    </div>
    );
 }

export default App;
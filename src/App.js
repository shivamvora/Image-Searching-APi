import React,{useState} from "react";
import './shivam.css';



function App() {

    const [value,setValue] = useState("");

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
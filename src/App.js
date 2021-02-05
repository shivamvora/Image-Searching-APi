import React,{useState} from "react";
import './shivam.css';



function App() {

    const [value,setValue] = useState("");
    const [results,setResults] = useState([]);


    //8ih3rIf8HXDNuscbkvWx2-1Kj3VboKAoeWXVy13KlX4

    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=8ih3rIf8HXDNuscbkvWx2-1Kj3VboKAoeWXVy13KlX4&query=${value}`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            setResults(data.results);
        })
    }

    return( 
    <div className="App">
        <div className="mydiv">
            <span>Search</span>
            <input style={{width:"60%"}} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={()=>fetchImages}>Send</button>
        </div>
        <div className="gallery">
            {
                results.map((item)=>{
                    return <image src={item.urls.regular}/>
                })
            }
        </div>
    </div>
    );
 }

export default App;
import React, { useEffect, useState } from 'react'
import "./Home.css"
import Card from './Card'

const Home = () => {
    const [ search , setSearch ] = useState("india");
    const [ data , setData ] = useState(null);

    const API_KEY = "b59cd69ec5ad424d9cd3faa86ae05d6c";

    const getData = async () => {
        const data = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const response = await data.json();
        setData(response.articles)
    }
    const getInput = (e) => {
        setSearch(e.target.value);
    }
    
    useEffect(() => {
        getData();
    },[])
    const getCategory = (event) => {    
        setSearch(event.target.value)
        console.log(event.target.value);  
    }
  return (
    <>
    <div className="navbar">
        <h1>Trendy News</h1>
        <h4>All News</h4>
        <h4>Top Headlines</h4>
        <div className="searchBox">
            <input type="text" placeholder='Search...' onChange={getInput}/>
            <button onClick={getData}>Search</button>
        </div>
    </div>

    <div className="heading">
        <h1>Stay Updated with TrendyNews!</h1>
        <div className="category">
            <div className="categoryBtn">
                    <button onClick={getCategory} value="sports">Sports</button>
                    <button onClick={getCategory} value="politics">Politics</button>
                    <button onClick={getCategory} value="health">Health</button>
                    <button onClick={getCategory} value="entertainment">Entertainment</button>
                    <button onClick={getCategory} value="technology">Technology</button>
            </div>
        </div>
    </div>
    {data? <Card data={data}/> : null}
    </>
  )
}

export default Home
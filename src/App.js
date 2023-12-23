import Header from './Header';
import Box from './Box';
import { useEffect, useState } from 'react';

function App() {
  let [news,setNews]=useState([]);
  let [cat,setCat]=useState("india");
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${cat}&sortBy=publishedAt&apiKey=0334def7ea8044c18b7674a667ec29bd`)
    .then((response)=>response.json())
    .then((news)=>{setNews(news.articles)})
    .catch((err)=>{console.log(err)})
  }, [cat])
  return (
    <div className="App">
    <Header/>
    <section>
      <input type='text' placeholder='Search Category...' onChange={(event)=>{
                if(event.target.value == ""){
                    setCat("india");
                }
                else{setCat(event.target.value)}
            }}/>
    </section>
    <div className='news'>
    {news.map((data)=>{
            return(<Box article={data}/>)})}
    </div>
    </div>
  );
}

export default App;

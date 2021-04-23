import "./styles.css";
import React,{ useState } from 'react'
import { genreList ,descriptionsList} from './comedyGenres'

let genresNames = Object.keys(genreList);

export default function App() {
  const [comicArray, setComicArray] = useState([]);

  function onClickHandler(genre){
    setComicArray(genreList[genre]);
  }

  return (<div className="App">
            <div className="container">
              <h1>Indian Comics 🎭</h1>
              <small className="small">Checkout my favorite Indian comics. Select a genre to get started</small>
              <div className="btn-container">
              {genresNames.map((genre)=>{
                return (<span onClick={()=>{onClickHandler(genre)}} className="span-btn">{genre}</span>)
              })}
              </div>
              <hr/>
              <div className="card-container">{(comicArray).map((comic)=>{
                let desc = descriptionsList[comic];
                return (<div className="card">
                    <h2>{comic}</h2>
                    <p>{desc}</p>
                  </div>)
              })}</div>
              <footer className="footer">Made with by 💙 by <em>aadhar54</em></footer>
            </div>
          </div>
  );
}

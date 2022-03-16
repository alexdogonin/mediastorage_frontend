import React, { useState, useEffect } from "react";
import "./App.css";
const url = "http://192.168.0.125:8080/media";

function App() {
  const [photo, setPhoto] = useState(null)
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true
      },
      // mode: "cors",
      // cache: "default",
    })
      .then(data => data.json())
      .then(data => setPhoto(data));
  }, []);
  console.log(photo)

  return (
    <div className="gallery">
      {
        photo && photo.media.slice(0, 6).map(({thumb_url, uuid}, i)=> (<figure key={uuid} className={`gallery__item gallery__item--${i + 1}`}><img src={thumb_url}  className="gallery__img" alt="Image 1" /></figure>))
      }
    </div>
  );
}

export default App;

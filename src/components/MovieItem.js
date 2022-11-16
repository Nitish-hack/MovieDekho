// import React from "react";
export default function MovieItem(props){
  let url=`https://image.tmdb.org/t/p/original${props.imgURL}`
    return <div className="card p-0 movieItem positon-absolute"  >
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.overview.substring(0,100)}...</p>
        <p>{props.date}</p>
      </div>
    </div>
    }
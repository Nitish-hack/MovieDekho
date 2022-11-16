import React, { useReducer, useEffect } from "react";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";



const reducer = (state, { moviedata, type }) => {
  if (type === "next") {

    return {
      ...state,
      page: state.page + 1,
      movieArticles: state.movieArticles.concat(moviedata.results),
     
    }
   
  }
 else if (type === "stop") {

    return {
      ...state,
      page: state.page,
      
      totalPages:state.page
    }
   
  }
  else return {
    ...state,
    movieArticles: moviedata.results,
    totalPages: moviedata.total_pages,

  }

}
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const Movies=(props)=>{


  const [{ movieArticles, totalPages ,page}, dispatch] = useReducer(reducer, { movieArticles: [], totalPages: 0 ,page:1});

  document.title = `${capitalizeFirstLetter(props.category)}-MovieDekho`;
if(props.category==="Home")  document.title='MovieDekho';
let country=props.country;
let language=props.language;

  const fetchUserData = () => {
    let url = "";
    if (props.category === "top_rated") {

      if(country==="all"){
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${props.apiKey}&language=en-US&page=${page}`
      }
      else url=`https://api.themoviedb.org/3/movie/top_rated?api_key=e5fe4a4f591c2171d58758d0fd07b51c&region=${country}&with_original_language=${language}&page=${page}`
    }
    else if (props.category === "trending" || props.category==="Home") {
      url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${props.apiKey}&page=${page}`;
    }
    else {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&with_genres=${props.id}$page=${page}`
    }
    props.setProgress(10);


    fetch(url)
      .then(response => {
        props.setProgress(30);
        return response.json()
      })
      .then(data => {
        props.setProgress(70);
        // console.log(data);
        dispatch({ moviedata: data, type: "" });
        props.setProgress(100);
      })
  }

  useEffect(() => {
    fetchUserData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMoreData=async ()=>{      //this is for fetching more data while infinite scorlling .
    let url = "";
    if (props.category === "top_rated") {
     
      if(country==="all"){
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${props.apiKey}&language=en-US&page=${page}`
      }
      else url=`https://api.themoviedb.org/3/movie/top_rated?api_key=e5fe4a4f591c2171d58758d0fd07b51c&region=${country}&with_original_language=${language}&page=${page}`
    }
    else if (props.category === "trending" || props.category==="Home") {
      url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${props.apiKey}&page=${page+1}`;
    }
    else {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&with_genres=${props.id}&page=${page+1}`
    }
      let data = await fetch(url);
      let parsedData = await data.json();
      if(props.category==="top_rated") {

        dispatch({ moviedata: parsedData, type: "stop" });
      }
     else  dispatch({ moviedata: parsedData, type: "next" });
     
    }

  


  return (
<div className="container-fluid">

<InfiniteScroll
        dataLength={movieArticles.length}
        next={fetchMoreData}
        hasMore={page!==totalPages}
        loader={<Spinner/>}
      >
    <div className="container-fluid row px-2" >
      {movieArticles.map((newMovie) => {
        return <div className=" col-lg-4 mt-3" key={newMovie.id}>
          <MovieItem
            title={newMovie.title ? newMovie.title : ""}
            overview={newMovie.overview ? newMovie.overview : ""}
            imgURL={newMovie.backdrop_path ? newMovie.backdrop_path : newMovie.poster_path}
            date={newMovie.release_date}
            vote_count={newMovie.vote_count}
          />

        </div>
      })}
    </div>
    </InfiniteScroll>
    </div>
  )
}

export default Movies;
import Movies from "./Movies"
import { useParams } from "react-router-dom";


const MovieHelper = (props) => {
    let { country,language} = useParams();

  return (
    <Movies key={country} country={country} language={language} apiKey={props.apiKey} setProgress={props.setProgress} category={props.category} />
  )
}

export default MovieHelper
import axios from "axios"


export const getMovieList = (callback) => {


  axios
  .get("https://api.themoviedb.org/3/movie/popular?page=1&api_key=5a1a8d073c4a8515a69dc7913d6f19ad")
  .then((res) => {
    callback(res.data)
  })
  .catch((err) =>{
    console.log(err)
  })
}

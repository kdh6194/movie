import { useEffect, useState } from "react";
import Movie from "../components/movie.js"
import styles from "./home.module.css"

function Home() {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovie = async () => {
      const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovie();
    },[]);
    console.log(movies)
    console.log(loading)
    return (
      <div className={styles.container}>
          {loading ? <div className={styles.loader}><span>Loading...</span></div>:
          <div className={styles.movies}>{movies.map((movie) =><Movie id={movie.id}coverImg={movie.medium_cover_image}
          year={movie.year}title={movie.title}summary={movie.summary}genres={movie.genres} />)}</div>}</div>
    );
}

export default Home;
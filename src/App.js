
import React from "react";
import Movie from "./Movie";
import "./App.css";
// import PropTypes from "prop-types";
import axios from "axios";

const renderMovie = (movie) => {
  return <Movie
    key={movie.id}
    title={movie.title}
    year={movie.year}
    summary={movie.summary}
    poster={movie.medium_cover_image}
    genres={movie.genres}
  />

}

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: {
      data: { movies },
    },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    this.setState({ movies, isLoading: false })
    console.log(movies);
  }
  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading, movies } = this.state
    return (<section className="Container">
      {isLoading ?
        <div className="Loader">
          <span className="Loader__text">
            Загрузка...
          </span>
        </div>
        : <div className="Movies">
          {movies.map(renderMovie)}
        </div>}

    </section>)
  }
}

export default App;

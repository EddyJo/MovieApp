import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({title, poster, genres, year, synopsis}) {
  return (
    <div className="Moive">
        <div className="Movie_Colums">
          <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie_Colums">
          <h1>{title}({year})</h1>  
          <div className="Movie__Genres">
            {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
          </div>
          <p className="Movie__Synopsis">
            {synopsis}
          </p>
        </div>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  synopsis: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

function MovieGenre({genre}) {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} className="Movie__Poster" alt={alt} title={alt} />
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt : PropTypes.string.isRequired
}

export default Movie;

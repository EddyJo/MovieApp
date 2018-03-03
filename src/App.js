import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';


class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {}
  
  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
          title={movie.title} 
          poster={movie.medium_cover_image}
          key={movie.id} 
          genres={movie.genres}
          year={movie.year}
          synopsis={movie.synopsis}
          />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    console.log('did render');

    return (
      <div className="app">
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    );
  }
}

export default App;

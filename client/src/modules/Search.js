import React, { Component } from 'react';
import '../style/Search.css';
import Movie from  './Movie.js'
import imdbIDArr from '../db/movieIdDb.js'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: [],
    };
  }

  fetchMovie() {
    let url = 'http://localhost:8000/movies';
    // let imdbID = imdbIDArr[Math.floor(Math.random() * imdbIDArr.length)]
    let imdbID = 'tt0372784';
    url += `/${imdbID}`
    console.log('imdbID:', imdbID, 'url', url)

    fetch(url)
        .then(res => res.json())
        .then(res => console.log('TEST', res))
        // .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    let movie = this.state.apiResponse;
    return (
      <div className='Search'>
        <Movie 
        title={movie.Title} 
        year={movie.Year} 
        imdbID={movie.imdbID} 
        poster={movie.Poster} />
      </div>
    );
  }
}

export default Search;
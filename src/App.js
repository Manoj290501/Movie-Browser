import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import SearchView from './components/searchview';
import MovieView from './components/MovieView'
import {Route, Routes } from 'react-router-dom'

function App() {
  const[searchResults, setSearchResults] = useState([]);
  const[searchText,setSearchText] = useState('');

  useEffect(()=>{
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=676161c6c2bbe0e6a5727c8440b793bb&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response=>response.json())
      .then(data=>{
          setSearchResults(data.results)
      })

    }
  },[searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
          <Route exact path="/movie/:id" element={<MovieView/>}/>
        </Routes>
    
    </div>
  );
}
export default App;
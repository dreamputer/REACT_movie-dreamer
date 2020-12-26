import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Movie from './components/Movie';
import {Footer} from './components/Footer';
import {ApiError} from './components/ApiError';
import { Loader } from './components/Loader';

import ReactPaginate from 'react-paginate';

// import InfiniteScroll from 'react-infinite-scroll-component';

// import Loader from 'react-loader-spinner';
// <Loader type="Circles" color="#00BFFF" height={80} width={80} />

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=292d842847faa54f4192d81297483cfd";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=292d842847faa54f4192d81297483cfd&query=";

function App() {
    // const movies = ["Movie 1", "Movie 2", "Movie 3"];
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(false);
  
    /* // ---------- NO LOADING SPINNER ----------
    const getMovies = (API) => {
        fetch(API + currentPage.toString())
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results) //setMovies([...movies, ...data.results]); //setMovies(movies => [...movies, data.results]);  //
            setPageCount(data.total_pages);
  
        });
    }
    */
  
    /* // ---------- fetch(): LOADING SPINNER ----------
    const getMovies = (API) => {
    setLoading(true);

    fetch(API + currentPage.toString())
        .then((res) => res.json())
        .then((data) => {
            console.log(data);    
            setMovies(data.results) 
            setPageCount(data.total_pages);
            setLoading(false);
        });
    }
    */

    // ---------- axios: LOADING SPINNER + ERROR ----------
    const getMovies = (API, pageNumber) => {
        setLoading(true);
        setApiError(false);

        let curPage = pageNumber ? pageNumber: currentPage;

        axios.get(API + "&page=" + curPage.toString())
             .then((data) => {
                 console.log(data.data);    
                 setMovies(data.data.results) 
                 setPageCount(data.data.total_pages);
                 setLoading(false);
             })
             .catch(err => {
                 console.log(err);
                 setLoading(false);
                 setApiError(true);
             });
    }

    useEffect(() => {
        let api;
        if(searchTerm) {
            api = SEARCH_API + searchTerm;
        } else {
            api = FEATURED_API;
        }
  
        //getMovies(FEATURED_API);
        getMovies(api);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageCount, currentPage]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(searchTerm) {
            getMovies(SEARCH_API + searchTerm, 1);
        }
        else {
            getMovies(FEATURED_API, 1);
        }

        setCurrentPage(1);  // No effect???
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleOnInput = (e) => {
        if(!e.target.value) {
            setCurrentPage(1);  // No effect???
            // alert(currentPage);
            getMovies(FEATURED_API, 1);
        }
    };

    const handlePageClick = ({ selected: selectedPage }) => {
        console.log("Current page for pagination:", selectedPage + 1)
        setCurrentPage(selectedPage + 1);
    }

    return (
      <>
  
      <header>
        <h1 className="title">Movie Dreamer</h1>
      </header>
  
      <div className="searcher">
          <form onSubmit={handleOnSubmit}>
              <input className="search" 
                     type="search" 
                     value={searchTerm} 
                     onChange={handleOnChange} 
                     onInput={handleOnInput}
                     placeholder="Search"></input>
          </form>
      </div>
  
      <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"} 
          forcePage={currentPage - 1} />
  
      { loading ? <Loader /> : apiError ? <ApiError /> : 
      <div className="movie-container">
          {movies.length > 0 && movies.map((movie)=>(
              <a href={"https://www.themoviedb.org/movie/" + movie.id} key={movie.id + "URL"} target="_blank" rel="noopener noreferrer">
                  <Movie key={movie.id} {...movie} />
              </a>
          ))}
      </div>
      }
  
      <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"} 
          forcePage={currentPage - 1} />
  
      <Footer />
      </>
    );
}

export default App;

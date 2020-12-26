import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return "green";
    }
    else if(vote >= 6) {
        return "orange";
    }
    else {
        return "red";
    }
};

const Movie = ({title, poster_path, overview, vote_average, original_language, popularity, release_date, vote_count}) => (
    <div className="movie">
        <img src={(poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="movie-overview">
            <h2>{title}</h2>
            <ul className="movie-overview-info">
                <li>Release: {release_date}</li>
                <li>Language: {original_language}</li>
                <li>Popularity: {popularity}</li>
                <li>Votes: {vote_count}</li>
            </ul>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie;
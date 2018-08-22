import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MovieItem from './MovieItem';
import styles from './MovieList.css';

function MovieList() {
    return (
        <div className="movie-list">
            <div className="movies-container">
                <MovieItem title="Deadpool 2" 
                year="2012"
                description="This is a small synopsis" />
            </div>
            <Button variant="fab" color="secondary" aria-label="Add">
                <AddIcon />
            </Button>
        </div>
    )
}

export default MovieList;
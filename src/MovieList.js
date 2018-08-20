import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


function MovieList() {
    return (
        <Button variant="fab" color="secondary" aria-label="Add">
        <AddIcon />
        </Button>
    )
}

export default MovieList;
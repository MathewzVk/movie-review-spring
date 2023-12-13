package com.mathewzvk.moviesapi.service;

import com.mathewzvk.moviesapi.model.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    public List<Movie> getAllMovies();

    public Optional<Movie> getMovieByImdbId(String id);
}

package com.mathewzvk.moviesapi.service;

import com.mathewzvk.moviesapi.model.Movie;
import com.mathewzvk.moviesapi.repo.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService{

    private final MovieRepository repository;

    public MovieServiceImpl(MovieRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Movie> getAllMovies() {
        return repository.findAll();
    }

    @Override
    public Optional<Movie> getMovieByImdbId(String id) {
        return repository.findMovieByImdbId(id);
    }
}

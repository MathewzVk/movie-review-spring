package com.mathewzvk.moviesapi.controller;


import com.mathewzvk.moviesapi.model.Movie;
import com.mathewzvk.moviesapi.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin("http://localhost:4200/")
public class MovieController {

    private final MovieService theService;

    public MovieController(MovieService theService) {
        this.theService = theService;
    }


    @GetMapping
    public ResponseEntity<List<Movie>> allMovies() {
        return ResponseEntity.ok(theService.getAllMovies());
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getMovieByImdbId(@PathVariable String imdbId) {
        return ResponseEntity.ok(theService.getMovieByImdbId(imdbId));
    }
}

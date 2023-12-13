package com.mathewzvk.moviesapi.controller;

import com.mathewzvk.moviesapi.model.Review;
import com.mathewzvk.moviesapi.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService theService;

    @PostMapping
    public ResponseEntity<Review> addReview(@RequestBody Map<String, String> payload) {
        this.theService.addReview(payload.get("reviewBody"), payload.get("imdbId"));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}

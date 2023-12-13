package com.mathewzvk.moviesapi.service;

import com.mathewzvk.moviesapi.model.Review;

public interface ReviewService {
    public Review addReview(String reviewBody, String imdbId);
}

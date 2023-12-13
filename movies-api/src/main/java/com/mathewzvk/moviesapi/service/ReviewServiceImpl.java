package com.mathewzvk.moviesapi.service;

import com.mathewzvk.moviesapi.model.Movie;
import com.mathewzvk.moviesapi.model.Review;
import com.mathewzvk.moviesapi.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService{


    @Autowired
    ReviewRepository repository;

    @Autowired
    MongoTemplate template;

    @Override
    public Review addReview(String reviewBody, String imdbId) {

        Review review = repository.insert(new Review(reviewBody));

        template.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}

package com.mathewzvk.moviesapi.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Review {
    @Id
    private ObjectId id;

    private String body;

    public Review(String theBody){
        this.body = theBody;
    }
}

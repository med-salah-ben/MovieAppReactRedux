import React from "react";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { Row, Col } from "reactstrap";
import "./MovieList.css";

const MovieList = ({ movieList, searchInput, ratingSearch }) => {
  return (
    <Row>
      {(ratingSearch > 0
        ? movieList.filter(el => el.rating >= ratingSearch)
        : searchInput
        ? movieList.filter(el =>
            el.title.toLowerCase().includes(searchInput.toLowerCase().trim())
          )
        : movieList
      ).map((el, key) => (
        <Col md={2} className="movie-card" key={key}>
          <MovieCard movie={el} key={key} />
        </Col>
      ))}
    </Row>
  );
};
const mapStateToProps = state => ({
  movieList: state.movieReducer.movieList,
  searchInput: state.movieReducer.searchInput,
  ratingSearch: state.movieReducer.ratingSearch
});
export default connect(mapStateToProps)(MovieList);

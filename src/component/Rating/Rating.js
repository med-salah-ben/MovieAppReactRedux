import React from "react";
import { connect } from "react-redux";

import { ratingSearch } from "../../js/actions/Actions";

const Rating = ({ count, ratingSearch }) => {
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      starArray.push(
        <span
          key={i}
          role="img"
          aria-label="star"
          onClick={() => ratingSearch(i + 1)}
        >
          ★
        </span>
      );
    } else {
      starArray.push(
        <span
          key={i}
          role="img"
          aria-label="star"
          onClick={() => ratingSearch(i + 1)}
        >
          ☆
        </span>
      );
    }
  }
  return <div>{starArray}</div>;
};

export default connect(null, { ratingSearch })(Rating);

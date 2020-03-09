import {
  SEARCH_INPUT,
  RATING_SEARCH,
  DELETE_MOVIE,
  ADD_MOVIE,
  EDIT_MOVIE
} from "../constants/ActionsType";

const initialState = {
  movieList: [
    {
      id: 1,
      title: "300",
      poster:
        "https://resizing.flixster.com/et6ciDurgF5wjJ940v1GfVDyURw=/206x305/v1.bTsxMTE2NjcxNDtqOzE4NDQ0OzEyMDA7ODAwOzEyMDA",
      rating: 5,
      trailer: "https://www.youtube.com/embed/UrIbxk7idYA"
    },
    {
      id: 2,
      title: "The mask",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Mask_%28film%29_poster.jpg/220px-The_Mask_%28film%29_poster.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/LZl69yk5lEY"
    },

    {
      id: 3,
      title: "parfum de printemps",
      poster:
        "https://pbs.twimg.com/profile_images/716736390596333568/Hk3w00xz_400x400.jpg",
      rating: 3,
      trailer:
        "http://www.allocine.fr/video/player_gen_cmedia=19561253&cfilm=229509.html"
    },
    {
      id: 4,
      title: "ICE AGE",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV7KBEg4hxfyiRipE9SfaPIy374q25HQ-rhe2GReXg6ZRCExgi",
      rating: 2,
      trailer: "https://www.youtube.com/embed/KAmIHa-Rztg"
    }
  ],
  searchInput: "",
  ratinSearch: 0
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload
      };
    case RATING_SEARCH:
      return {
        ...state,
        ratingSearch: payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieList: state.movieList.filter(el => el.id != payload)
      };
    case ADD_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieList: [...state.movieList, payload]
      };
    case EDIT_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieList: state.movieList.map(el =>
          el.id === payload.id ? payload : el
        )
      };

    default:
      return state;
  }
};

export default movieReducer;

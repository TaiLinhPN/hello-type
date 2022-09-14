import { TopMovieActionTpye } from "./type";

export interface TopMovie {
  id: string;
  name: string;
  completed: boolean;
}

type TopMovieState = TopMovie[];

type TopMovieAction = {
  type: TopMovieActionTpye;
  payload: TopMovie[];
};

const { GET_TOP_MOVIE, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionTpye;

export const topMovieReducer = (
  state: TopMovieState,
  action: TopMovieAction
) => {
  switch (action.type) {
    case GET_TOP_MOVIE:
      return action.payload;
    case TOGGLE_TOP_MOVIE_WATCHED:
      return action.payload;

    default:
      return state;
  }
};

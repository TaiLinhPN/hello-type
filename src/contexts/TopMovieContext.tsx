import axios from "axios";
import { createContext, ReactNode, useReducer } from "react";
import { TopMovie, topMovieReducer } from "../reducers/TopMoviesReducer";
import { TopMovieActionTpye } from "../reducers/type";

interface TopMovieContextProps {
  children: ReactNode;
}

const topMoviesDefault: TopMovie[] = [];
const { GET_TOP_MOVIE } = TopMovieActionTpye;

const TopMovieContextDefault = {
  topMovies: topMoviesDefault,
  getTopMovies: () =>{},
};
export const TopMovieContext = createContext(TopMovieContextDefault);

const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault);

  const getTopMovies = async () => {
    const topMovie = await axios.get(
      `https://61daee3c4593510017aff71b.mockapi.io/todo`
    );
    dispatch({
      type: GET_TOP_MOVIE,
      payload: topMovie.data ,
    });
  };
    const topMoviesData = { topMovies, getTopMovies };
    return (
      <TopMovieContext.Provider value={topMoviesData}>
        {children}
      </TopMovieContext.Provider>
    );
};

export default TopMovieContextProvider
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useContext } from "react";
import { TopMovieContext } from "../../contexts/TopMovieContext";

const TopMoviesHeader = {
  paddingBottom: 0,
  variant: "h4",
  align: "center",
  color: "primary",
};
const TopMoviesList = {
  paddingTop: 0,
};
const TopMoviesItem = {
  paddingTop: 2,
  paddingBottom: 2,
};
const TopMovies = () => {
  const { topMovies, getTopMovies } = useContext(TopMovieContext);
console.log("aaaaa",topMovies);

  useEffect(() => {
    getTopMovies();
  }, []);
  return (
    <Box>
      <Card raised sx={{ mt: 2, ml: 2 }}>
        <CardHeader title="Todo list" sx={TopMoviesHeader} />
        <CardContent>
          <List>
            {topMovies.map((movie, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <Checkbox checked={movie.completed} />
                </ListItemIcon>
                <ListItemText primary={movie.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;

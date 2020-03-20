import React from "react";
import { connect } from "react-redux";
import { animeTime } from "../actions/ghibliActions";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    margin: "0 10%",
    textAlign: "center"
  },
  movie: {
    border: "1px solid black",
    margin: "5% 0",
    padding: "3%"
  },
  fail: {
    background: "lightcoral",
    color: "red",
    padding: "5%",
    margin: "0 20%"
  }
});

const Ghibli = props => {
  const classes = useStyles();
  const gimmeAnime = e => {
    e.preventDefault();
    props.animeTime();
  };
  return (
    <div className={classes.root}>
      <h1>Studio Ghibli Films</h1>
      {props.error && <p className={classes.fail}>{props.error}</p>}
      <button onClick={gimmeAnime}>Get Films</button>
      <div>
        {props.films.map(movie => (
          <section className={classes.movie} key={movie.id}>
            <h2> {movie.title}</h2>
            <h5>Directed by: {movie.director}</h5>
            <p>{movie.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    films: state.films,
    error: state.error
  };
};
export default connect(mapStateToProps, { animeTime })(Ghibli);

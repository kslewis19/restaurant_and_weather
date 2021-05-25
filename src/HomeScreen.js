import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext"
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import NavBar from './NavBar'

export default function HomeScreen() {
  const { isDark } = useContext(ThemeContext)

  const useStyles = makeStyles(() => {
    if (isDark) {
      return (
        {
          root: {
            backgroundColor: "black", minHeight: "100vh",
            color: "white"
          },
        })
    }
    else return (
      {
        root: {
          backgroundColor: "beige", minHeight: "100vh"
        },
      }
    )
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <h1>Home</h1>
      <h2> What would you like to do?</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "space-between",
        }}
      >
        <div>
          <Link style={{ fontSize: 25 }} to="/weather">
            Check Weather
          </Link>
        </div>
        <div>
          <Link style={{ fontSize: 25 }} to="/restaurants">
            Search For Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
}

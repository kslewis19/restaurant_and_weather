import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext"
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import NavBar from './NavBar'
import background from "./background.png";


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
          backgroundColor: "beige", minHeight: "100vh",
          backgroundImage: `url(${background})`
        },
      }
    )
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <div style={{ fontSize: 100, color: "yellow" }}>Food and Weather</div>
      <h2 style={{ color: "white" }}> What would you like to do today?</h2>

    </div>
  );
}

import react from "react";
import classes from "./App.module.css";
import { Main } from "./components/Main/Main";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className={classes.App}>
      <Main />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);

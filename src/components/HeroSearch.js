import React from "react";
import { connect } from "react-redux";

const HeroSearch = () => {
  return <h1>This is a search box</h1>;
};

const mapStateToProps = (state) => {
  return {
    welcome: state.welcome,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSearch);

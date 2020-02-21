import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const SmurfForm = props => {
  // const []
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <>
      {props.isFetchingData ? (
        <div>we are fetching Smurfs</div>
      ) : (
        <button onClick={handleGetData}>Bring me Smurfs!!</button>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfForm);
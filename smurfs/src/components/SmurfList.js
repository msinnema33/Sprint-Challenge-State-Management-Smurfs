import React from "react";
import { connect } from "react-redux";

const SmurfList = props => {
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map(smurf => <div key={smurf.id}>{smurf.name} {smurf.age} {smurf.height}</div>)
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(SmurfList);
import React from 'react';

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-secondary bg-opacity-25">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-12 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <strong> Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris <strong>nisi ut aliquip</strong> ex ea commodo consequat.
        </p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  );
};

export default Jumbotron;

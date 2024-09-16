import React from 'react';
import './StyledComponent.scss';

const StyledComponent = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h1 className="card-title">Front</h1>
        </div>
        <div className="card-back" >
          <h1 className="card-title">Back</h1>
          <p className="card-description">HELLO!!!!</p> 
          <p className="card-desc">I'M FRONT END DEVELOPER</p> 
        </div>
      </div>
    </div>

  );
};

export default StyledComponent;

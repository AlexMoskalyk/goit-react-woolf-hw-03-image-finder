import React from 'react';
import '../styles.css';

const Button = ({ onClick }) => {
  return (
    <div className="Button-container">
      <button type="button" className="Button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default Button;

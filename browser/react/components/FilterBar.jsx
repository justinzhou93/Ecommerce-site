import React from 'react';

export default function (props) {

  const handleChange = props.handleChange;
  const inputValue = props.inputValue;

  return (
    <div className="search-bar-container">
        <div className="search-bar">
            <form className="form-group" style={{marginTop: '20px'}}>
            <input
                onChange={handleChange}
                value={inputValue}
                className="form-control"
                placeholder="Enter product name..."
            />
            </form>
        </div>
    </div>
  )
}

import React from 'react';

const defaultUrl = 'http://tse1.mm.bing.net/th?id=OIP.VD1t7q80cGkoTktQo4LEPQEsCo&w=289&h=162&c=7&qlt=90&o=4&pid=1.7';

const Photo = (props) => {
  return (
    <div className="photo-container">
    	<div className="photo-content">
    		<img src={props.url || defaultUrl} />
    	</div>
    	<div className="photo-description">
    		<span>{props.description}</span>
    	</div>
    </div>
  );
};

export default Photo;
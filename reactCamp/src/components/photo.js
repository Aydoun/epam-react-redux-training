import React from 'react';

const defaultUrl = 'http://tse1.mm.bing.net/th?id=OIP.VD1t7q80cGkoTktQo4LEPQEsCo&w=289&h=162&c=7&qlt=90&o=4&pid=1.7';

const Photo = (props) => {
  return (
    <div className="photo-container">
    	<div className="photo-content">
    		<img src={props.url || ''}
    	</div>
    	<span>{props.defaultUrl}</span>
    </div>
  );
};

export default Photo;
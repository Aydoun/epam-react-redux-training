import React from 'react';
import Header from './header';
import AddPhoto from './add-photo';
import PhotoList from './photo-list';
import '../assets/styles/index.css';

const Container = (props) => {
  return (
    <div >
    	<div id="header">
    		<Header />
    	</div>
    	<div id="container">
    		<AddPhoto />
	    	<PhotoList />
    	</div>
    </div>
  );
};

export default Container;
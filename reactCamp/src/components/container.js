import React from 'react';
import Header from './header';
import '../assets/styles/index.css';

const Container = (props) => {
  return (
    <div >
    	<div id="header">
    		<Header />
    	</div>
    	<p>Css is working Yo!</p>
    </div>
  );
};

export default Container;
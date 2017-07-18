import React from 'react';
import Photo from './photo';

const PhotoList = (props) => {
  const photoData = [{
    id : 1,
    description:'dog',
    url : ''
  },
  {
    id : 2,
    description : 'cat',
    url : ''
  }
  ];

  return (
    <div>
    	{
            photoData.map((photo, index) => <Photo key={index} {...photo} />) 
        }
    </div>
  );
};

export default PhotoList;
import React from 'react';


const addPhoto = (props) => {
  return (
    <div className="photo-add__form">
    	<form>
            <input type="file" /><br/>
            <input type="text" name="title" placeholder="title" /><br/>
            <input type="submit" value="add" />
        </form>
    </div>
  );
};

export default addPhoto;
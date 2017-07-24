import React from 'react';


const addPhoto = (props) => {
  return (
    <div className="photo-add__form">
    	<form>
            <input type="file" /><br/>
            <input type="text" name="description" placeholder="Be Descriptive" /><br/>
            <input type="text" name="url" placeholder="Image Address" /><br/>
            <input type="submit" value="add" />
        </form>
    </div>
  );
};

export default addPhoto;
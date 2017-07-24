import React from 'react';
import Photo from './photo';
import Store from '../services';

export default class PhotoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photoData : []
    };
    this.store = new Store();
  }

  componentDidMount(){
    
    this.setState({
      photoData : this.store.getAll()
    });
  }

  render(){
    console.log(this.state.photoData)
    return (
      <div>
      {
        this.state.photoData.map((photo, index) => <Photo key={index} {...photo} />) 
      }
      </div>  
    )
  }
}
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

  onDelete(id) {
    this.store.removeById(id)
    .then(() => {
      this.setState({
        photoData: this.store.getAll()
      });
    });
  }

  onAddLike(id){

    this.store.addLike(id)
    .then(() => {
        this.setState({
          photoData: this.store.getAll()
        });
    });
  }

  render(){
    return (
      <div>
      {
        this.state.photoData.map((photo, index) => <Photo 
          onAddLike={this.onAddLike.bind(this)}
          onDelete={this.onDelete.bind(this)} key={index} {...photo} />) 
      }
      </div>  
    )
  }
}
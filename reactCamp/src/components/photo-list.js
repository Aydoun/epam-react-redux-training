import React, { Component } from 'react';
import Photo from './photo';
import Store from '../services';
import { Grid, Image, Card } from 'semantic-ui-react'

export default class PhotoList extends Component{
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
    const { photoData } = this.state;
    return (
      <Card.Group>
        {
          photoData.map((photo, index) =>
            <Photo
              key={index}
              {...photo}
              onAddLike={() => this.onAddLike(photo.id)}
              onDelete={() => this.onDelete(photo.id)}
            />
          )
        }
      </Card.Group>
    )
  }
}

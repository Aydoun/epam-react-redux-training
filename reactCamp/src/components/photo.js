import React from 'react';
import Store from '../services';
import { Grid, Image, Card, Button, Icon } from 'semantic-ui-react';


const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default class Photo extends React.Component {

    constructor(props){
        super(props);
    }

    addLikeToStore(){
        const {id} = this.props;
        this.props.onAddLike(id);
    }

    render(){
        const {id, url, description, likes} = this.props;
        const extra = (
          <div>
            <span className="side-margin">
              <Icon name='like' onClick={() => this.props.onAddLike(id)} />
              {likes || 0} likes
            </span>
            <span className="side-margin danger-marker" onClick={() => this.props.onDelete(id)}>
              <Icon name='trash'  />
              remove
            </span>
          </div>
        )
        return (
            <Card
              image={url}
              header={name}
              description={description}
              extra={extra}
            />
        );
    }
}

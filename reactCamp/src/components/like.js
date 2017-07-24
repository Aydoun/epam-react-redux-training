import React, { Component } from 'react';

class Likes extends Component {
  constructor(props) {
    super(props);
  }

  onLikesClicked() {
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.onLikesClicked.bind(this)}> like </a>
        <span>
        { this.props.likesNumber || '' }
        </span>
      </div>  
    );
  }
}

export default Likes;
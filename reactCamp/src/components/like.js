import React, { Component } from 'react';

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.initial
    };
  }

  onLikesClicked() {
    this.setState((prevState) => {
      const likes = prevState.likes + 1;
      this.props.onChange(likes);

      return { likes };
    });
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.onLikesClicked.bind(this)}> like </a>
        <span>
        { this.state.likes || '' }
        </span>
      </div>  
    );
  }
}

export default Likes;
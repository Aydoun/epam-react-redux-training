import React from 'react';
import Likes from './like';

const defaultUrl = 'http://tse1.mm.bing.net/th?id=OIP.VD1t7q80cGkoTktQo4LEPQEsCo&w=289&h=162&c=7&qlt=90&o=4&pid=1.7';

export default class Photo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            initialLikes : 0
        }
    }

    render(){
        return (
            <div className="photo-container">
                <div className="photo-content">
                    <img src={props.url} />
                </div>
                <div className="photo-description">
                    <span>{props.description}</span>
                    <Likes
                      initial={this.state.initialLikes}
                      onChange={(likes) => console.log('Likes', likes) } 
                    />

                </div>
            </div>
        );
    }
}
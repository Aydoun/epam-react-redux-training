import React from 'react';
import Likes from './like';
import Store from '../services';

const defaultUrl = 'http://tse1.mm.bing.net/th?id=OIP.VD1t7q80cGkoTktQo4LEPQEsCo&w=289&h=162&c=7&qlt=90&o=4&pid=1.7';

export default class Photo extends React.Component {

    constructor(props){
        super(props);
    }

    addListToStore(){
        const {id} = this.props;
        this.props.onAddLike(id);
    }

    render(){
        const {id, url, description} = this.props;
    
        return (
            <div className="photo-container">
                <div className="photo-content">
                    <img src={url} />
                    <div className="photo-description">
                        <span>{description}</span>
                        <Likes
                          likesNumber={this.props.likes}
                          onChange={this.addListToStore.bind(this) } 
                        />
                        <div>
                          <a href="javascript:void(0)" onClick={() => this.props.onDelete(id)}> delete </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
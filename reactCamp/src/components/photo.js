import React from 'react';
import Likes from './like';
import Store from '../services';

const defaultUrl = 'http://tse1.mm.bing.net/th?id=OIP.VD1t7q80cGkoTktQo4LEPQEsCo&w=289&h=162&c=7&qlt=90&o=4&pid=1.7';

export default class Photo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            likesNumber : this.props.likes
        }
        this.store = new Store();
    }

    addListToStore(){
        const {id} = this.props;

        this.store.addLike(id)
        .then(() => {
            this.setState({
                likesNumber: this.store.getLikesById(id)
            })
        });
    }

    render(){
        const {id, url, description} = this.props;
        console.log(this.state.likesNumber , 'state like')
        return (
            <div className="photo-container">
                <div className="photo-content">
                    <img src={url} />
                    <div className="photo-description">
                        <span>{description}</span>
                        <Likes
                          likesNumber={this.state.likesNumber}
                          onChange={this.addListToStore.bind(this) } 
                        />
                        <div>
                          <a href="#" onClick={() => {console.log(`${id } deleted`)}}> delete </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class addPhoto extends Component{
    constructor(props){
      super(props);
      this.state = {
        value : ''
      }
    }

    submitForm(e){
      e.preventDefault();
      console.log('submitted');
    }

    render(){
      const { value } = this.state
      return (
        <div className="photo-add__form">
          <h1>Add New Photo</h1>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input label='Photo Name' placeholder='Cats and Dogs' />
              <Form.Input label='Description' placeholder='be Descriptif' />
              <Form.Input label='Address' placeholder='http://...' />
            </Form.Group>
            <Form.Field inline>
              <label>Import File</label>
              <input type="file" name="file" />
            </Form.Field>
            <Button onClick={this.submitForm} primary>Submit</Button>
          </Form>
        </div>
      );
    }
}

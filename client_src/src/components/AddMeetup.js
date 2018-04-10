import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class AddMeetup extends Component {

  addMeetup(newMeetup){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/meetups',
      data: newMeetup
    })
    .then( res => {
      this.props.history.push('/');
     })
     .catch(err => console.log(err))
  }

  onSubmit(e)  {
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }

    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <br/>
        <Link className="btn grey" to="/"><FontAwesome name="angle-double-left" /> Back</Link>
        <h1>Add new Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input className="" type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input className="" type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input className="" type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label>
          </div>
          <button type="submit" className="btn blue"><FontAwesome name="check" /> Save</button>
        </form>
      </div>
    )
  }
}

export default AddMeetup;

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class MeetupDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: ''
    }
  }

  componentWillMount() {
    this.getMeetup();
  }

  getMeetup() {
    let meetupID = this.props.match.params.id;

    axios.get(`http://localhost:3000/api/meetups/${meetupID}`)
    .then( res => {
      this.setState({ details: res.data }, () => {
      });
    })
    .catch(err => console.log(err));
  }

  onDelete() {
    let meetupID = this.state.details.id;

    axios.delete(`http://localhost:3000/api/meetups/${meetupID}`)
      .then( res => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <br/>
        <Link className="btn grey" to="/"><FontAwesome name="angle-double-left" /> Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item"><u>City:</u> {this.state.details.city}</li>
          <li className="collection-item"><u>Address:</u> {this.state.details.address}</li>
        </ul>
        <Link className="btn green" to={`/meetups/edit/${this.state.details.id}`}><FontAwesome name="pencil" /> Edit</Link>
        <button className="btn red right" onClick={this.onDelete.bind(this)}><FontAwesome name="trash" /> Delete</button>
      </div>
    )
  }
}

export default MeetupDetails;

import React, { Component } from 'react';
import config from './config';

export class WaitingList extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let name = e.target['name'].value;
    e.target.reset();

    fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.props.updateState(name);
      });
  }

  renderWaitList() {
    const people = this.props.people;
    return people.map((person, i) => {
      return i === 0 ? (
        <li key={i}>
          <b>{person}</b>
        </li>
      ) : (
        <li key={i}>{person}</li>
      );
    });
  }
  render() {
    return (
      <div>
        <h3>Waiting List:</h3>
        <ol>{this.renderWaitList()}</ol>
        <legend>
          <b>Add your name</b>
        </legend>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="group">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name"></input>{' '}
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default WaitingList;

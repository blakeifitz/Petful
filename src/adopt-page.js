import React, { Component } from 'react';
import PetInfo from './pet-info';
import WaitingList from './waiting-list';
import config from './config';

export class AdoptPage extends Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      people: [],
      user: '',
    };
  }
  componentDidMount() {
    this.updateState();
    this.adoptInterval();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  updateState() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/people`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }),
      fetch(`${config.API_ENDPOINT}/pets`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }),
    ])
      .then(([peopleRes, petsRes]) => {
        if (!peopleRes.ok) {
          return peopleRes.json().then((e) => Promise.reject(e));
        }
        if (!petsRes.ok) {
          return petsRes.json().then((e) => Promise.reject(e));
        }
        return Promise.all([peopleRes.json(), petsRes.json()]);
      })
      .then(([people, pets]) => {
        this.setState({ people, pets });
        this.checkLine();
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  deletePet(petType) {
    if (!petType) {
      petType = Math.random() >= 0.5 ? 'cats' : 'dogs';
    } else {
      alert(`Thank you for adopting one of our ${petType}!`);
      this.adoptInterval();
    }

    fetch(`${config.API_ENDPOINT}/pets/${petType}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })
      .then(() => {
        this.updateState();
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  handleSubmit(user) {
    this.setState({ user: user });
    this.updateState();
  }
  adoptInterval() {
    this.interval = setInterval(() => {
      this.deletePet();
    }, 5000);
  }
  checkLine() {
    if (this.state.people[0] === this.state.user) {
      clearInterval(this.interval);
      alert('Your turn to pick!');
    }
  }
  render() {
    return (
      <div>
        <div className="pet-list">
          <h2>Our Current Pets</h2>
          <PetInfo type="cat" pet={this.state.pets.cat} />
          <PetInfo type="dog" pet={this.state.pets.dog} />
        </div>
        {this.state.people[0] === this.state.user ? (
          <div>
            <button onClick={() => this.deletePet('cats')}>Adopt Cat</button>{' '}
            <button onClick={() => this.deletePet('dogs')}>Adopt Dog</button>
          </div>
        ) : (
          <WaitingList
            people={this.state.people}
            updateState={(user) => this.handleSubmit(user)}
          />
        )}
      </div>
    );
  }
}

export default AdoptPage;

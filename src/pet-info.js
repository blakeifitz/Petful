import React, { Component } from 'react';

export class PetInfo extends Component {
  static defaultProps = {
    pet: {},
  };
  render() {
    return (
      <div>
        <h3>
          {this.props.pet.name}
          {', '}
          {this.props.pet.gender}
          {', '} {this.props.pet.age}
        </h3>
        <figure>
          <img src={this.props.pet.imageURL} alt="pet" />
          <figcaption>Breed: {this.props.pet.breed}</figcaption>
        </figure>
        <h4>Reason for Adoption:</h4>
        <p>{this.props.pet.story}</p>
      </div>
    );
  }
}

export default PetInfo;

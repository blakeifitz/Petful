import React, { Component } from 'react';
import landingPhoto from './rescueLanding.jpg';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h2>This is Petful, a first come first serve animal rescue.</h2>

        <div className="landing-body">
          <img src={landingPhoto} alt="cat and dog on bike" />
          <h3>The Process:</h3>
          <p>
            If you'd like to adopt you must join our queue. You can watch in
            real time as pets are being adopted.
          </p>

          <p>
            When you join the adoption waiting list, you'll wait until you are
            at the top.{' '}
          </p>
          <p>
            Once it's your turn to pick, you will to get choose to adopt either
            a cat or a dog. You must adopt the dog or cat that has been there
            the longest.
          </p>

          <button onClick={() => this.props.history.push('/pets')}>
            Click here to start
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;

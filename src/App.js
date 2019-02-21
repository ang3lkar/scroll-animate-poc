import React, { Component } from 'react';
import Foo from './Foo';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      scrolledOnBeta: false,
      scrolledOnCharlie: false
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.5]
    }

    this.observer1 = new IntersectionObserver((entries, observer) => {
      if (this.state.scrolledOnBeta) {
        console.log(entries[0].isIntersecting)
        console.log('already scrolled on #beta, do nothing more')
      } else {
        if (entries[0].isIntersecting) {
          var target = document.querySelector('#foo');
          target.classList.add("move-down");

          this.setState({scrolledOnBeta: true});
        }
      }
    }, options);

    this.observer2 = new IntersectionObserver((entries, observer) => {
      if (this.state.scrolledOnCharlie) {
        console.log(entries[0].isIntersecting)
        console.log('already scrolled on #charlie, do nothing more')
      } else {
        if (entries[0].isIntersecting) {
          var target = document.querySelector('#foo');
          target.classList.add("move-downer");

          this.setState({scrolledOnCharlie: true});
        }
      }
    }, options);
  }

  componentDidMount() {
    console.log('component did mount')
    var target1 = document.querySelector('#beta');
    setTimeout(() => {
      this.observer1.observe(target1);
    }, 100); // otherwise, it always fires on load

    var target2 = document.querySelector('#charlie');
    setTimeout(() => {
      this.observer2.observe(target2);
    }, 100); // otherwise, it always fires on load
  }

  render() {
    return (
      <div id="root" className="App">
        <Foo />
        <div id="alpha" className="first">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div id="beta" className="second">
        </div>
        <div id="charlie" className="third">
        </div>
      </div>
    );
  }
}

export default App;

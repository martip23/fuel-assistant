import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import fuelTruck from './fuelTruck.jpg';
import './App.css';

const homeContent = (
    <div>
        <img className="home-picture" src={fuelTruck} alt="Fuel truck" />
        <p>
            Welcome to the fuel price assistant built in react!
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec tempus pellentesque metus, a elementum ante porttitor vel. Integer a interdum elit. Donec ultrices
            gravida malesuada. Vestibulum scelerisque enim erat, at faucibus nulla eleifend sit amet. Fusce eu lobortis
            turpis. Praesent finibus sapien eu urna congue varius. Vestibulum id tempor nisl. In ut enim sit amet purus
            varius consectetur. Etiam mattis diam dolor, et molestie dolor scelerisque vitae. Curabitur pretium
            vestibulum libero, tempor dapibus massa vestibulum vitae. Sed at eros arcu. Curabitur cursus
            convallis libero.

            <br />
            <br />

            Nullam auctor mollis neque vel imperdiet. Nunc vitae maximus sem. Phasellus volutpat nulla eu lacus laoreet,
            mattis blandit sapien laoreet. Nunc eleifend nulla a viverra ultricies. Nunc sagittis, orci at feugiat
            lobortis, nulla sapien tempus neque, ut tincidunt nibh lorem sed tellus. Sed cursus ornare erat, vitae
            accumsan massa. Nullam eu enim enim. Donec condimentum ex metus, at imperdiet mi aliquet eu. Suspendisse vehicula vehicula nisl, eget auctor nunc congue ut. Donec imperdiet porttitor orci, non vehicula arcu feugiat quis. Nullam fermentum egestas augue quis rutrum. Mauris commodo, libero a rhoncus tempus, mi odio tempor lacus, id congue felis magna ac velit.
        </p>
    </div>
);

const clientContent = (
    <b>CLIENT LIST</b>
);

const requestContent = (
    <b>REQUEST FORM</b>
);

const historyContent = (
    <b>PRICE HISTORY</b>
);

function clientClick() {
    ReactDOM.render(clientContent, document.getElementById("content"));
}

function requestClick() {
    ReactDOM.render(requestContent, document.getElementById("content"));
}

function historyClick() {
    ReactDOM.render(historyContent, document.getElementById("content"));
}

function homeClick() {
    ReactDOM.render(homeContent, document.getElementById("content"));
}

let content = homeContent;

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fuel Price Assistant</h1>
        </header>
        <div className="navWrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                        <h3>Fuel Price Assistant</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className="well" id="homeLink" onClick={homeClick}>
                        Home
                    </li>
                    <li className="well" id="clientLink" onClick={clientClick}>
                        Client Info
                    </li>
                    <li className="well" id="requestLink" onClick={requestClick}>
                        Request a Quote
                    </li>
                    <li className="well" id="historyLink" onClick={historyClick}>
                        Quote History
                    </li>
                </ul>
                <img src={logo} className="App-logo" alt="logo" />
            </nav>
            <div id="content">
                {content}
            </div>
        </div>
          <footer className = "App-footer" class="footer fixed-bottom">
              Created in ReactJS by Patrick Martinez and Edwin Matthew 2018
          </footer>
      </div>
    );
  }
}

export default App;




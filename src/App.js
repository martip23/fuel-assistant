import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import ClientInfo from './ClientInformation';
import './App.css';

let clientInfo1 = ClientInfo;
clientInfo1.clientID = 123456;
clientInfo1.name = "Tom Tomlinson";
clientInfo1.address = "4320 S Congress Ave Austin, TX 78745";
clientInfo1.phone = "210-502-9459";
clientInfo1.email = "patrickmartinez@txstate.edu";


const homeContent = (
    <div id="textBox">
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
    <div className="clientContentWrapper">
        <div id="textBox">
            <h1>Client Info</h1>
            <div className="InfoForm form-group row">
                <label htmlFor="staticName" className="col-sm-2 col-form-label">Name: </label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticName"
                           value={clientInfo1.name}/>
                </div>
            </div>
            <div className="InfoForm form-group row">
                <label htmlFor="staticAddr" className="col-sm-2 col-form-label">Address: </label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticAddr"
                           value={clientInfo1.address}/>
                </div>
            </div>
            <div className="InfoForm form-group row">
                <label For="staticPhone" className="col-sm-2 col-form-label">Phone: </label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticPhone"
                           value={clientInfo1.phone}/>
                </div>
            </div>
            <div className="InfoForm form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email: </label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                           value={clientInfo1.email}/>
                </div>
            </div>

        </div>
    </div>
);

const requestContent = (
    <div className="requestContentWrapper">
        <div id="textBox">
            <h1>Request Quote</h1>
            <form>
                <div className="form-group">
                    <label for="gallonRequest">Gallons Requested: </label>
                    <input type="gallon" className="form-control" id="gallonRequest" placeholder="Enter in US Gal"/>
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryDate">Delivery Date:: </label>
                    <input type="date" className="form-control" id="deliveryDate" placeholder="MM/DD/YY"/>
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryLoc">Delivery Location: </label>
                    <input type="address" className="form-control" id="deliveryLoc" placeholder="Enter full address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryContactName">Delivery Contact Person Name: </label>
                    <input type="name" className="form-control" id="deliveryContactName" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryContactPhone">Delivery Contact Person Phone: </label>
                    <input type="phoneNumber" className="form-control" id="deliveryContactPhone" placeholder="000-000-0000"/>
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryContactEmail">Delivery Contact Person Email: </label>
                    <input type="email" className="form-control" id="deliveryContactEmail" placeholder="email@email.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="suggestedPrice">Suggested Price per Gallon: </label>
                    <input type="money" className="form-control" id="suggestedPrice" placeholder="Enter in US dollars w/ cents"/>
                </div>
                <div className="form-group">
                    <label htmlFor="totalAmtDue">Total Amount Due: </label>
                    <input type="money" className="form-control" id="totalAmtDue" placeholder="$0.00"/>
                </div>
            </form>
        </div>
    </div>
);

const historyContent = (
    <div>
        <h1>Quote History</h1>
        <table className="table table-hover">
            <thead>
            <th scope = "col">Item #</th>
            <th scope = "col">Request Date</th>
            <th scope = "col">Delivery Date</th>
            <th scope = "col">Gallons</th>
            <th scope = "col">Rate</th>
            <th scope = "col">Total Price</th>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">123456</td>
                    <td>12/30/1999</td>
                    <td>01/01/2000</td>
                    <td>25,000 gal</td>
                    <td>$3.25/gal</td>
                    <td>${3.25 * 25000}.00</td>
                </tr>
            </tbody>
        </table>
    </div>
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
          <footer className = "App-footer" className="footer fixed-bottom">
              Created in ReactJS by Patrick Martinez and Edwin Matthew 2018
          </footer>
      </div>
    );
  }
}

export default App;




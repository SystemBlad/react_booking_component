import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/react-datetime/react-datetime.css';
import Datetime from 'react-datetime';
import BookingMask from './components/booking-mask/booking-mask';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Datetime closeOnSelect={true}/>
                <BookingMask/>
            </div>
        );
    }
}

export default App;

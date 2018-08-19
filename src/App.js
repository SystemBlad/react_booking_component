import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BookingMask from './components/booking-mask/booking-mask';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Test</h1>
                </header>
                <BookingMask/>
            </div>
        );
    }
}

export default App;

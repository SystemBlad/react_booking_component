import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import BookingMask from './components/booking-mask/booking-mask';
import PropTypes from "prop-types";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("App Rendere")
        return (
            <div className="container-fluid">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Test</h1>
                </header>
                <BookingMask/>
                <label>URL:{this.props.urlGenerated}</label>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log( state);
    return { urlGenerated: state.bookingReducer.bookingURL};
};

App.propTypes = {
    urlGenerated: PropTypes.string
};

export default connect(mapStateToProps)(App);


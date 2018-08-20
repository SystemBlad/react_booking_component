import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import BookingMask from './components/booking-mask/booking-mask';
import PropTypes from "prop-types";

class App extends Component {
    handleClick() {
        window.location = this.props.urlGenerated;
    }

    render() {
        return (
            <div className="container-fluid" style={{maxWidth:"1000px"}}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Test</h1>
                </header>
                <BookingMask/>
                {this.props.urlGenerated ?
                    <div className="jumbotron">
                        <h1 className="display-4">URL Generated</h1>
                        <p>{this.props.urlGenerated}</p>
                        <p className="lead">
                            <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>
                                Go to Generated URL
                            </button>
                        </p>
                    </div>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {urlGenerated: state.bookingReducer.bookingURL};
};

App.propTypes = {
    urlGenerated: PropTypes.string
};

export default connect(mapStateToProps)(App);


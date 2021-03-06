import React, {Component} from 'react';
import '../react-datetime/react-datetime.css';
import IataCodeInput from '../iata-code-input/IataCodeInput';
import Datetime from 'react-datetime';
import NumericInput from 'react-numeric-input';
import moment from 'moment'
import { connect } from "react-redux";
import { saveBookingURL } from "./actions";

class BookingMask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCity: null,
            toCity: null,
            departureDate: null,
            returnDate: null,
            adults: 0,
            children: 0,
            infants: 0,
            formValid: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        if ((!this.state.adults && !this.state.children && !this.state.infants) || !this.state.fromCity || !this.state.toCity) {
            alert('Please, enter valid data');
        } else {
            let urlToSend = "https://www.swiss.com/us/en/Book/Outbound/" + this.state.fromCity.code + "-" + this.state.toCity.code +
                "/from-" + this.state.departureDate.format("YYYY-MM-DD") + "/adults-" + this.state.adults +
                "/children-" + this.state.children + "/infants-" + this.state.infants + "/class-economy/al-LX/sidmbvl'";
            this.props.saveBookingURL( urlToSend );
            event.preventDefault();
        }

    }

    render() {
        return (
            <div className="container">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group col-auto">
                        <label>
                            From:
                        </label>
                        <IataCodeInput value={this.state.fromCity}
                                       onUpdate={(val) => this.setState({fromCity: val})}/>
                        {!this.state.fromCity ?
                            <label className="alert-danger">
                                Enter a valid city
                            </label>
                            : null
                        }
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            To:
                        </label>
                        <IataCodeInput value={this.state.toCity}
                                       onUpdate={(val) => this.setState({toCity: val})}/>
                        {!this.state.toCity ?
                            <label className="alert-danger">
                                Enter a valid city
                            </label>
                            : null
                        }

                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Outbound Flight:
                        </label>
                        <Datetime closeOnSelect={true} dateFormat="YYYY-MM-DD" timeFormat={false}
                                  onChange={(val) => this.setState({departureDate: val})}
                                  inputProps={{placeholder: 'YYYY-MM-DD'}} value={this.state.departureDate}/>
                        {!moment(this.state.departureDate, 'YYYY-MM-DD', true).isValid() ?
                            <label className="alert-danger">
                                Enter a valid date
                            </label>
                            : null
                        }
                    </div>
                    <div className="form-group col-auto">
                        <label>
                            Return Flight:
                        </label>
                        <Datetime closeOnSelect={true} dateFormat="YYYY-MM-DD" timeFormat={false}
                                  onChange={(val) => this.setState({returnDate: val})}
                                  inputProps={{placeholder: 'YYYY-MM-DD'}} value={this.state.returnDate}/>
                        {!moment(this.state.returnDate, 'YYYY-MM-DD', true).isValid() ?
                            <label className="alert-danger">
                                Enter a valid date
                            </label>
                            : null
                        }

                    </div>
                    <div className="form-group col-auto" style={{width: 200}}>
                        <label>
                            Adults: Children: Infants:
                        </label>
                        <div>
                            <NumericInput min={0} max={20}
                                          onChange={(val) => this.setState({adults: val})}
                                          style={{input: {width: 60, height: 40}}} value={this.state.adults}/>
                            <NumericInput min={0} max={20}
                                          onChange={(val) => this.setState({children: val})}
                                          style={{input: {width: 60, height: 40}}} value={this.state.children}/>
                            <NumericInput min={0} max={20}
                                          onChange={(val) => this.setState({infants: val})}
                                          style={{input: {width: 60, height: 40}}} value={this.state.infants}/>

                        </div>
                        {(!this.state.adults && !this.state.children && !this.state.infants) ?
                            <label className="alert-danger">
                                Enter al least one
                            </label>
                            : null
                        }
                    </div>
                    <input type="submit" value="Search" className="btn btn-primary"
                           disabled={!(this.state.fromCity && this.state.toCity && (this.state.adults || this.state.children || this.state.infants))}/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveBookingURL: url => dispatch(saveBookingURL(url))
    };
};

export default connect(null, mapDispatchToProps)(BookingMask);
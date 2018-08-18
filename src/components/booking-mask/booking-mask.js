import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../react-datetime/react-datetime.css';
import IataCodeInput from '../iata-code-input/IataCodeInput';
import Datetime from 'react-datetime';
import NumericInput from 'react-numeric-input';
class BookingMask extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">
                            From:
                            <IataCodeInput/>
                        </Label>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword">
                            To:
                            <IataCodeInput/>
                        </Label>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword">
                            Outbound Flight:
                            <Datetime closeOnSelect={true} dateFormat="YYYY-MM-DD" timeFormat={false}/>
                        </Label>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword">
                            Return Flight:
                            <Datetime closeOnSelect={true} dateFormat="YYYY-MM-DD" timeFormat={false}
                                      inputProps={{ placeholder: 'YYYY-MM-DD' }}/>
                        </Label>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <label>
                            Adults:
                            <NumericInput className="form-control" min={0} max={20} value={50}
                                          style={{
                                              input: {
                                                  width: 60
                                              }
                                          }}
                            />
                        </label>
                        <label>
                            Minors:
                            <NumericInput className="form-control" min={0} max={20} value={50}
                                          style={{
                                              input: {
                                                  width: 60
                                              }
                                          }}
                            />
                        </label>
                        <label>
                            Infants:
                            <NumericInput className="form-control" min={0} max={20} value={50}
                                          style={{
                                              input: {
                                                  width: 60
                                              }
                                          }}
                            />
                        </label>
                        <label>
                            Total:
                            <label style={{color:"red"}} className="form-control">
                                70
                            </label>
                        </label>
                    </FormGroup>
                    <Button>Search</Button>
                </Form>
            </div>
        );
    }
}

export default BookingMask;
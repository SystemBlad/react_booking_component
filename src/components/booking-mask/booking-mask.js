import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../react-datetime/react-datetime.css';
import IataCodeInput from '../iata-code-input/IataCodeInput';
import Datetime from 'react-datetime';
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
                        <Label for="exampleEmail">From:</Label>
                        <IataCodeInput/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword">To:</Label>
                        <IataCodeInput/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword">Outbound Flight</Label>
                        <Datetime closeOnSelect={true}/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword">Return Flight:</Label>
                        <Datetime closeOnSelect={true}/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword">Passengers:</Label>
                        <label>
                            Pick your favorite flavor:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </label>
                    </FormGroup>
                    <Button>Search</Button>
                </Form>
            </div>
        );
    }
}

export default BookingMask;
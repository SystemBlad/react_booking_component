import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../react-datetime/react-datetime.css';
import IataCodeInput from '../iata-code-input/IataCodeInput';
import Datetime from 'react-datetime';
class BookingMask extends Component {
    render() {
        return (
            <div className="container">
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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
                    <Button>Search</Button>
                </Form>
            </div>
        );
    }
}

export default BookingMask;
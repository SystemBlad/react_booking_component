import React, {Component} from 'react';
import '../react-datetime/react-datetime.css';
import Autosuggest from 'react-autosuggest';

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name} ({suggestion.code})</span>
    );
}

class IataCodeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
            isLoading: false
        };

        this.lastRequestId = null;
    }


    loadSuggestions(value) {
        // Cancel the previous request
        if (this.lastRequestId !== null) {
            clearTimeout(this.lastRequestId);
        }

        this.setState({
            isLoading: true
        });

        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        fetch(process.env.PUBLIC_URL + '/cities.json')
            .then((response) => response.json())
            .then((findresponse) => {
                this.setState({
                    isLoading: false,
                    suggestions: findresponse.response.filter(item => regex.test(item.name))
                });
            });


    }

    onChange = (event, {newValue, method}) => {
        if (method === "type") {
            this.props.onUpdate(null);
        }
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.loadSuggestions(value);
    };

    getSuggestionValue(suggestion) {
        console.log(suggestion);
        this.props.onUpdate(suggestion);
        return suggestion.name + " (" + suggestion.code + ")";
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {

        const {value, suggestions, isLoading} = this.state;
        const inputProps = {
            value,
            onChange: this.onChange,
            type: 'search',
            placeholder: 'Enter a city',
        };

        return (

            <Autosuggest class="form-control"
                         suggestions={suggestions}
                         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                         getSuggestionValue={this.getSuggestionValue.bind(this)}
                         renderSuggestion={renderSuggestion}
                         inputProps={inputProps}/>

        );
    }
}

export default IataCodeInput;
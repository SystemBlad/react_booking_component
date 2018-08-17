import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import '../react-datetime/react-datetime.css';
import Datetime from 'react-datetime';
import Autosuggest from 'react-autosuggest';


const languages = [
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'C#',
        year: 2000
    },
    {
        name: 'C++',
        year: 1983
    },
    {
        name: 'Clojure',
        year: 2007
    },
    {
        name: 'Elm',
        year: 2012
    },
    {
        name: 'Go',
        year: 2009
    },
    {
        name: 'Haskell',
        year: 1990
    },
    {
        name: 'Java',
        year: 1995
    },
    {
        name: 'Javascript',
        year: 1995
    },
    {
        name: 'Perl',
        year: 1987
    },
    {
        name: 'PHP',
        year: 1995
    },
    {
        name: 'Python',
        year: 1991
    },
    {
        name: 'Ruby',
        year: 1995
    },
    {
        name: 'Scala',
        year: 2003
    }
];

function getMatchingLanguages(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
}

/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */

/* --------------- */

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
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

        // Fake request
        this.lastRequestId = setTimeout(() => {
            this.setState({
                isLoading: false,
                suggestions: getMatchingLanguages(value)
            });
        }, 1000);
    }

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.loadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {

        const {value, suggestions, isLoading} = this.state;
        const status = (isLoading ? 'Loading...' : 'Type to load suggestions');
        const inputProps = {
            placeholder: "From",
            value,
            onChange: this.onChange
        };


        return (

            <Autosuggest class="form-control"
                         suggestions={suggestions}
                         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                         getSuggestionValue={getSuggestionValue}
                         renderSuggestion={renderSuggestion}
                         inputProps={inputProps}/>

        );
    }
}

export default IataCodeInput;
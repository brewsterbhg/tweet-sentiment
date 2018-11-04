import React, { Fragment, PureComponent } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class SearchContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();

        const { value } = e.target;

        this.setState({ searchValue: value });
    }

    handleKeyPress(e) {
        console.log(e.key);
        if (e.key === 'Enter') this.handleSubmit(e);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.searchValue) return;

        axios.get(`/api/search?value=${encodeURIComponent(this.state.searchValue)}`)
        .then(response => {
            console.log(response.data);
        });
    }

    render() {
        return (
            <Fragment>
                <SearchBar
                    searchValue={this.state.searchValue}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
            </Fragment>
        );
    }
}

export default SearchContainer;
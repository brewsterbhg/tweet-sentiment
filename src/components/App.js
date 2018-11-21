import React, { Fragment, PureComponent } from 'react';
import TopBanner from 'components/TopBanner';
import SearchBar from 'components/SearchBar';
import Chart from 'components/Chart';
import Table from 'components/Table';
import Trending from 'components/Trending';
import Footer from 'components/Footer';
import axios from 'axios';
import './app.css';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            trending: [],
            searchValue: null
        };

        this.handleSearchResults = this.handleSearchResults.bind(this);
        this.handleTagClicked = this.handleTagClicked.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/trending`)
        .then(response => {
            this.setState({ trending: response.data[0] });
        });
    }

    handleSearchResults(results) {
        this.setState({ results });
    }

    handleTagClicked(tag) {
        axios.get(`/api/search?value=${encodeURIComponent(tag)}`)
        .then(response => {
            this.setState({ searchValue: tag }, () => {
                this.handleSearchResults(response.data);
            });
        });
    }

    render() {
        return (
            <div className='app'>
                <div className='content'>
                    <TopBanner />
                    <Trending
                        trending={this.state.trending}
                        tagClicked={this.handleTagClicked}
                    />
                    <SearchBar
                        handleSearchResults={this.handleSearchResults}
                        defaultValue={this.state.searchValue}
                    />
                    {this.state.results.length > 0 && (
                        <Fragment>
                            <Chart data={this.state.results} />
                            <Table data={this.state.results} />
                        </Fragment>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
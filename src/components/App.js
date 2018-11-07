import React, { Fragment, PureComponent } from 'react';
import TopBanner from 'components/TopBanner';
import SearchBar from 'components/SearchBar';
import Chart from 'components/Chart';
import Table from 'components/Table';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        };

        this.handleSearchResults = this.handleSearchResults.bind(this);
    }

    handleSearchResults(results) {
        this.setState({ results });
    }

    render() {
        return (
            <Fragment>
                <TopBanner />
                <SearchBar handleSearchResults={this.handleSearchResults} />
                {this.state.results.length > 0 && (
                    <Fragment>
                        <Chart data={this.state.results} />
                        <Table data={this.state.results} />
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

export default App;
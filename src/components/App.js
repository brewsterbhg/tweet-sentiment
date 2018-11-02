import React, { Fragment, PureComponent } from 'react';
import TopBanner from 'components/TopBanner';
import SearchBar from 'components/SearchBar';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Fragment>
                <TopBanner />
                <SearchBar />
            </Fragment>
        );
    }
}

export default App;
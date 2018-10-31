import React, { Fragment, PureComponent } from 'react';
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
                <SearchBar />
            </Fragment>
        );
    }
}

export default App;
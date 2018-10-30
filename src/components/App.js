import React, { Fragment, PureComponent } from 'react';
import SearchBar from 'components/SearchBar';
import Twitter from 'lib/twitter';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        Twitter.authenticate();
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
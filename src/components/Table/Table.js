import React from 'react';
import ReactTable from 'react-table';

const Table = ({ tweets }) => {
    const columns = [{
        Header: 'Status',
        accessor: 'status'
    }, {
        Header: 'Score',
        accessor: 'score'
    }, {
        Header: 'Retweet Count',
        accessor: 'retweet_count'
    }, {
        Header: 'Date',
        accessor: 'created_at'
    }];

    return (
        <ReactTable
            data={tweets}
            columns={columns}
        />
    );
}

export default React.memo(Table);
import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Table = ({ data }) => {
    const columns = [{
        Header: 'Status',
        accessor: 'status'
    }, {
        Header: 'Score',
        accessor: 'score.score'
    }, {
        Header: 'Retweet Count',
        accessor: 'retweets'
    }, {
        Header: 'Date',
        accessor: 'date'
    }];

    return (
        <ReactTable
            data={data}
            columns={columns}
        />
    );
}

export default React.memo(Table);
import React from 'react';
import ReactTable from 'react-table';
import Moment from 'moment';
import "react-table/react-table.css";
import './table.css';

const Table = ({ data }) => {
    const columns = [{
        Header: 'Status',
        accessor: 'status',
        Cell: row => <div><span title={row.value}>{row.value}</span></div>,
        maxWidth: 900
    }, {
        Header: 'Score',
        accessor: 'score.score',
        maxWidth: 75
    }, {
        Header: 'Retweets',
        accessor: 'retweets',
        maxWidth: 105
    }, {
        Header: 'Date',
        id: 'date',
        accessor: d => {
            return Moment(d.date)
                .local()
                .format('LLL')
        }
    }];

    return (
        <ReactTable
            data={data}
            columns={columns}
            className='-striped -highlight'
            defaultPageSize={10}
            showPageSizeOptions={false}
            ofText='/'
        />
    );
}

export default React.memo(Table);
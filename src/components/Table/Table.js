import React, { Fragment } from 'react';
import ReactTable from 'react-table';
import Moment from 'moment';
import "react-table/react-table.css";
import './table.css';

const Table = ({ data }) => {
    console.log(data)
    const columns = [{
        Header: 'User',
        Cell: row => (
            <Fragment>
                <img
                    className='user-image'
                    src={row.original.user.profile_image_url_https}
                    alt={`${row.original.user.screen_name} Avatar`}
                />
                <h3 className='user-name'>{row.original.user.screen_name}</h3>
            </Fragment>
        ),
        id: 'profileImage',
        width: 110
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: row => (
            <a
                href={`https://twitter.com/${row.original.user.screen_name}/status/${encodeURI(row.original.id)}`}
                className='status'
            >
                {row.value}
            </a>
        ),
        width: 900
    }, {
        Header: 'Score',
        accessor: 'score.score',
        maxWidth: 75
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
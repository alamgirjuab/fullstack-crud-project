import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const DataDisplayTable = (props) => {
    const { getData, filteredData, setFilteredData } = props;
    // const [data, setData] = useState([]);
    const [search, setSearch] = useState("");


    const columns = [
        {
            name: 'id',
            cell: (row, index) => index + 1,
            grow: 0,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Phone No',
            selector: row => row.phone,
        },
        {
            name: 'E-mail',
            selector: row => row.email,
        },
        {
            name: 'Hobbies',
            selector: row => row.hobby,
        },
        {
            name: 'Action',
            cell: row => [<button className='btn me-2 btn-danger'>Delete</button>, <button className='btn btn-warning'>Edit</button>]
        }
    ];

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const result = filteredData.filter(item => {
            return item.name.toLowerCase().match(search.toLowerCase());
        });
        setFilteredData(result);
    }, [search]);

    // console.log(data);
    return (
        <div className='mt-5'>
            <DataTable
                title="Data Table"
                columns={columns}
                data={filteredData}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                // actions={<button className='btn btn-sm btn-primary'>Export Data</button>}
                subHeader
                subHeaderComponent={<input
                    type='text'
                    placeholder='Search'
                    className='w-25 form-control'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />}
            />
            <button className='btn btn-primary btn-sm'>export</button>
        </div>
    );
};

export default DataDisplayTable;
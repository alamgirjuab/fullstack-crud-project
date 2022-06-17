import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const DataDisplayTable = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/formtotable')
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
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
            cell: row => <button className='btn btn-danger'>Delete</button>,
        }
    ];

    useEffect(() => {
        getData();
    }, [filteredData]);

    useEffect(() => {
        const result = data.filter(item => {
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
                actions={<button className='btn btn-sm btn-primary'>Export Data</button>}
                subHeader
                subHeaderComponent={<input
                    type='text'
                    placeholder='Search'
                    className='w-25 form-control'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />}
            />
        </div>
    );
};

export default DataDisplayTable;
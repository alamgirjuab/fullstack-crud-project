import React, { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component';
import MailComponent from './MailComponent';
import emailjs from '@emailjs/browser';

const DataDisplayTable = (props) => {
    const { getData, filteredData, setFilteredData } = props;
    const [selectedData, setSelectedData] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (state) => {
        setSelectedData(state.selectedRows);
    };
    console.log(selectedData);
    // ----------------------Email Functionality-------------------------------------

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mqdc80q', 'template_bxmy02c', form.current, 'user_PHjx4lQd4pXW23KjJfakS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    // ---------------------------------------------------------------

    //----------------------Data Delete Function----------------------------


    const handleDelete = id => {
        const url = `https://safe-journey-03403.herokuapp.com/formtotable/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Data deleted successfully !')
                    const remaining = filteredData.filter(remainData => remainData._id !== id);
                    setFilteredData(remaining);
                }
            })
    }

    /*  const handleDeleteOrder = id => {
         const url = `https://safe-journey-03403.herokuapp.com/formtotable/${id}`;
         fetch(url, {
             method: 'DELETE'
         })
             .then(res => res.json())
             .then(data => {
                 if (data.deletedCount) {
                     alert('deleted successfully')
                     const remainingUsers = filteredData.filter(service => service._id !== id)
                     setFilteredData(remainingUsers)
                 }
             })
     } */


    //---------------------Table Header-----------------------------


    const columns = [
        {
            name: '#',
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
            cell: row => [<button className='btn me-2 btn-danger' onClick={() => handleDelete(row._id)}>Delete</button>, <button className='btn btn-warning'>Edit</button>]
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


            {/* select data by clicking checkbox */}

            {/* <form action=""></form>

            {
                selectedData.map(singleData => <textarea>
                    {singleData}
                </textarea>)
            }

            <div>
                {
                    selectedData.map(singleData => <div>
                        <p>{singleData.name}</p>
                        <p>{singleData.email}</p>
                        <p>{singleData.hobby}</p>
                    </div>)
                }
            </div> */}
            <DataTable
                title="Data Table"
                columns={columns}
                data={filteredData}
                fixedHeader
                fixedHeaderScrollHeight='500px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                // actions={<button className='btn btn-sm btn-primary'>Export Data</button>}
                subHeader
                onSelectedRowsChange={handleChange}
                subHeaderComponent={<input
                    type='text'
                    placeholder='Search'
                    className='w-25 form-control'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />}
            />
            {/* <button className='btn btn-primary btn-sm my-2'>send</button><br /> */}

            {/*-------------------------------- 
              | select data by checkbox click |
              ---------------------------------*/}

            {/* <form ref={form} onSubmit={sendEmail}>

                <object name="message">
                    {
                        selectedData.map(singleData => <div>
                            <p>{singleData.name}</p>
                            <p>{singleData.email}</p>
                            <p>{singleData.hobby}</p>
                        </div>)
                    }
                </object>

                <input className='btn btn-primary btn-sm' type="submit" value="Send" />
            </form> */}
            <div className='mt-3'><MailComponent /></div>

        </div>
    );
};

export default DataDisplayTable;
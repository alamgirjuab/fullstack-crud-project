import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopupModal from './PopupModal';
import axios from 'axios';
import DataDisplayTable from './DataDisplayTable';
import Header from './Header';

const Home = () => {
    const [filteredData, setFilteredData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://safe-journey-03403.herokuapp.com/formtotable')
            // setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Header />
            <div className='container'>
                <PopupModal getData={getData} />
                <DataDisplayTable
                    getData={getData}
                    filteredData={filteredData}
                    setFilteredData={setFilteredData} />
            </div>
        </div>
    );
};

export default Home;
import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataDisplayTable from './components/DataDisplayTable';
import PopupModal from './components/PopupModal';
import axios from 'axios';

function App() {
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
      <h3 className='py-5 text-center bg-dark text-white'>
        Welcome to
        <span className='text-primary fw-bold'> Redpositive Service (OPC) </span>
        Private Limited
      </h3>
      <div className='container'>
        <PopupModal getData={getData} />
        <DataDisplayTable
          getData={getData}
          filteredData={filteredData}
          setFilteredData={setFilteredData} />
      </div>
    </div>
  );
}

export default App;

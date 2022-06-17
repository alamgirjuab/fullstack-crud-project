import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataDisplayTable from './components/DataDisplayTable';
import PopupModal from './components/PopupModal';

function App() {


  return (
    <div>
      <h3 className='py-5 text-center bg-dark text-white'>
        Welcome to
        <span className='text-primary fw-bold'> Redpositive Service (OPC) </span>
        Private Limited
      </h3>
      <div className='container'>
        <PopupModal />
        <DataDisplayTable />
      </div>
    </div>
  );
}

export default App;

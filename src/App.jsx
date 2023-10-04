import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Icon } from '@iconify/react';
import { Bar } from 'react-chartjs-2';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: 'Couleur preferé des francais',
      data: ["12", "19", "3"," 5"," 2", "3"],
    },
  ]
}

const Car = [
  { label: 'Porsche', year: 1994 },
  { label: 'Ford', year: 1972 },
  { label: 'Toyota', year: 1974 },
]
function App() {
  
  const[rowData,setRowData] = useState([
]);

const [columnDefs, setColumnDefs] = useState([
    { field: 'make', columnGroupShow: 'open' },
    { field: 'model' },
    { field: 'price' }
]);

useEffect(() => {
fetch('https://www.ag-grid.com/example-assets/row-data.json')
.then(result => result.json())
.then(rowData => setRowData(rowData))
console.log(rowData)
},[])
  return (
    <div className='ag-theme-alpine'style={{
      display: 'flex',
      flexDirection: 'column',
      
      height: 500, width: 625}}>
  
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}> <Icon width="50px" icon="meteocons:barometer" />CarTab <Icon width="50px" icon="meteocons:barometer" /></h1>
              <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Car}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Car" />}
    />
<AgGridReact

rowData={rowData}
columnDefs={columnDefs}

/>


    </div>
      
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Icon } from '@iconify/react';



function Aggrid() {
  
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
      
    
<AgGridReact

rowData={rowData}
columnDefs={columnDefs}

/>


    </div>
      
  )
}

export default Aggrid

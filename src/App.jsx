import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {
  
const rowData = [
  {make:'Toyota', model:'Celica', price:35000},
  {make:'Ford', model:'focus', price:45000},
  {make:'BMW', model:'4 Series', price:60000}
];
const columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
];
  return (
    <div className='ag-theme-alpine'style={{height: 500}}>
<AgGridReact
rowData={rowData}
columnDefs={columnDefs}
/>
    </div>
      
  )
}

export default App

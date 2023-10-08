import * as React from 'react';
import TextField from '@mui/material/TextField';
import AutocompleteComponent from './component/AutocompleteComponent';
import ChipComponent from './component/ChipComponent';
import TransferListComponent from './component/TransfertListComponent';


function MuiFilter() {

   
    return (
        <div >
        <h1>MuiFilter</h1>
            <div style={{display: 'flex'}}>
            <AutocompleteComponent/>
            <ChipComponent/>
            
      </div>
      <TransferListComponent/>
        </div>


    );
}

export default MuiFilter
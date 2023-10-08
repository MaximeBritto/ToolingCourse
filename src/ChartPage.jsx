import * as React from 'react';
import "./App.css"
import {Bar} from 'react-chartjs-2';
import { Icon } from '@iconify/react';


const data = {
    labels:['Red','Blue','Yellow','Green','Purple','Orange'],
    datasets:[
        {
            label:"Couleur preferer des francais",
            date:[12,19,3,5,2,3],
        }
    ]
}


function ChartPage() {

   
    return (
        <div className='App' >
        

        <h1 style={{fontSize: '150px'}}>ChartPage</h1>
        <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         width: 625}}> <Icon width="250px" icon="twemoji:soon-arrow" /></h1>
      
                </div>

      
        
    );
}

export default ChartPage
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


function MainMenu() {
 
    return (
        <div className="main-menu">
            <h1 style={{fontSize: '75px'}}>MAIN MENU</h1>

            <Box
      sx={{
    
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group" 
      sx={{
   
        
    }}>
        
          <div >
      <Button href='/aggrid'  style={{fontSize: '40px'}}>Aggrid</Button>  
        <h1>|</h1>
        <Button href='/muiFilter'  style={{fontSize: '40px'}}>Mui filter</Button>
        <h1>|</h1>
        <Button href='/chart'  style={{fontSize: '40px'}}>Chart</Button>
        </div>
      </ButtonGroup>
    </Box>
        </div>
    )
}


export default MainMenu
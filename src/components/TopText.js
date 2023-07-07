import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import LeftSection from './SideSection/LeftSection';
import RightSection from './SideSection/RightSection';
import data from "../Json File/Data.json";

export const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 18px',
    backgroundColor: '#0029FF',
    fontFamily:'Poppins',
    color:'white',
    borderRadius:10,
    letterSpacing:1,
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    
  });


function TopText() {
  return (
    <>
    <Box sx={{display:'flex'}}>

    
    <LeftSection/>

    <Box>
    <Box sx={{ flexGrow: 1, padding:'5px 120px',zIndex:'1' }} >
      
        <Toolbar>
            <Typography sx={{fontWeight:900 ,color:'#0029FF',fontSize:24}}  variant="h6" component="div">
            {data.title}
            </Typography>
          
          
            <Box sx={{ flexGrow: 1,}} />
            <Box sx={{ display: { md: 'flex' } }}>

                <CustomButton disableElevation>
                    Submit task
                </CustomButton>
            
            </Box>
         
        </Toolbar>
      
       
    </Box>

    <Box sx={{ flexGrow: 1, padding:'0px 140px',marginTop:2,zIndex:'1' }} >

    <Box sx={{
            
            backgroundColor: '#E9ECEF',
            padding:'25px',
            flexGrow: 1,
            borderRadius:2,
        }}>

            <Typography sx={{fontWeight:800,color:'black',fontSize:18,marginBottom:1}}  variant="h6" component="h6">
            {data.tasks[0].task_title}
            </Typography>
            <Typography sx={{color:'black',}}  variant="subtitle2" component="p">
            {data.tasks[0].task_description}
            </Typography>

        </Box>
    </Box>
    </Box>

    <RightSection/>
    </Box>
    </>
  )
}

export default TopText
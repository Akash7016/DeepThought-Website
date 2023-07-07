import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {  styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import {  Box } from '@mui/material';

import data from "../../Json File/Data.json";


;

const CustomAccordionSummary = styled(AccordionSummary)({
    
    backgroundColor:'black',
    color:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  });


  

function CardFour() {
    
    

  return (
    <Box sx={{ width: '100%', height:'500px',}}>
        {/* Heading */}
        <Accordion defaultExpanded >
            <CustomAccordionSummary
            expandIcon={<InfoIcon sx={{color:'white',display:'flex',justifyContent:''}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography sx={{fontFamily:'Open Sans',fontSize: '0.875rem',
                fontWeight: '700',visibility:'hidden',letterSpacing:10}} >Technical</Typography>
                <Typography sx={{fontFamily:'Open Sans',fontSize: '0.875rem',
                fontWeight: '700',}} >{data.tasks[0].assets[3].asset_title}</Typography>
            </CustomAccordionSummary>

            <AccordionDetails sx={{margin:'10px 0px'}}>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontWeight:'bold',marginRight:0.5,fontSize:14}}>
                Description: 
                    </Typography>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontSize:14}} variant='h5'>
                {data.tasks[0].assets[3].asset_description}
                </Typography>
            </AccordionDetails>
        </Accordion>

        {/* Center Data */}
        <Box sx={{height:'400px',overflowY:'scroll'}}>

        <iframe src={data.tasks[0].assets[3].asset_content}
        frameborder='0'   
        height='100%'
        width='100%'
        id="myFrame"
        title='Dtt'
        
        />
            
        </Box>

    </Box>
  )
}

export default CardFour
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/material';
import data from "../../Json File/Data.json";

const CustomAccordionSummary = styled(AccordionSummary)({
    
    backgroundColor:'black',
    color:'white',
    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  });

function CardOne() {
  return (
    <Box sx={{ width: '100%', height:'500px',}}>

        <Accordion defaultExpanded>
            <CustomAccordionSummary
            expandIcon={<InfoIcon sx={{color:'white',}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography sx={{fontFamily:'Open Sans',fontSize: '0.875rem',
                fontWeight: '700',visibility:'hidden'}} >Technical</Typography>
                <Typography sx={{fontFamily:'Open Sans',fontSize: '0.875rem',
                fontWeight: '700',}} >{data.tasks[0].assets[0].asset_title}</Typography>
            </CustomAccordionSummary>

            <AccordionDetails sx={{margin:'10px 0px'}}>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontWeight:'bold',marginRight:0.5,fontSize:14}}>
                Description: 
                    </Typography>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontSize:14}} variant='h5'>
                    {data.tasks[0].assets[0].asset_description}
                </Typography>
            </AccordionDetails>
        </Accordion>

        <iframe src={data.tasks[0].assets[0].asset_content}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        height='60%'
        width='100%'
        />
    </Box>
  )
}

export default CardOne
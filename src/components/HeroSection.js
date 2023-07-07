import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CardOne from './Cards/CardOne';
import CardTwo from './Cards/CardTwo';
import CardThree from './Cards/CardThree';
import CardFour from './Cards/CardFour';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'start',
    color: theme.palette.text.secondary,
    borderRadius:20,
    overflow: 'hidden',
    boxShadow: "0px 5px 10px grey",
    
  }));

function HeroSection() {
  return (
    <>
    <Box sx={{ flexGrow: 1, padding:'50px 150px', }} >
      
        <Toolbar>

            <Grid container borderRadius={10} justifyContent="center" spacing={5}>

                <Grid item xs={6}>
                    <Item><CardOne/></Item>
                </Grid>

                <Grid item xs={6}>
                    <Item><CardTwo/></Item>
                </Grid>

                <Grid item xs={6}>
                    <Item><CardThree/></Item>
                </Grid>

                <Grid item xs={6}>
                    <Item><CardFour/></Item>
                </Grid>
                
            </Grid>
         
        </Toolbar>
      
       
    </Box>

    
    </>
  )
}

export default HeroSection
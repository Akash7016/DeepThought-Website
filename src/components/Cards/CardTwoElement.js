import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';




function CardTwoElement(props) {
  return (
    <>
    <Typography sx={{margin:1}} fontWeight={500} color='black' variant='subtitle2'>{props.heading}</Typography>
    <Box sx={{backgroundColor:'white',borderRadius:5,padding:'10px'}} >
    <TextField
          
          fullWidth
          variant="standard"
          placeholder="Enter Text Here"
          InputProps={{
            disableUnderline: true,
            style: {fontSize: 15}
          }}
          InputLabelProps={{style: {fontSize: 15}}}
          multiline
          rows={3}
          
        />
    </Box>
    </>
)
}

export default CardTwoElement
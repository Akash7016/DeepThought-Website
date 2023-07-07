import React, { useState, useRef } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import DownArrow from '@mui/icons-material/KeyboardArrowDown';
import {CustomButton} from '../TopText'
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import data from "../../Json File/Data.json";

const CustomAccordionSummary = styled(AccordionSummary)({
    
    backgroundColor:'black',
    color:'white',
    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  });

  const SelectionOption = {
  Miscellaneous: ['Posts', 'Discussion'],
  Learnability: ['Spontaneity', 'Mental Models', 'Observation','Meta-Cognition','Extrapolation','Articulation/Communication','Lateral Connection','Questioning','Listening'],
  Value_Leadership: ['Culture Building', 'Competence', 'Influence', 'Values', 'Contribution', 'Thought Leadership', 'Execution', 'Strategy', 'Vision'],
  Technology: ['Problem Solving', 'Programming Language', 'Abstraction', 'Topology', 'Data Structure', 'Algorithm', 'Technological Thinking', 'Architectural Thinking', 'Model Thinking',],
  Acumen: ['psychological Acumen', 'Biztech Acumen', 'Behavioral Acumen'],
  Management: ['Product Management', 'Project Management', 'Time Management','Brand Management','Stress Management','People Management'],
  Business: ['Operations', 'Finance', 'Marketing'],
};



function CardThree() {
  const [SelectedProcess, setSelectedProcess] = useState('');
  const [selectedSubProcess, setselectedSubProcess] = useState('');
  const [file, setFile] = useState([]);
  const inputFile = useRef(null);
 
  const handleChange = e => {
    setFile([...file, e.target.files[0]]);
  }
  

  const handleOptionChange = (event) => {
    const country = event.target.value;
    setSelectedProcess(country);
    setselectedSubProcess('');
    
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setselectedSubProcess(state);
    
  };

  
  
  return (
    <Box sx={{ width: '100%', height:'500px',}}>

        <Accordion defaultExpanded>
            <CustomAccordionSummary
            expandIcon={<InfoIcon sx={{color:'white',}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography sx={{fontFamily:'Open Sans',fontSize: '0.875rem',
                fontWeight: '700',visibility:'hidden',letterSpacing:5}} >Technical</Typography>
                <Typography sx={{fontFamily:'Open Sans',fontSize: '0.875rem',
                fontWeight: '700',}} >{data.tasks[0].assets[2].asset_title}</Typography>
            </CustomAccordionSummary>

            <AccordionDetails sx={{margin:'10px 0px'}}>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontWeight:'bold',marginRight:0.5,fontSize:14}}>
                Description: 
                    </Typography>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontSize:14}} variant='h5'>
                {data.tasks[0].assets[2].asset_description}
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Box sx={{
            maxHeight:'300px',overflowY:'scroll',
            width:'100%',
            marginTop:'-15px',
            padding:'10px 30px'
            }}>

        <Box sx={{margin:'10px 0px'}}>

            <Typography fontWeight={700} color='black' >Title</Typography>
            <TextField
            fullWidth
            variant="standard"
            placeholder="Enter Text Here"
            InputProps={{
                disableUnderline: true,
                style: {fontSize: 15,
                    borderRadius:2,
                    padding:'8px 30px',
                    boxShadow:'0px 1px 2px grey',
                marginTop:5}
            }}
            InputLabelProps={{style: {fontSize: 15}}}
            />

        </Box>

        <Box sx={{margin:'10px 0px'}}>

            <Typography fontWeight={700} color='black' >Content</Typography>
            <TextField
            fullWidth
            variant="standard"
            placeholder="Enter Text Here"
            InputProps={{
                disableUnderline: true,
                style: {fontSize: 15,
                    borderRadius:2,
                    padding:'8px 30px',
                    boxShadow:'0px 1px 2px grey',
                marginTop:5}
            }}
            InputLabelProps={{style: {fontSize: 15}}}
            
            />

        </Box>

        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'20px 0px'}}>

                    <Box sx={{width:"160px" }}>
                    <Typography marginBottom='15px' fontWeight={700} color='black' >Category</Typography>
                    <FormControl  variant="filled" sx={{ borderRadius:1,boxShadow:'0px 1px 3px grey', }}>
                        <NativeSelect
                        defaultValue={SelectedProcess}
                        disableUnderline
                        style={{fontSize:'13px',fontWeight:'bold',marginLeft:'5px',padding:10
                          }}
                        fullWidth
                        IconComponent={DownArrow}
                        onChange={handleOptionChange}
                        >
                        <option style={{fontSize:'12px',}} value={10}>Select Category</option>
                        {Object.keys(SelectionOption).map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                        ))}
                        
                        </NativeSelect>
                    </FormControl>
                    </Box>

                    <Box sx={{width:"160px"  }}>
                    <Typography marginBottom='15px' fontWeight={700} color='black' >Sub Category</Typography>
                    <FormControl  variant="filled" sx={{ borderRadius:1,boxShadow:'0px 1px 3px grey', }}>
                        <NativeSelect
                        defaultValue={selectedSubProcess}
                        disableUnderline
                        style={{fontSize:'13px',fontWeight:'bold',marginLeft:'5px',padding:10
                          }}
                        fullWidth
                        IconComponent={DownArrow}
                        onChange={handleStateChange}
                        >
                        <option style={{fontSize:'12px',}} value={10}>Select Sub-Category(Optional)</option>
                        {SelectedProcess &&
              SelectionOption[SelectedProcess].map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
                        
                        </NativeSelect>
                    </FormControl>
                    </Box>

        </Box>

        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'20px 0px'}}>

                    <Box sx={{ }}>
                    <Typography marginBottom='15px' fontWeight={700} color='black' >Thumbnail</Typography>
                    <FormControl  variant="filled" sx={{ borderRadius:1,boxShadow:'0px 1px 3px grey', }}>
                    

                   

                  <div style={{borderRadius:'5px',overflow:'hidden',width:'160px',height:'48px',border:'1px solid grey'}}>
                    <form style={{display:'flex',justifyContent:'space-between', alignItems:'center',}}>
                        
                        <input onChange={handleChange} type='file' name='file' hidden='hidden' id='file' ref={inputFile}/>
                        
                        <span
                        style={{width:'100px',overflow:'hidden',height:'20px',marginLeft:'5px',fontWeight:'600',fontSize:'13px',}}
                         onClick={() => inputFile.current.click()}
                           id='custom-msg' title='No File Chosen'>
                          {(!file || file.length===0) ?
                          'Choose File':
                           file.map(x => x.name).join(', ')}
                          </span>
                         
                        <button
                        style={{color:'grey',background:'#fff',outline:0,overflow:'hidden',width:'100px',height:'50px',borderTop:'none',borderRight:'none',borderLeft:'1px solid grey',fontSize:'15px',fontWeight:'500'}}
                        type='button' id='upload-button'
                        onClick={() => inputFile.current.click()}>Select</button>
                          
                    </form>
                   </div>

                   
                   

                    
                    
                    </FormControl>
                    </Box>

                    

                    <Box sx={{  }}>
                    <Typography marginBottom='15px' fontWeight={700} color='black' >Thought Process</Typography>
                    <FormControl  variant="filled" sx={{ borderRadius:1,boxShadow:'0px 1px 3px grey', }}>
                        <NativeSelect
                        defaultValue={10}
                        disableUnderline
                        style={{fontSize:'13px',fontWeight:'bold',marginLeft:'5px',padding:10
                          }}
                        fullWidth
                        IconComponent={DownArrow}
                        
                        >
                        
                        <option style={{fontSize:'12px',}} value={10}>Select</option>
                        <option style={{fontSize:'12px',}} value={20}>Eureka Moment</option>
                        <option style={{fontSize:'12px',}} value={30}>Answer</option>
                        <option style={{fontSize:'12px',}} value={40}>Question</option>
                        <option style={{fontSize:'12px',}} value={50}>Root of Thought</option>
                        <option style={{fontSize:'12px',}} value={50}>Reflection</option>
                        </NativeSelect>
                    </FormControl>
                    </Box>

        </Box>

        <Box sx={{padding:'20px 0px',display:'flex',justifyContent:'end',}}>

        <CustomButton sx={{padding:'10px',marginRight:'10px'}} disableElevation>
            <SaveIcon sx={{fontSize:'20px',marginRight:'5px',}}/> <Typography variant='p'>Save Draft</Typography> 
        </CustomButton>
        <CustomButton disableElevation>
            <CloudUploadIcon sx={{fontSize:'20px',marginRight:'5px',}}/> <Typography variant='p'>Publish</Typography> 
        </CustomButton>
        </Box>

        </Box>
    </Box>
  )
}

export default CardThree
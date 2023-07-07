import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardTwoElement from './CardTwoElement';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MessageIcon from '@mui/icons-material/Message';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import SpaIcon from '@mui/icons-material/Spa';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import DownArrow from '@mui/icons-material/KeyboardArrowDown';
import {CustomButton} from '../TopText'
import AddIcon from '@mui/icons-material/Add';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import data from "../../Json File/Data.json";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    
    color: theme.palette.text.secondary,
  }));

const CustomAccordionSummary = styled(AccordionSummary)({
    
    backgroundColor:'black',
    color:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  });

function CardOne() {
    const [category, setcategory] = React.useState("");

  const handleChange = (event) => {
    setcategory(event.target.value);
  };

  

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
                fontWeight: '700',}} >{data.tasks[0].assets[1].asset_title}</Typography>
            </CustomAccordionSummary>

            <AccordionDetails sx={{margin:'10px 0px'}}>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontWeight:'bold',marginRight:0.5,fontSize:14}}>
                Description: 
                    </Typography>
                <Typography sx={{display:'inline',fontFamily:'Open Sans',fontSize:14}} variant='h5'>
                {data.tasks[0].assets[1].asset_description}
                </Typography>
            </AccordionDetails>
        </Accordion>

        {/* Center Data */}
        
        <Box sx={{
            maxHeight:'300px',overflowY:'scroll',
            
            }}>
        <Accordion defaultExpanded sx={{boxShadow:'0px -0.5px 5px grey',}}>
            <AccordionSummary
            sx={{
                display:'flex',
                flexDirection:'row-reverse',
                marginTop:'-15px',
                
            }}
            expandIcon={<KeyboardArrowDownIcon sx={{color:'black',fontSize:30}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                
                <Typography sx={{fontFamily:'Open Sans',fontSize: '1rem',
                fontWeight: '900',marginLeft:5,}} >Thread A</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{}}>

                {/* Main data */}
                
                
            <Box sx={{ flexGrow: 1,}}>

            
                    
                {/* Two TextField */}
                <Grid container spacing={2} columns={16}>

                    {/*  data 1 */}
                    <Grid item xs={8}>
                        <Item sx={{   
                            boxShadow:'0px 1px 5px grey',
                            borderRadius:5,
                            overflow:'hidden',
                            padding:'0px 3px 3px 3px',
                            backgroundColor:'rgb(240, 240, 240)'
                            }}>
                                <CardTwoElement heading = "Sub thread 1"/>
                        </Item>

                        <Box sx={{display:'flex',justifyContent:'end',alignItems:'center',height:'60px'}}>
                            <Box sx={{width:'120px',display:'flex',justifyContent:'space-between',}}>
                                <LightbulbIcon/>
                                <MessageIcon/>
                                <LiveHelpIcon/>
                                <SpaIcon/>
                            </Box>
                        </Box>

                    </Grid>
                    
                    {/*  data 2 */}
                    <Grid item xs={8}>

                    <Item sx={{ 
                            boxShadow:'0px 1px 5px grey',
                            borderRadius:5,
                            overflow:'hidden',
                            padding:'0px 3px 3px 3px',
                            backgroundColor:'rgb(240, 240, 240)'
                            }}>
                                <CardTwoElement heading = "Sub Interpretation 1"/>
                    </Item>

                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'60px'}}>

                    <Box sx={{ width: 80, }}>
                    <FormControl  variant="filled" sx={{ borderRadius:1,boxShadow:'0px 1px 3px grey', }}>
                        <NativeSelect
                        defaultValue={10}
                        value={category}
                        onChange={handleChange}
                        
                        disableUnderline
                        style={{fontSize:'11px',fontWeight:'bold',marginLeft:'5px'
                          }}
                        fullWidth
                        IconComponent={DownArrow}
                        
                        >
                        <option style={{fontSize:'12px',}} value={10}>Select Category</option>
                        <option style={{fontSize:'12px',}} value={20}>Remark</option>
                        <option style={{fontSize:'12px',}} value={30}>Sub-argument</option>
                        <option style={{fontSize:'12px',}} value={40}>Sub-explanation</option>
                        <option style={{fontSize:'12px',}} value={50}>Core-principle</option>
                        </NativeSelect>
                    </FormControl>
                    </Box>

                    <Box sx={{ width: 80, }}>
                    <FormControl  variant="filled" sx={{ borderRadius:1,boxShadow:'0px 1px 3px grey', }}>
                        <NativeSelect
                        defaultValue={10}
                        value={category}
                        onChange={handleChange}
                        
                        disableUnderline
                        style={{fontSize:'11px',fontWeight:'bold',marginLeft:'5px'
                          }}
                        fullWidth
                        IconComponent={DownArrow}
                        
                        >
                        <option style={{fontSize:'12px',}} value={10}>Select Process</option>
                        <option style={{fontSize:'12px',}} value={20}>Question</option>
                        <option style={{fontSize:'12px',}} value={30}>Analogy</option>
                        <option style={{fontSize:'12px',}} value={40}>Sarcasm</option>
                        <option style={{fontSize:'12px',}} value={50}>Insight</option>
                        <option style={{fontSize:'12px',}} value={50}>Counter-Example</option>
                        </NativeSelect>
                    </FormControl>
                    </Box>

                    </Box>

                    </Grid>

                </Grid>

                {/* Sub Thread Button */}
                <CustomButton sx={{padding:'5px 10px',margin:'10px 0px 20px 0px'}} disableElevation>
                   <AddIcon sx={{fontSize:'15px',marginRight:'5px',stroke:'white',strokeWidth:2}}/> <Typography variant='p'>Sub-thread</Typography> 
                </CustomButton>

                {/* Single Fullwidth TextField */}
                <Grid container spacing={1} columns={16}>

                    {/*  data 1 */}
                    <Grid item xs={12} container>
                        <Item sx={{   
                            boxShadow:'0px 1px 5px grey',
                            borderRadius:5,
                            overflow:'hidden',
                            padding:'0px 3px 3px 3px',
                            backgroundColor:'rgb(240, 240, 240)',
                            width:'100%'
                            }}>
                                <CardTwoElement heading = "Summary for Thread A"/>
                        </Item>

                    </Grid>
                    
                    
                    

                </Grid>
                
                {/* Bottom Elements */}
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'60px'}}>

                    <Box sx={{display:'flex',width:'140px',justifyContent:'space-between',alignItems:'end'}} >
                    
                    <InsertLinkIcon sx={{fontSize:'18px'}}/>
                        <Typography variant='p'>
                            Thread Credit
                        </Typography>
                    <DriveFileRenameOutlineTwoToneIcon sx={{fontSize:'18px',color:'blue'}}/>
                    </Box>

                    <Box sx={{  }}>
                    <FormControl  variant="filled" sx={{ borderRadius:1,boxShadow:'0px 1px 3px grey', }}>
                        <NativeSelect
                        defaultValue={10}
                        value={category}
                        onChange={handleChange}
                        
                        disableUnderline
                        style={{fontSize:'11px',fontWeight:'bold',marginLeft:'5px'
                          }}
                        fullWidth
                        IconComponent={DownArrow}
                        
                        >
                        <option style={{fontSize:'12px',}} value={10}>Select Emotion</option>
                        <option style={{fontSize:'12px',}} value={20}>Eureka Emphasis</option>
                        <option style={{fontSize:'12px',}} value={30}>Blissfully Puzzled</option>
                        <option style={{fontSize:'12px',}} value={40}>Spiritually Determined</option>
                        <option style={{fontSize:'12px',}} value={50}>Upset & Motivated</option>
                        
                        </NativeSelect>
                    </FormControl>
                    </Box>

                </Box>

                

               
            </Box>

            </AccordionDetails>

        </Accordion>

        {/* Sub Thread Button */}
       
            
            <Box sx={{padding:'20px 20px',display:'flex',justifyContent:'end',}}>

                <CustomButton disableElevation>
                    <AddIcon sx={{fontSize:'15px',marginRight:'5px',stroke:'white',strokeWidth:2}}/> <Typography variant='p'>New Thread</Typography> 
                </CustomButton>
            </Box> 
       
        </Box>

    </Box>
  )
}

export default CardOne
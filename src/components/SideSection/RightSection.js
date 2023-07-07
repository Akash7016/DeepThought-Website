import React, { useState } from 'react'
import { motion } from "framer-motion"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function RightSection() {
  const [isOpen, setisOpen] = useState(false) 
  const toggle = () => setisOpen(!isOpen)
  return (
    <div style={{position:'relative'}}>
      <motion.div animate={{width:isOpen?'200px':'100px',}} style={{boxShadow:'2px 2px 10px grey',borderRadius:'10px 0px 0px 10px',overflow:'hidden',zIndex:'111',position:'absolute',right:0,top:0,backgroundColor:'white',height:'350px',marginTop:'50px'}}>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',backgroundColor:'black',alignItems:'center',width:'50px',height:'100%'}}>
           
           
            {isOpen?
            <CloseIcon sx={{cursor:'pointer',color:'white'}} onClick={toggle} fontSize='large'/>
            :
            <AddIcon sx={{cursor:'pointer',color:'white'}} onClick={toggle} fontSize='large'/>
          }

          
          <p style={{fontSize:'18px',color:'white',letterSpacing:'2px',writingMode:'vertical-lr',textOrientation:'upright'}}>{`Notice Board`}</p>
          

        
        </div>  

        

      </motion.div>
    </div>
  )
}

export default RightSection





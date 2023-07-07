import React, { useState } from 'react'
import { motion } from "framer-motion"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


function LeftSection() {
  const [isOpen, setisOpen] = useState(false) 
  const toggle = () => setisOpen(!isOpen)
  return (
    <div>
      <motion.div animate={{width:isOpen?'400px':'100px',height:'700px'}} style={{boxShadow:'2px 2px 10px grey',borderRadius:'0px 10px 10px 0',overflow:'hidden',position:'absolute',zIndex:'111'}}>

        <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'black',height:'50px',alignItems:'center'}}>
          {isOpen?
          <p style={{fontSize:'18px',color:'white',letterSpacing:'2px'}}>Journey Board</p>
          : null
          }

        
        {isOpen?
        <ArrowCircleLeftIcon sx={{cursor:'pointer',color:'white'}} onClick={toggle} fontSize='large'/>
        :
        <ArrowCircleRightIcon sx={{cursor:'pointer',color:'white'}} onClick={toggle} fontSize='large'/>
      }
        </div>  

        {
        isOpen ?

        <div style={{display:'flex',justifyContent:'center',backgroundColor:'white',height:'100%',}}>
        <ol style={{listStyle:'inside',fontFamily:'Open sans'}}>
          <li style={{fontWeight:900,margin:'30px 0px'}}>Explore the world of management</li>
          <li style={{margin:'5px 0px'}}>Technical Project Management</li>
          <li style={{margin:'5px 0px'}}>Threadbuild</li>
          <li style={{margin:'5px 0px'}}>Structure your pointers</li>
          <li style={{margin:'5px 0px'}}>4SA Method</li>
        </ol>
        </div>
        :
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px',}}>
        <button style={{padding:'15px 25px',borderRadius:'20px',border:'2px solid #0029FF',fontSize:'20px',color:'#0029FF',fontWeight:900}}>1</button>
        </div>
        
      }

      </motion.div>
    </div>
  )
}

export default LeftSection
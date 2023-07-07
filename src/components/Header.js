import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from "../assests/logo.svg";
import home from "../assests/home.svg";
import tools from "../assests/tools.svg";
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';






export default function Header() {
  

  const imageUrl = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#F0F0F0',padding:"8px 50px", }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2, }}
          >
            <img width={250} src={logo} alt="Logo" />
          </IconButton>
          
          
          <Box sx={{ flexGrow: 1,}} />
          <Box sx={{ display: { md: 'flex' }, }}>

            <IconButton size="large" color="inherit">
              <Fab size='small' color="primary" style={{ background: '#3683F0',width:35,height:35 }} >
              <img  src={home} alt="Home" />
              </Fab>
            </IconButton>
            
            <IconButton size="large" color="inherit">
              <Fab size='small' color="primary" style={{ background: '#3683F0',width:35,height:35 }} >
              
              <img src={tools} alt="Setting" />
              </Fab>
            </IconButton>

            <IconButton size="large" color="inherit">
              <Fab size='small' color="primary" style={{ background: '#3683F0',width:35,height:35 }} >
              
              <Badge sx={{
          "& .MuiBadge-badge": {
            color: "red",
            backgroundColor: "red"
          }
        }} variant="dot">
              <NotificationsIcon fontSize='small'/>
              </Badge>
              </Fab>
            </IconButton>

            <IconButton size="large" color="inherit">
            <Avatar
              alt="Remy Sharp"
              src={imageUrl}
              sx={{ width: 35, height: 35, }}
            />
            </IconButton>

            <IconButton size="small" color="inherit">
            
            <MoreVertIcon color='primary' />
            </IconButton>

           
          </Box>
         
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}

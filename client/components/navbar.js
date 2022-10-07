import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { MenuItem } from '@mui/material';
import Link from 'next/link';
// import Link from '@mui/material/Link';

// import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            
          </Typography>
          <MenuItem>
          <Typography variant="h6" color="inherit" component="div">
          <Link href="/"><span style={{textDecoration:"none",color:"white"}}>Home</span></Link>
           
          </Typography>
          </MenuItem>
      
        </Toolbar>
      </AppBar>
    </Box>
  );
}

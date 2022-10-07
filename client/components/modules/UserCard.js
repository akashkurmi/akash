// import "./UserCard.css"

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, useThemeProps } from '@mui/material';
import Link from 'next/link';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function UserCard(prop) {
  return (
    <Container maxWidth="sm">
   
    <Card sx={{ minWidth: 300 }} variant="outlined">
      <CardContent>
      
        <Typography variant="h6" component="div">
        {prop.index+1}. {prop.data.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {prop.data.email}
        </Typography>
        <Typography variant="body2">
             {prop.data.address}
          <br />
           Ph.  <Link href="#">{prop.data.phone}</Link>
        </Typography>
         </CardContent>
   
    </Card>
    </Container>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Draw_bar from './Draw_bar';
import Barcharts from './Barcharts';
import Home from './Home';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Site_count(props) {
  return (
    <Card  sx={{ minWidth: 230 }} style={{ backgroundColor :'#ffcccc',top : 40}}>
      <CardContent>
        <Typography variant="h6" component="div">Site Counts
        </Typography>
        <Typography variant="h5" component="div">
        {props.site_count}
        </Typography>
        <CardActions>
        <div align="center"><Link to="/barcharts">View List</Link></div>

        
      
      </CardActions>
        
      </CardContent>
      <CardActions>
      </CardActions>
      
    </Card>
  );
}
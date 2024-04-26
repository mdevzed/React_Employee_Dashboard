import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Face5Icon from '@mui/icons-material/Face5';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from '../data/data';

export default function MediaCard({employee_data}) {
  return (
    <>
    {data.map((item,index) => (
        <Card sx={{ maxWidth: 365, px: 2, margin:'auto', justifyContent: "center"}}>
          <Box sx = {{justifyContent: "center", alignItems: "center", margin: 'auto'}}>
            <CardMedia
            sx={{ height: 240, width: 240, backgroundSize: 'contain', marginTop: '10px', justifyContent: "center", alignItems: "center" }}
            image={`/React_Employee_Dashboard/${item.image}`}
            title={item.firstName + ' ' + item.lastName}

            />
          </Box>
          <CardContent sx={{}}>
            <Face5Icon />
            <Typography gutterBottom variant="h5" component="div">
              {item.firstName} {item.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.department}
            </Typography>
            <Stack 
              direction="row" spacing={1} my={1}
              justifyContent= "center" alignItems= "center"
              sx={{
                my: 2, flexWrap: "wrap"
              }}>
              {item.skills.map((skill, skillIndex) => (
                <Chip key = {skillIndex} label={skill} my={1}
                  variant="outlined" sx={{my: '2', fontSize: '.75rem'}}/>
              ))}
            </Stack>
            <Stack direction="row" spacing={1} my={1} justifyContent="center">
              <Chip label={item.onLeave ? "Inactive": "Active"} 
                variant={item.onLeave ? "" : "outlined"}
                sx={{fontSize: '.75rem'}}/>
              <Chip label={`Hours: ${item.hoursLoggedThisWeek}`} 
                variant="outlined" 
                sx={{fontSize: '.75rem'}}/>
            </Stack>
          </CardContent>
        </Card>
    ))}
    </>   
  );
}
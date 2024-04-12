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

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 365, px: 2, margin:'auto'}}>
      <Box sx={{alignItems: "center"}}>
        <CardMedia
        sx={{ height: 240, width: 240, backgroundSize: 'contain'}}
        image="profile1.png"
        title="Jeff Bobley"
        />
      </Box>

      <CardContent sx={{}}>
        <Face5Icon />
        <Typography gutterBottom variant="h5" component="div">
          Jeff Bobley
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department: Product Design
        </Typography>
        <Stack direction="row" spacing={1} my={1}>
          <Chip label="Manager" variant="outlined" sx={{fontSize: '.75rem'}}/>
          <Chip label="Figma" variant="outlined" sx={{fontSize: '.75rem'}} />
          <Chip label="JavaScript" variant="outlined" sx={{fontSize: '.75rem'}} />
        </Stack>
        <Stack direction="row" spacing={1} my={1} justifyContent="center">
          <Chip label="NY" variant="outlined" sx={{fontSize: '.75rem'}}/>
          <Chip label="Full-Time" variant="outlined" sx={{fontSize: '.75rem'}} />
        </Stack>
      </CardContent>
    </Card>
  );
}
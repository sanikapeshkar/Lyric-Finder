import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function(){
    return(
        <AppBar position="relative">
        <Toolbar>
          <MusicNoteIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="primary-dark" noWrap>
            Melody | LyricFinder
          </Typography>
        </Toolbar>
 
      </AppBar>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import DownListComp from './DownList/DownListComp'
import { Grid, Container } from '@material-ui/core';


function TrendingComp() {
  
  return (
    <div className="root">
        <Container fixed>
            <Grid 
                container 
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={5}>
                    <h1>Trending</h1>
                </Grid>
            </Grid>
            <DownListComp type="DownListUITypeEpisode"/>  
        </Container>
    </div>
  );
}

export default TrendingComp;

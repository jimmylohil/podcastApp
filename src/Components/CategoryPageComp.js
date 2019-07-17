import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DownListComp from './DownList/DownListComp'
import { Grid, Container } from '@material-ui/core';
import Rating from 'material-ui-rating'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

function HomeContainerComp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fixed>
                {/* Category Name */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={6}>
                        <h2>Category A</h2>
                    </Grid>
                </Grid>
                <DownListComp type="DownListUITypeEpisode"/>
            </Container>
        </div>
    )
}

export default HomeContainerComp

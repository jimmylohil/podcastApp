import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeaderComp from './HeaderComp'
import LinearListComp from './LinearList/LinearListComp'
import RecommendedForYouComp from './RecommendedForYouComp';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

function HomeContainerComp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <HeaderComp />
            <Container fixed>
                {/* New Release */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={2}>
                        <h2>New Release</h2>
                    </Grid>
                </Grid>
                <LinearListComp type="LinearListUITypeNew"/>
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Grid item xs={1}>
                        <h5>Show More >></h5>
                    </Grid>
                </Grid>
                {/* Recently Played */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={2}>
                        <h2>Recently Played</h2>
                    </Grid>
                </Grid>
                <LinearListComp type="LinearListUITypeReguler"/>
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Grid item xs={1}>
                        <h5>Show More >></h5>
                    </Grid>
                </Grid>
                {/* Recommended For You */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={3}>
                        <h2>Recommended For You</h2>
                    </Grid>
                </Grid>
                <RecommendedForYouComp />
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Grid item xs={1}>
                        <h5>Show More >></h5>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HomeContainerComp

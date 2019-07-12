import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeaderComp from './HeaderComp'
import LinearListComp from './LinearList/LinearListComp'
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function HomeContainerComp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <HeaderComp />
                {/* New Release */}
            <Container fixed>
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
                    <Grid item xs={2}>
                        <h3>Show More >></h3>
                    </Grid>
                </Grid>

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
                    <Grid item xs={2}>
                        <h3>Show More >></h3>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HomeContainerComp

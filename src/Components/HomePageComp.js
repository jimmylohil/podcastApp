import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LinearListComp from './LinearList/LinearListComp'
import SquareGrid from './SquareGrid';
import { Grid, Container } from '@material-ui/core';
import {Link} from 'react-router-dom';

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
                {/* New Release */}
                <LinearListComp  type="LinearListUITypeNew" title="New Release"/>
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    >
                    <Grid item xs={1}>
                        <Link to="/new-release">
                            <h5>Show More >></h5>
                        </Link>
                    </Grid>
                </Grid>
                {/* Recently Played */}
                <LinearListComp type="LinearListUITypeReguler" title="Recently Played"/>
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Grid item xs={1}>
                        <Link to="/recently-played">
                            <h5>Show More >></h5>
                        </Link>
                    </Grid>
                </Grid>
                {/* Recommended For You */}
                <SquareGrid title="Recommended For You"/>
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Grid item xs={1}>
                        <Link to="/recommendedforyou">
                            <h5>Show More >></h5>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HomeContainerComp

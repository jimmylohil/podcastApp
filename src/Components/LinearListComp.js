import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import HomePodcastUIComp from './HomePodcastUIComp';
import UICompTes from './UICompTes';




const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                  <HomePodcastUIComp />
                </Grid>
                <Grid item xs={6}>
                <UICompTes />
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>New 3</Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>New 4</Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>New 5</Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>Show More</Paper>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

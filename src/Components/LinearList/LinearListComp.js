import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearListUIType from './LinearListUIType';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid2: {
    backgroundColor: 'yellow',
},
}));

function CenteredGrid(props) {
  const classes = useStyles();
  console.log (props.type);

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={2}>
              <LinearListUIType type={props.type}/>
            </Grid>
            <Grid item xs={2}>
              <LinearListUIType type={props.type}/>
            </Grid>
            <Grid item xs={2}>
              <LinearListUIType type={props.type}/>
            </Grid>
            <Grid item xs={2}>
              <LinearListUIType type={props.type}/>
            </Grid>
            <Grid item xs={2}>
              <LinearListUIType type={props.type}/>
            </Grid>
            <Grid item xs={2}>
              <LinearListUIType type={props.type}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default CenteredGrid;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DownListUIType from './DownListUIType';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function CenteredGrid(props) {
  const classes = useStyles();
  console.log (props.type);

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <DownListUIType type={props.type}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType type={props.type}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType type={props.type}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType type={props.type}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType type={props.type}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType type={props.type}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default CenteredGrid;
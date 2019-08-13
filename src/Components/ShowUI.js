import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import images from './podcast.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();
  let data = props.data.split('|');
  const uuid = data[2];

  const title = data[0].length >= 30 ? data[0].slice(0, 30).concat('...') : data[0]

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={images} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                {data[1] != null && data[1].length >= 200 ? data[1].slice(0, 200).concat('...') : data[1]}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

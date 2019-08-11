import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import { Link} from 'react-router-dom';
import images from '../podcast.jpg';

import auth from '../../auth';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
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
  play:{
    width:50,
    height:50,
  }
}));

export default function DownListUITypeEpisode() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Link to="/episodepage">
          <Grid container xs={12}spacing={2}>
            <Grid item xs={3}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={images} />
              </ButtonBase>
            </Grid>
            <Grid item xs={7} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Podcast Episode
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid 
              container 
              xs={2}
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center" 
              >

                <PlayCircleOutline className={classes.play} onClick={auth.showPlayer()}/>
            </Grid>
          </Grid>
        </Link>
      </Paper>
    </div>
  );
}

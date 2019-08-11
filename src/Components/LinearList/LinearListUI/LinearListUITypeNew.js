import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {Link} from 'react-router-dom';

import image from '../podcast.jpg'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  header: {
    height: 20,
    width:60,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  link : {
    textDecoration : 'none',
  },
  content : {
    maxHeight: 20 ,
  },
}));

export default function LinearListUITypeNew(props) {
  const classes = useStyles();
  let data = props.data.split('|');
  const uuid = data[2];
  
  const title = data[0].length >= 30 ? data[0].slice(0, 30).concat('...') : data[0]

  return (
    <Card className={classes.card}>
    <Link to={`/episodepage/${uuid}`} className={classes.link}>
      <CardHeader
        className={classes.header}
        title="NEW"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={data[1]}
      />
      <CardContent>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
          {title}
        </Typography>
      </Grid>
      </CardContent>
    </Link>
    </Card>
  );
}

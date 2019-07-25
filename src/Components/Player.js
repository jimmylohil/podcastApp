import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import music from '../images/music.jpg';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import back from '../images/back15.png';
import forward from '../images/forward15.png';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    height : '100px',
    position: 'fixed',
    bottom: '0',
    zIndex : '100',
    width : '100%',
    
  },
  phantom : {
    display : 'block',
    width : '100%',
    height : '100px',
  },

  details: {
    display: 'flex',
  },
  
  content: {
    display : 'flex',
    flexDirection : 'column',
    
  },
  cover: {
    width: '100px',
    height : '100px',
  },

  controls: {
    display: 'flex',
    flexDirection : 'column',
    width : '50%',
    alignItems: 'center',
    justifyContent : 'center',
    margin : '0 auto'
    
  },
 forwardIcon: {
    height: '24px',
    width: '24px',
  },
  backIcon: {
    height: '24px',
    width: '24px',
  },
  
  
  bar:{
    display : 'flex',
    flexDirection : 'row',
    
  },
  slider : {
      width : 500,
      
  },
  volume : {
      display : 'flex',
      flexDirection :'row',
      width : '150px',
      alignItems: 'center',
      marginLeft : 'auto',
      marginRight : '5%',
  },
  

}));

export default function Player() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
      <div>
          <div className={classes.phantom} />
            <Card className={classes.card}>
                    <CardMedia
                    className={classes.cover}
                    image={music}
                    title="skripsi"
                    />

            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Episode 8 : Skripsi
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Podcaster
                    </Typography>
                </CardContent>
            </div>

            <div className={classes.controls}>
                <div className={classes.controlsbutton}>
                    <IconButton aria-label="Previous">
                        {theme.direction === 'rtl' ? <img src={back} className={classes.backIcon} /> : <img src={back} className={classes.backIcon}/>}
                    </IconButton>
                    <IconButton aria-label="Play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="Next">
                        {theme.direction === 'rtl' ? <img src={forward} className={classes.forwardIcon} /> : <img src={forward} className={classes.forwardIcon}/>}
                    </IconButton>
                    </div>
                <div className={classes.bar}>
                    <span>00:00</span>
                    <Slider className = {classes.slider} defaultValue={30} onChange={handleChange} aria-labelledby="continuous-slider"/>
                    <span>16:00</span>
                </div>
            </div>

            <div className={classes.volume}>
                <VolumeUp  />
                
                <Slider className = {classes.volumeSlider} defaultValue={30} onChange={handleChange} aria-labelledby="continuous-slider"/>
            </div>

            </Card>
      
      </div>
    
  );
}
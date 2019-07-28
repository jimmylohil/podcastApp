import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DownListComp from './DownList/DownListComp'
import { Grid, Container } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Modal from '@material-ui/core/Modal';
import ReviewComp from './ReviewComp';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import images from './podcast.jpg';

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        marginBottom:30,
    },
    blue:{
        backgroundColor:'blue',
    },
    image: {
        width: 250,
        height: 250,
        margin: 10,
        display: 'block',
      },
    img: {
        width: 150,
        height: 150,
        margin: '0',
        display: 'block',
      },
    title: {
        margin:0,
        fontSize:75,
        textAlign: 'left',
    },
    podcaster: {
        margin:0,
        MarginBottom:20,
        textAlign: 'left',
    },
    rate: {
        marginTop:6,
    },
    rating:{
        marginTop:30,
        fontSize:60,
    },
    review:{
        width:410,
        marginTop:30,
        marginBottom:10,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
      },
}));

function EpisodePageComp() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Container fixed>
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.grid}
                    >
                    {/* Episode Image */}
                    <Grid item xs={3} >
                        <Grid 
                            container 
                            spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="center" >
                            <ButtonBase>
                                <img className={classes.image} alt="complex" src={images} />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                    {/* Episode Name */}
                    <Grid item xs={7} >
                        <Grid 
                            container 
                            spacing={1}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            >
                            <Grid item xs ={12}>
                                <h1 className={classes.title}>Episode: Title</h1>
                            </Grid>
                            <Grid item xs ={12}>
                                <h2 className={classes.podcaster}>By Podcaster</h2>
                            </Grid>
                            <Grid item xs ={2}>
                                <Rating value={value} readOnly />   
                            </Grid>
                            <Grid item xs ={2} >
                                <Grid 
                                    container 
                                    spacing={1}
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <h4 className={classes.rate}>3/5</h4>
                                </Grid>
                            </Grid>
                            <Grid item xs ={12}>
                                <Grid 
                                    container 
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start">
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className={classes.button} 
                                        onClick={handleOpen}>
                                        Review
                                    </Button>
                                    {/* ReviewModal */}
                                    <Modal
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <div style={modalStyle} className={classes.paper}>
                                        <Grid 
                                            container 
                                            spacing={1}
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            >
                                            {/* Episode Image */}
                                            <Grid item xs={5} >
                                                <Grid 
                                                    container 
                                                    spacing={1}
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center" >
                                                    <ButtonBase>
                                                        <img className={classes.img} alt="complex" src={images} />
                                                    </ButtonBase>
                                                </Grid>
                                            </Grid>
                                            {/* Episode Name */}
                                            <Grid item xs={7} >
                                                <Grid 
                                                    container 
                                                    spacing={1}
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center"
                                                    >
                                                    <Grid item xs ={12}>
                                                        <Grid 
                                                        container 
                                                        spacing={1}
                                                        direction="row"
                                                        justify="flex-start"
                                                        alignItems="flex-start">
                                                            <h1>Episode: Title</h1>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs ={12}>
                                                        <h3 className={classes.podcaster}>By Podcaster</h3>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid 
                                                container 
                                                spacing={1}
                                                direction="row"
                                                justify="center"
                                                alignItems="center"
                                                >
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    className={classes.rating}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    />
                                                <Grid item xs ={12}>
                                                    <Grid 
                                                    container 
                                                    spacing={1}
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="flex-start">
                                                    <TextareaAutosize
                                                        rowsMax={4}
                                                        aria-label="maximum height"
                                                        placeholder="Maximum 4 rows"
                                                        className={classes.review}
                                                        defaultValue="Review Here"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid 
                                                container 
                                                spacing={1}
                                                direction="row"
                                                justify="flex-end"
                                                alignItems="flex-end"
                                                >
                                                <Grid item xs ={3}>
                                                    <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
                                                </Grid>
                                                <Grid item xs ={3}>
                                                    <Button variant="contained" color="primary">Save</Button>
                                                </Grid>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Modal>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs ={10}>
                        <ExpansionPanel classes>
                            {/* About Tab*/}
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>About</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            {/* Review Tab*/}
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography className={classes.heading}>Review</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid item xs={6}>
                                    <ReviewComp />
                                </Grid>
                                <Grid item xs={6}>
                                    <ReviewComp />
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>        
                    </Grid>
                </Grid>   
                <DownListComp type="DownListUITypeEpisode"/>        
            </Container>
        </div>
    )
}

export default EpisodePageComp

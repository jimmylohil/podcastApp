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
import images from './podcast.jpg';

function getModalStyle() {
    const top = 50;
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
    image: {
        width: 300,
        height: 300,
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    title: {
        margin:0,
        marginTop:20,
        fontSize:75,
    },
    podcaster: {
        margin:0,
        MarginBottom:20,
        textAlign: 'left',
    },
    rate: {
        marginTop:6,
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
    const [value, setValue] = React.useState(3);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);

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
                    <Grid item xs={4} >
                        <Grid 
                            container 
                            spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="center" >
                            <ButtonBase className={classes.image}>
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
                            justify="flex-start"
                            alignItems="flex-start"
                            >
                            <Grid item xs ={12}>
                                <Grid 
                                container 
                                spacing={1}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                    <h1 className={classes.title}>Episode: Title</h1>
                                </Grid>
                            </Grid>
                            <Grid item xs ={12}>
                                <h2 className={classes.podcaster}>By Podcaster</h2>
                            </Grid>
                            <Grid item xs ={3}>
                                <Rating value={value} readOnly />   
                            </Grid>
                            <Grid item xs ={2} >
                                <Grid 
                                    container 
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start">
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
                                        <h2 id="modal-title">Text in a modal</h2>
                                        <p id="simple-modal-description">
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </p>
                                        </div>
                                    </Modal>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs ={10}>
                        <ExpansionPanel classes>
                            {/* About */}
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
                            {/* Review */}
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

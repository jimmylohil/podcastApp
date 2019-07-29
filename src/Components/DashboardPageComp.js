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
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
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
    image: {
        width: 250,
        height: 250,
        margin: 10,
      },
    img: {
        width: 150,
        height: 150,
        margin: 10,
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
        marginTop:4,
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

function PlaylistPageComp() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(3);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Container fixed>
                {/* Category Name */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.grid}
                    >
                    {/* Show Image */}
                    <Grid item xs={4} >
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
                    {/* Playlist Name */}
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
                                    <h1 className={classes.title}>Podcast Name</h1>
                                </Grid>
                            </Grid>
                            <Grid item xs ={12}>
                                <h2 className={classes.podcaster}>By Name</h2>
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
                            <Grid item xs ={5} >
                                <Grid 
                                    container 
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.rate}>
                                    1 Subscribed
                                </Grid>
                            </Grid>
                            <Grid item xs ={3}>
                                <Grid 
                                    container 
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start">
                                    <Button variant="contained" color="primary" className={classes.button} onClick={handleOpen}>
                                        Add New Episode
                                    </Button>
                                    {/* AddNewEpisodeModal */}
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
                                            <Grid item xs={7} >
                                                <Grid 
                                                    container 
                                                    spacing={1}
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center"
                                                    >
                                                    <Grid item xs ={12}>
                                                        {/* EpisodeName */}
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            label="Episode Name"
                                                            className={classes.textField}
                                                            margin="normal"
                                                            variant="outlined"
                                                        />   
                                                    </Grid>
                                                    <Grid item xs ={12}>
                                                        {/* Description */}
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            label="Description"
                                                            className={classes.textField}
                                                            margin="normal"
                                                            variant="outlined"
                                                        />  
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs ={12}>
                                                {/* UploadFile */}
                                                <Button variant="contained">Upload File</Button>
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
                            <Grid item xs ={2}>
                                <Grid 
                                    container 
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start">
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Insight
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item xs ={2}>
                                <Grid 
                                    container 
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start">
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Edit
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    {/* About */}
                    <Grid 
                        container 
                        spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="center" >
                        <Grid item xs ={10} >
                            <ExpansionPanel 
                                expanded={expanded === 'panel1'} 
                                onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography>About</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                        maximus est, id dignissim quam.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>               
                </Grid>   
                <DownListComp type="DownListUITypeEpisode"/>        
            </Container>
        </div>
    )
}

export default PlaylistPageComp

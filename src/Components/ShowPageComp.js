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
import images from './podcast.jpg';

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
}));

function ShowPageComp() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value] = React.useState(3);

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
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={images} />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                    {/* Show Name */}
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
                                    <h1 className={classes.title}>Show Name</h1>
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
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Subscribe
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

export default ShowPageComp

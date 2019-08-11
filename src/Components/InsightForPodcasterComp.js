import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import {Line} from 'react-chartjs-2';
import images from './podcast.jpg';

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
const LineChart = (props) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]};
    return <Line data={data} width={20} height={20} options={{ maintainAspectRatio: true }}/>
}

function EpisodePageComp() {
    const classes = useStyles();
    const [value] = React.useState(0);

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
                                    1 Subscribed
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                 </Grid>         
                 <LineChart />
            </Container>
        </div>
    )
}

export default EpisodePageComp

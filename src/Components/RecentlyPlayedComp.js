import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearListComp from './LinearList/LinearListComp'
import {Link} from 'react-router-dom';
import {Pie} from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

const PieChart = (props) => {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    return <Pie data={data} width={20} height={20} options={{ maintainAspectRatio: false }}/>
}

function RecentlyPlayedComp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fixed>
                {/* Chart */}
                <PieChart />
                {/* Recently Played */}
                <LinearListComp type="LinearListUITypeReguler" title="Recently Played"/>
            </Container>
        </div>
    )
}

export default RecentlyPlayedComp

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearListComp from './LinearList/LinearListComp'
import SquareGrid from './SquareGrid';
import { Grid, Container } from '@material-ui/core';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
  });

class HomePageComp extends Component {


    render(){
    const {classes} = this.props;
    const NewReleaseUrl = "http://localhost:8000/api/latesteps/?token=".concat(sessionStorage.getItem("JWT"))
    const RecommendedForYouUrl = `http://localhost:8000/api/getSuggestion?token=${sessionStorage.getItem("JWT")}&username=${sessionStorage.getItem("Username")}`

    return (
        <div className={classes.root}>
            <Container fixed>
                {/* New Release */}
                <LinearListComp  type="LinearListUITypeNew" title="New Release" url={NewReleaseUrl}/>
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    >
                    <Grid item xs={1}>
                        <Link to="/new-release">
                            <h5>Show More >></h5>
                        </Link>
                    </Grid>
                </Grid>
                {/* Recently Played */}
                <LinearListComp type="LinearListUITypeReguler" title="Recently Played"/>
                {/* Show More */}
                <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Grid item xs={1}>
                        <Link to="/recently-played">
                            <h5>Show More >></h5>
                        </Link>
                    </Grid>
                </Grid>
                {/* Recommended For You */}
                <SquareGrid title="Recommended For You" url={RecommendedForYouUrl}/>
            </Container>
        </div>
    )
    }
}

HomePageComp.propTypes = {
    classes : PropTypes.object.isRequired,
    
}



export default withStyles(useStyles)(HomePageComp);

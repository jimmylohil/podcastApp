import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearListUIType from './LinearListUIType';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'
import axios from 'axios';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid2: {
    backgroundColor: 'yellow',
  },
});
let allstring = ""
let allstring1 = ""
let allstring2 = ""
let allstring3 = ""
let allstring4 = ""
let allstring5 = ""
class LinearListComp extends Component{
  constructor(props){
    super(props);
    this.state = {
       allstring : "",
       allstring1 : "",
       allstring2 : "",
       allstring3 : "",
       allstring4 : "",
       allstring5 : ""
    };
  };
  componentDidMount() {
     axios.get(this.props.url)
    .then(
        (response) => {
            var counter = 0;
              response.data.episodes.forEach(val => {
              if (counter === 0) {
                allstring += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 1){
                allstring1 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 2){
                allstring2 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 3){
                allstring3 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 4){
                allstring4 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 5) {
                allstring5 += val.title + "|" + val.description + "|" + val.uuid
              }
              counter++;
            })
            this.setState(
                {allstring : allstring,
                allstring1 : allstring1,
                allstring2 : allstring2,
                allstring3 : allstring3,
                allstring4 : allstring4,
                allstring5 : allstring5}
            )})
    .catch(function(error){
        console.log(error);
    })
  };
    render(){
    const {classes} = this.props;
    const title = this.props.title &&
      <div>
        <Grid 
          container 
          spacing={1}
          direction="row"
          justify="flex-start"
          alignItems="center">
          <Grid item xs={3}>
              <h1>{this.props.title}</h1>
          </Grid>
        </Grid>
      </div>


    return (
      <div className={classes.root}>
        {title}
          <Grid container spacing={3}>
              <Grid item xs={2}>
                <LinearListUIType type={this.props.type} data ={this.state.allstring}/>
              </Grid>
              <Grid item xs={2}>
                <LinearListUIType type={this.props.type} data ={this.state.allstring1}/>
              </Grid>
              <Grid item xs={2}>
                <LinearListUIType type={this.props.type} data ={this.state.allstring2}/>
              </Grid>
              <Grid item xs={2}>
                <LinearListUIType type={this.props.type} data ={this.state.allstring3}/>
              </Grid>
              <Grid item xs={2}>
                <LinearListUIType type={this.props.type} data ={this.state.allstring4}/>
              </Grid>
              <Grid item xs={2}>
                <LinearListUIType type={this.props.type} data ={this.state.allstring5}/>
              </Grid>
          </Grid>
      </div>
    );
  }
}

LinearListComp.propTypes = {
    classes : PropTypes.object.isRequired,
    
}



export default withRouter(withStyles(useStyles)(LinearListComp));
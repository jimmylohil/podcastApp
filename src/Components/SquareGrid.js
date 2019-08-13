import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'
import ShowUI from './ShowUI';
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
});

let allstring = ""
let allstring1 = ""
let allstring2 = ""
let allstring3 = ""
let allstring4 = ""
let allstring5 = ""
let allstring6 = ""
let allstring7 = ""
let allstring8 = ""
let allstring9 = ""
let allstring10 = ""
let allstring11= ""
let allstring12 = ""
let allstring13 = ""
let allstring14 = ""
class SquareGrid extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      allstring : "",
      allstring1 : "",
      allstring2 : "",
      allstring3 : "",
      allstring4 : "",
      allstring5 : "",
      allstring6 : "",
      allstring7 : "",
      allstring8 : "",
      allstring9 : "",
      allstring10 : "",
      allstring11 : "",
      allstring12 : "",
      allstring13 : "",
      allstring14 : ""
    }
  }
  componentDidMount(){
    axios.get(this.props.url)
    .then(
      (response) => {
        var counter = 0;
        response.data.podcasts.forEach(val => {
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
              else if (counter === 6) {
                allstring6 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 7) {
                allstring7 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 8) {
                allstring8 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 9) {
                allstring9 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 10) {
                allstring10 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 11) {
                allstring11 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 12) {
                allstring12 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 13) {
                allstring13 += val.title + "|" + val.description + "|" + val.uuid
              }
              else if (counter === 14) {
                allstring14 += val.title + "|" + val.description + "|" + val.uuid
              }
              counter++;
            });
            this.setState(
                {allstring : allstring,
                allstring1 : allstring1,
                allstring2 : allstring2,
                allstring3 : allstring3,
                allstring4 : allstring4,
                allstring5 : allstring5,
                allstring6 : allstring6,
                allstring7 : allstring7,
                allstring8 : allstring8,
                allstring9 : allstring9,
                allstring10 : allstring10,
                allstring11 : allstring11,
                allstring12 : allstring12,
                allstring13 : allstring13,
                allstring14 : allstring14
              })
              }
              )
              .catch(function(error){
                console.log ("error")
                console.log(error);
      })
            
  }

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
      <Grid item xs={this.props.length}>
          <h1>{this.props.title}</h1>
      </Grid>
    </Grid>
  </div>

  return (
    <div className={classes.root}>
      {title}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring1}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring2}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring3}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring4}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring5}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring6}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring7}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring8}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring9}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring10}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring11}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring12}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring13}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><ShowUI data={this.state.allstring14}/></Paper>
        </Grid>

      </Grid>
    </div>
  );
}
}

SquareGrid.propTypes = {
  classes : PropTypes.object.isRequired,
  
}



export default withStyles(useStyles)(SquareGrid);


import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DownListUIType from './DownListUIType';
import PropTypes from 'prop-types'
import axios from 'axios'


const useStyles = theme => ({
  root: {
    flexGrow: 1,
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
class DownListComp extends Component {
  constructor(props){
    super(props);
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
       allstring9 : ""

    };
  };
  componentWillMount(props) { 
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
              counter++;
            })
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
                allstring9 : allstring9}

                )})
                .catch(function(error){
                  console.log(error);
                })
              }

            
    render(){
      if (this.state.allstring != "") {
      const {classes} = this.props;
      const title = this.props.title &&
    <div>
      <Grid 
        container 
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="center">
  
        <Grid item xs={5}>
            <h1>{this.props.title}</h1>
        </Grid>
      </Grid>
    </div>

  return (
    <div className={classes.root}>
      {title}
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <DownListUIType key={1} type={this.props.type} data ={this.state.allstring}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={2} type={this.props.type} data ={this.state.allstring1}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={3} type={this.props.type} data ={this.state.allstring2}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={4} type={this.props.type} data ={this.state.allstring3}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={5} type={this.props.type} data ={this.state.allstring4}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={6} type={this.props.type} data ={this.state.allstring5}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={7} type={this.props.type} data ={this.state.allstring6}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={8} type={this.props.type} data ={this.state.allstring7}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={9} type={this.props.type} data ={this.state.allstring8}/>
            </Grid>
            <Grid item xs={12}>
              <DownListUIType key={10} type={this.props.type} data ={this.state.allstring9}/>
            </Grid>
        </Grid>
    </div>
  );}
  else{
    return null
  }
}
}

DownListComp.propTypes = {
classes : PropTypes.object.isRequired,
  
}




export default withStyles(useStyles)(DownListComp);
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';

const useStyles = theme =>({
  '@global':{
    body : {
      background: 'linear-gradient(326deg, #050115 0%, #100a26 47%, #3c0b65 95%)', 
    },
  },
  paper : {
    width : theme.spacing(45),
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : theme.palette.common.white,
    padding : theme.spacing(5),
  },
  form : {
    width : '100%',
    marginTop : theme.spacing(1),
  },
  submit : {
    margin : theme.spacing(2,0,2),
    background: 'linear-gradient(326deg, #050115 0%, #100a26 47%, #3c0b65 95%)',
  },
  link : {
    textDecoration : 'none',
  },
});

const formValid = ({ formErrors, ...rest}) =>{
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val =>{
    val === null && (valid = false);
  });
  return valid;
}

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password : "",
      formErrors : {
        username : "",
        password : "",
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
  
  onChange = e => {
    e.preventDefault();
    const {id, value} = e.target;
    let formErrors = this.state.formErrors;

    switch(id){
      case "username":
        formErrors.username = value.length < 3
        ? "Enter an username"
        : ""
        break;

      case "password":
        formErrors.password = value.length < 6
        ? "Minimum 6 characters required"
        : ""
        break;

      default:
        break;
    }

    this.setState({formErrors, [id] : value}, console.log(this.state));
  };

  onSubmit = e => {
    e.preventDefault();
    if(formValid(this.state)){
      console.log(this.state.username,
        this.state.email, this.state.password,
        this.state.confirmPassword);
      }

    else{
      console.error("Form Error");
    }
    
    const userData = {
      username : this.state.username,
      password : this.state.password
    }

    var apiUrl = "http://iseeliao.localtunnel.me/main/login";
    var self = this;
    var payload = {
      "username" : this.state.username,
      "password" : this.state.password
    }
    axios.post(apiUrl,payload)
    .then(
      function(response){
        console.log(response);
        if(response.status == 200 && response.data.error == null){
          console.log("Login successful");
          alert("Login Success");
          let authToken = response.data.token;
          sessionStorage.setItem("JWT", authToken);
          self.props.history.push({
            pathname:'/categorypage',
            state:{
            username : self.state.username,
          }});
        }
        else if(response.status == 200 && response.data.error == true){
          console.log("Username password do not match");
          alert("Username Password do not match")
        }
      }
    )
    .catch(function(error)
    {
      console.log(error);
    });
  };
 
  render(){
    const {classes} = this.props;
    const {formErrors} = this.state;
        return (
          <Grid container component="main" maxWidth="lg" spacing={0} direction="row"
          alignItems="center" justify="center" style={{minHeight: '100vh'}}>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">Login</Typography>
              <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                <TextField 
                  variant="outlined"
                  type="text"
                  label="Username"
                  id="username"
                  margin="normal"
                  required
                  fullWidth
                  onChange = {this.onChange}
                  helperText = {formErrors.username}
                  error ={formErrors.username.length === 0 ? false : true}
                  />
                <TextField 
                  variant="outlined"
                  type="password"
                  label="Password"
                  id="password"
                  margin="normal"
                  required
                  fullWidth 
                  onChange = {this.onChange}
                  helperText = {formErrors.password}
                  error ={formErrors.password.length === 0 ? false : true}
                />    
                <Link to="/categorypage" className={classes.link}>
                  <Button className={classes.submit}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    >Login</Button>
                </Link>         
              </form>

              <Grid container>
                <Grid item>
                  <Link to="/register" className={classes.link}>
                      {"Don't have an account ? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        );
  }
}

Login.propTypes ={
  classes : PropTypes.object.isRequired,
}


export default withStyles(useStyles)(Login);
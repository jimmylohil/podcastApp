import React from 'react';
import {Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import bgImg from '../images/bg.jpg';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import CategoryWelcomePage from './CategoryWelcomePage';

//for Styling 
const useStyles = theme =>({
  '@global':{
    body : {
      background: 'linear-gradient(326deg, #050115 0%, #100a26 47%, #3c0b65 95%)',
    },
  },

  paper : {
    width :theme.spacing(45),
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : theme.palette.common.white,
    padding : theme.spacing(5),
    // position : 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translateX(-50%) translateY(-50%)',
},

form : {
  width : '100%',
  marginTop : theme.spacing(1),
},

submit : {
  margin : theme.spacing(2,0,2),
  background: 'linear-gradient(326deg, #050115 0%, #100a26 47%, #3c0b65 95%)',

},

// textfield : {
//   color : theme.palette.common.white,

//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'grey',
//     },
//     '&:hover fieldset': {
//       borderColor: 'black',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'purple',
//     },
//   },
// }
link : {
  textDecoration : 'none',
},

});

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

const formValid = ({ formErrors, ...rest}) =>{
  let valid = true;
  
  Object.values(formErrors).forEach(val =>{
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val =>{
    val === null && (valid = false);
  });
  return valid;
};





class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      username : "",
      email :"",
      password : "",
      confirmPassword : "",
      formErrors : {
        username : "",
        email : "",
        password : "",
        confirmPassword : ""
      }
    }

  }

  onChange = e =>{
    e.preventDefault();
    const {id, value} = e.target;
    let formErrors = this.state.formErrors;
    

    switch(id){
      case "username":
        formErrors.username = value.length < 3
        ? "Minimum 3 characters required"
        : ""
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
        ? ""
        : "Invalid email address"
        break;

      case "password":
        formErrors.password = value.length < 6
        ? "Minimum 6 characters required"
        : ""
        break;

      case "confirmPassword":
        formErrors.confirmPassword = value != this.state.password
        ? "Password is not same"
        : ""
      
      default:
        break;
    }
    this.setState({formErrors, [id] : value}, console.log(this.state))
  }


  onSubmit = e =>{
    e.preventDefault();

    if(formValid(this.state)){
      console.log(this.state.username,
        this.state.email, this.state.password,
        this.state.confirmPassword);
      }

    else{
      console.error("Form Error");

    }


    var apiUrl = "http://iseeliao.localtunnel.me/main/signup";
    var self = this;
    var payload = {
      "username" : this.state.username,
      "email" : this.state.email,
      "password" : this.state.password
    }
    axios.post(apiUrl, payload)
    .then(
      function(response){
        console.log(response);
        if(response.data.code == 200){
          console.log("Registration successfull");
          alert("Registration successful");
          var categoryPage=[];
          categoryPage.push(<CategoryWelcomePage appContext=
            {self.props.appContext}/>)
            self.props.appContext.setState({Login:[], categoryPage:categoryPage})
        }
        else if(response.data.code == 401){
          console.log("Missing Fields");
          alert("Missing Fields")
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
            <Typography component="h1" variant="h5">Register</Typography>
            <form className={classes.form} onSubmit={this.onSubmit}>
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
                type="email"
                label="Email"
                id="email"
                margin="normal"
                required
                fullWidth 
                onChange = {this.onChange}
                helperText = {formErrors.email}
                error ={formErrors.email.length === 0 ? false : true}
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
                        
              <TextField 
                variant="outlined"
                type="password"
                label="Confirm Password"
                id="confirmPassword"
                margin="normal"
                required
                fullWidth 
                onChange = {this.onChange}
                helperText = {formErrors.confirmPassword}
                error ={formErrors.confirmPassword.length === 0 ? false : true}
                />
                      
              <Button className={classes.submit}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>Register</Button>
            </form>
            
              
            <RouterLink to ="/login" className={classes.link}>
              <Link variant="body2" >
                Already have an account? Login
              </Link>
            </RouterLink>
                  
          </div>

        </Grid>

        );
  
}
  }
    

Register.propTypes = {
  classes : PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Register);

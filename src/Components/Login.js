import React, { Component } from 'react';
import {component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import bgImg from '../images/bg.jpg';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import CategoryWelcomePage from './CategoryWelcomePage';
import axios from 'axios';
import AuthService from './AuthService';


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


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password : "",
    };
    this.onChange = this.onChange.bind(this);
    this.Auth = new AuthService();
  };
  

  onChange = e => {
    this.setState({[e.target.id] : e.target.value})
  };

  onSubmit = e => {
    e.preventDefault();
    
    const userData = {
      username : this.state.username,
      password : this.state.password
    }

    var apiBaseUrl = "http://iseeliao.localtunnel.me/main/login";
    var self = this;
    var payload = {
      "username" : this.state.username,
      "password" : this.state.password
    }
    axios.post(apiBaseUrl,payload)
    .then(
      function(response){
        console.log(response);
        var categoryPage=[];
        categoryPage.push(<CategoryWelcomePage appContext=
          {self.props.appContext}/>)
          self.props.appContext.setState({Login:[], categoryPage:categoryPage})
      }
      
    )

    .catch(function(error)
    {
      console.log(error);
    });
    

    

    console.log(userData);
    alert("Username :" + this.state.username + "Password" + this.state.password)
 
  };
 


  render(){

    const {classes} = this.props;
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
                
                  />
                  


                  <Button className={classes.submit}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  >Login</Button>
              </form>

              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                      Forgot password?
                  </Link>
                </Grid> */}

                <Grid item>
                  <RouterLink to="/register" className={classes.link}>
                    <Link href="#" variant="body2">
                        {"Don't have an account ? Sign Up"}
                    </Link>
                  </RouterLink>
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